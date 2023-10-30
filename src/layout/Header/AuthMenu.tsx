import Link from "next/link";

export default function AuthMenu() {
  return (
    <nav className="flex gap-2 items-center">
      <Link className="btn btn-ghost normal-case" href="/login">
        Registrarse
      </Link>
      <Link className="btn btn-ghost text-accent normal-case" href="/login">
        Iniciar sesión
      </Link>
    </nav>
  );
}
