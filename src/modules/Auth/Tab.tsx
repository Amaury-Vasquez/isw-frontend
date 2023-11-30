import clsx from "clsx";

interface TabProps {
  text: string;
  active: boolean;
  onClick: () => void;
}

export default function Tab({ text, active, onClick }: TabProps) {
  return (
    <button
      className={clsx(
        "w-40 bg-base-200 rounded-lg h-10 p-6 justify-center flex items-center",
        active && "bg-primary bg-opacity-70"
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
