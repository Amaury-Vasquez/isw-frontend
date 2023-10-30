import Link from "next/link";
import { IconType } from "react-icons";
import { HiOutlineTicket } from "react-icons/hi";

interface IFeature {
  name: string;
  Icon: IconType;
  path: string;
}

const FEATURES: IFeature[] = [
  {
    name: "Venta de entradas",
    Icon: HiOutlineTicket,
    path: "/admin/tickets",
  },
  {
    name: "Gestion de actividades",
    Icon: HiOutlineTicket,
    path: "/admin/activities",
  },
  {
    name: "Gestion del personal",
    Icon: HiOutlineTicket,
    path: "/admin/employees",
  },
  {
    name: "Informacion financiera",
    Icon: HiOutlineTicket,
    path: "/admin/financial",
  },
  {
    name: "Mantenimiento y nuevas exhibiciones",
    Icon: HiOutlineTicket,
    path: "/admin/maintenance",
  },
];

export default function Features() {
  return (
    <main className="min-h-content w-full flex flex-col p-8">
      <div className="grid grid-cols-4 w-full gap-6">
        {FEATURES.map(({ name, Icon, path }, idx) => (
          <Link
            href={path}
            key={name + idx}
            className="flex w-full flex-col p-4 shadow-lg rounded-lg gap-6 items-center border border-solid border-base-200 text-center"
          >
            <span className="font-semibold text-xl">{name}</span>
            <Icon className="w-12 h-12 text-primary" />
            <button className="btn btn-secondary btn-outline">
              Ir a {name}
            </button>
          </Link>
        ))}
      </div>
    </main>
  );
}
