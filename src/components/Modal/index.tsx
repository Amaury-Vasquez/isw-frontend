import clsx, { ClassValue } from "clsx";
import { forwardRef, ReactNode, useCallback, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { AiOutlineClose } from "react-icons/ai";
import { IconButton } from "../IconButton";

type ContentPosition = "left" | "right" | "center";

interface ModalProps {
  className?: ClassValue;
  title?: string;
  children: ReactNode;
  contentClassName?: ClassValue;
  closeOnClickOutside?: boolean;
  fullHeight?: boolean;
  fullWidth?: boolean;
  position?: ContentPosition;
  titleClassName?: ClassValue;
  showCloseButton?: boolean;
  closeModal: () => void;
}

export const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  (
    {
      className,
      contentClassName,
      children,
      title,
      closeOnClickOutside = true,
      fullHeight = true,
      fullWidth = false,
      position = "left",
      showCloseButton = true,
      titleClassName,
      closeModal,
    },
    ref
  ) => {
    const formRef = useRef<HTMLFormElement>(null);
    const handleClickOutside = useCallback(() => {
      if (closeOnClickOutside) closeModal();
    }, [closeOnClickOutside, closeModal]);

    useOnClickOutside(formRef, handleClickOutside);

    return (
      <dialog
        className={clsx(
          "modal flex items-center",
          {
            "justify-center": position === "center",
            "justify-start": position === "left",
            "justify-end": position === "right",
          },
          className
        )}
        ref={ref}
      >
        <form
          method="dialog"
          className={clsx(
            "flex w-full flex-col bg-base-100 max-w-[420px] rounded-md",
            fullHeight && "h-full",
            fullWidth && "max-w-full"
          )}
          ref={formRef}
        >
          <div
            className={clsx(
              "flex items-center py-2 px-4",
              title ? "justify-between" : "justify-end"
            )}
          >
            {title && (
              <h1 className={clsx("text-xl", titleClassName)}> {title}</h1>
            )}
            {showCloseButton ? (
              <IconButton
                Icon={AiOutlineClose}
                variant="primary"
                size="md"
                onClick={closeModal}
              />
            ) : null}
          </div>
          <div className={clsx("flex flex-col w-full px-4", contentClassName)}>
            {children}
          </div>
        </form>
      </dialog>
    );
  }
);

Modal.displayName = "Modal";
