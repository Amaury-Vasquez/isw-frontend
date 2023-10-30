import { AiFillSetting, AiOutlineUser } from "react-icons/ai";

export default function UserMenu() {
  return (
    <nav className="flex gap-2 items-center">
      <button className="btn btn-circle btn-ghost">
        <AiOutlineUser className="w-6 h-6" />
      </button>
      <button className="btn btn-circle btn-ghost">
        <AiFillSetting className="w-6 h-6" />
      </button>
    </nav>
  );
}
