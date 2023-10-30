import clsx from "clsx";
import { useCookies } from "react-cookie";
import { MdPalette } from "react-icons/md";
import { useToggle } from "@/hooks";

const THEMES = ["dark", "synthwave", "forest", "emerald"];

export default function ThemeMenu() {
  const { isActive, toggle, willAnimate } = useToggle(false);
  const [_, setCookie] = useCookies(["theme"]);

  const changeTheme = (theme: string) => {
    setCookie("theme", theme);
  };

  return (
    <div className="relative w-fit h-fit">
      <button className="btn btn-circle btn-ghost" onClick={toggle}>
        <MdPalette className="w-6 h-6" />
      </button>
      {isActive ? (
        <ul
          className={clsx(
            "p-4 flex flex-col absolute gap-4 w-80 right-0 max-w-screen bg-base-300 rounded-lg top-14",
            willAnimate
              ? "animate-collapse-up-right"
              : "animate-collapse-down-left"
          )}
        >
          {THEMES.map((theme, idx) => (
            <li className="w-full h-fit p-0 m-0" key={theme + idx}>
              <button
                className="w-full flex items-center bg-base-100 justify-between shadow-lg p-4 rounded-lg hover:opacity-70 transition-opacity flex-wrap"
                onClick={() => changeTheme(theme)}
              >
                {theme}
                <div className="w-fit flex items-center gap-4">
                  <span
                    className="bg-primary h-4 w-4 rounded-full"
                    data-theme={theme}
                  />
                  <span
                    className="bg-secondary h-4 w-4 rounded-full"
                    data-theme={theme}
                  />
                  <span
                    className="bg-accent h-4 w-4 rounded-full"
                    data-theme={theme}
                  />
                  <span
                    className="bg-accent h-4 w-4 rounded-full"
                    data-theme={theme}
                  />
                </div>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
