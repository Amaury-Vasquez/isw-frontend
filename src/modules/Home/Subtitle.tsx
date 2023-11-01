import { IconType } from "react-icons";

interface SubtitleProps {
  text: string;
  Icon?: IconType;
}

export default function Subtitle({ text, Icon }: SubtitleProps) {
  return (
    <h2 className="text-xl font-bold flex items-center gap-x-2 mb-2">
      {Icon ? <Icon className="text-xl" /> : null}
      {text}
    </h2>
  );
}
