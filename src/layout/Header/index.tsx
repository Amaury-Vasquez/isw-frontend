import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineMuseum } from "react-icons/md";
import { useCookies } from "react-cookie";
import AuthMenu from "./AuthMenu";
import ThemeMenu from "./ThemeMenu";
import UserMenu from "./UserMenu";

export default function Header() {
  const [cookies] = useCookies(["user"]);
  const router = useRouter();
  const isAdminPage = router.pathname.includes("/admin");

  return (
    <header className="navbar bg-base-200 px-6 justify-between">
      <Link
        className="font-bold text-lg btn btn-ghost capitalize flex gap-2"
        href="/"
      >
        <MdOutlineMuseum className="w-6 h-6" /> Museo universitario
      </Link>
      <div className="flex gap-2 items-center">
        {isAdminPage ? cookies.user ? <UserMenu /> : <AuthMenu /> : null}
        <ThemeMenu />
      </div>
    </header>
  );
}
