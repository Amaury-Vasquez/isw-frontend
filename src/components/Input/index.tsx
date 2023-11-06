import clsx, { ClassValue } from "clsx";
import { HTMLProps, forwardRef } from "react";

interface InputProps
  extends Omit<HTMLProps<HTMLInputElement>, "className" | "type"> {
  className?: ClassValue;
  label?: string;
  type?: "text" | "number" | "email" | "password";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className={clsx("form-control w-full", className)}>
        {label ? (
          <label className="label" htmlFor={id}>
            <span className="label-text">{label}</span>
          </label>
        ) : null}
        <input id={id} ref={ref} {...props} className="input input-bordered" />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
