import Link from "next/link";
import { IconType } from "react-icons";
import { HiOutlineCalendar, HiOutlineTicket } from "react-icons/hi";
import { IoBrushOutline } from "react-icons/io5";
import {
  MdOutlinePlace,
  MdOutlineAttachMoney,
  MdWorkspacePremium,
} from "react-icons/md";

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
    Icon: HiOutlineCalendar,
    path: "/admin/activities",
  },
  {
    name: "Gestion de visitas",
    Icon: MdOutlinePlace,
    path: "/admin/activities",
  },
  {
    name: "Gestion del personal",
    Icon: MdWorkspacePremium,
    path: "/admin/employees",
  },
  {
    name: "Informacion financiera",
    Icon: MdOutlineAttachMoney,
    path: "/admin/financial",
  },
  {
    name: "Mantenimiento y nuevas exhibiciones",
    Icon: IoBrushOutline,
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
            className="flex w-full h-full flex-col p-4 shadow-lg rounded-lg gap-6 items-center bg-base-200 text-center hover:bg-opacity-70 hover:bg-base-200 transition-colors justify-between"
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
