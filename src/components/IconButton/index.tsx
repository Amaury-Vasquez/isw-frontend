import clsx, { ClassValue } from "clsx";
import { HTMLProps } from "react";
import { IconType } from "react-icons";
import { Variant, Size } from "@/types/style";
import { getTextVariant } from "@/utils/styles";

export type ButtonType = "button" | "submit" | "reset";

export interface IconButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, "size" | "className" | "type"> {
  className?: ClassValue;
  iconClassName?: ClassValue;
  type?: ButtonType;
  size?: Size;
  variant?: Variant;
  Icon: IconType;
}

export function IconButton({
  className,
  iconClassName,
  size = "md",
  variant = "base",
  Icon,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-full p-2 flex w-fit transition-color h-fit items-center justify-center focus-visible:bg-neutral-100 transition-color lg:bg-transparent hover:bg-neutral-100",
        className
      )}
      {...props}
    >
      <Icon
        className={clsx(
          {
            "text-xl": size === "sm",
            "text-2xl": size === "md",
            "text-3xl": size === "lg",
            "text-4xl": size === "xl",
          },
          getTextVariant(variant),
          iconClassName
        )}
      />
    </button>
  );
}
