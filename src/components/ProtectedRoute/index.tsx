import Link from "next/link";
import React from "react";
import { useCookies } from "react-cookie";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [cookies] = useCookies(["user"]);

  if (!cookies.user) {
    return (
      <main className="min-h-content flex w-full items-center justify-center">
        <div className="card shadow-lg bg-base-200 px-8 py-6 text-center gap-6">
          <span className="text-xl font-semibold">
            No tienes permiso para acceder a esta pagina
          </span>
          <span className="text-lg italic text-accent">
            * Inicia sesion para poder acceder
          </span>
          <div className="flex items-center w-full gap-4 justify-around">
            <Link className="btn btn-primary w-1/2" href="/login">
              Iniciar sesion
            </Link>
            <Link className="btn btn-secondary w-1/2" href="/register">
              Registrarme
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return children;
}
