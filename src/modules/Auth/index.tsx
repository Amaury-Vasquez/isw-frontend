import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Tab from "./Tab";

type IAuthType = "login" | "register";

interface IAuthProps {
  authType?: IAuthType;
}

export default function Auth({ authType = "login" }: IAuthProps) {
  const [activeTab, setActiveTab] = useState<IAuthType>(authType);

  return (
    <main className="w-full flex flex-col max-w-2xl m-auto mt-8 gap-2">
      <div className="w-fit flex gap-2">
        <Tab
          text="Iniciar sesión"
          active={activeTab === "login"}
          onClick={() => setActiveTab("login")}
        />
        <Tab
          text="Registrarse"
          active={activeTab === "register"}
          onClick={() => setActiveTab("register")}
        />
      </div>
      {activeTab === "login" ? <Login /> : <Register />}
    </main>
  );
}
