import clsx from "clsx";
import { HTMLProps, forwardRef } from "react";

interface RadioInputProps
  extends Omit<HTMLProps<HTMLInputElement>, "className" | "type"> {
  className?: string;
  label: string;
}

const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
  ({ className, label, ...props }, ref) => (
    <label
      className={clsx(
        "flex gap-2 items-center label cursor-pointer",
        className
      )}
    >
      <span className="label-text">{label}</span>
      <input type="radio" ref={ref} {...props} className="radio radio-accent" />
    </label>
  )
);

RadioInput.displayName = "RadioInput";
export default RadioInput;
