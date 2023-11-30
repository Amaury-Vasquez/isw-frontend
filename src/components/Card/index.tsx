import { ReactNode } from "react";
import clsx, { ClassValue } from "clsx";

interface CardProps {
  children: ReactNode;
  className?: ClassValue;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "w-full flex flex-col rounded-lg shadow-md bg-base-200",
        className
      )}
    >
      {children}
    </div>
  );
}
