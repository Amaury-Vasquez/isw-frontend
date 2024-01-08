import clsx, { ClassValue } from "clsx";
import { HTMLProps, forwardRef, useCallback, useState } from "react";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import { IconButton } from "@/components";

interface QuantityInputProps
  extends Omit<
    HTMLProps<HTMLInputElement>,
    "className" | "type" | "onChange" | "value"
  > {
  className?: ClassValue;
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const QuantityInput = forwardRef<HTMLInputElement, QuantityInputProps>(
  ({ className, label, value, onChange, ...props }, ref) => {
    const [isPatternError, setIsPatternError] = useState(false);

    const increase = useCallback(() => {
      onChange(value + 1);
    }, [value, onChange]);

    const decrease = useCallback(() => {
      const newValue = value - 1;
      if (newValue >= 0) onChange(value - 1);
    }, [value, onChange]);

    const handleChange = useCallback(
      (value: string) => {
        if (value === "") onChange(0);
        else {
          const isNumber = /^\d+$/.test(value);
          if (isNumber) {
            onChange(Number(value));
            setIsPatternError(false);
          } else setIsPatternError(true);
        }
      },
      [onChange]
    );

    return (
      <div className={clsx("flex justify-center items-center px-4", className)}>
        <label className="label">
          <span className="label-text capitalize">{label}</span>
        </label>
        <div
          className={clsx(
            "flex items-center gap-x-2",
            isPatternError && "tooltip tooltip-open tooltip-error"
          )}
          data-tip="Solo se permiten números"
        >
          <IconButton
            Icon={MdRemoveCircleOutline}
            size="sm"
            iconClassName="text-secondary-focus"
            type="button"
            onClick={(e: { preventDefault: () => void }) => {
              e.preventDefault();
              decrease();
            }}
          />
          <input
            id="quantity"
            ref={ref}
            value={value}
            onChange={(e) => {
              e.preventDefault();
              handleChange(e.target.value);
            }}
            className="input bg-transparent input-bordered w-24 text-center"
            pattern="[0-9]*"
            onBlur={() => setIsPatternError(false)}
            min={0}
            {...props}
          />
          <IconButton
            Icon={MdAddCircleOutline}
            size="sm"
            iconClassName="text-secondary-focus"
            type="button"
            onClick={(e: { preventDefault: () => void }) => {
              e.preventDefault();
              increase();
            }}
          />
        </div>
      </div>
    );
  }
);

QuantityInput.displayName = "QuantityInput";

export default QuantityInput;
