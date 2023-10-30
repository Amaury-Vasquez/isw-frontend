import { useEffect } from "react";
import { useCookies } from "react-cookie";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [cookies, setCookie] = useCookies(["theme"]);

  useEffect(() => {
    if (!cookies.theme) {
      setCookie("theme", "dark");
    } else {
      const root = document.querySelector("#html-root");
      root?.setAttribute("data-theme", cookies.theme);
    }
  }, [cookies, setCookie]);
  return (
    <div className="min-h-screen w-screen bg-base-100">
      <Header />
      {children}
    </div>
  );
}
