import Link from "next/link";
import { AiOutlineContacts } from "react-icons/ai";
import {
  HiOutlineCalendar,
  HiOutlineTicket,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import {
  ADDRESS,
  EMAIL,
  PHONE_NUMBER,
  TICKET_DETAILS,
  WORKING_HOURS,
} from "@/data/museum";
import Subtitle from "./Subtitle";

export default function Home() {
  return (
    <div className="bg-[url(https://i.imgur.com/VxXSyR5.jpg)] min-h-content bg-no-repeat bg-center bg-cover">
      <main className="bg-base-300 bg-opacity-90 min-h-content w-full">
        <article className="m-auto flex flex-col p-6 text-center max-w-6xl gap-y-6">
          <h1 className="text-2xl font-bold">
            Museo Universitario - ESCOM IPN
          </h1>
          <div className="w-full justify-between flex items-start gap-8">
            <div className="flex flex-col w-1/2 text-left leading-7">
              <Subtitle text="Dirección" Icon={HiOutlineLocationMarker} />
              <p>{ADDRESS}</p>
              <br />
              <Subtitle text="Contacto" Icon={AiOutlineContacts} />
              <p>
                {"Teléfono: "}
                <a href={`tel:${PHONE_NUMBER}`} className="link link-info">
                  {PHONE_NUMBER}
                </a>
              </p>
              <p>
                {"Correo: "}
                <a href={`mailto:${EMAIL}`} className="link link-info">
                  museouniversitario@gmail.com
                </a>
              </p>
            </div>
            <div className="flex flex-col w-1/2 text-left leading-7">
              <Subtitle text="Horario" Icon={HiOutlineCalendar} />
              <p>{WORKING_HOURS}</p>
              <br />
              <Subtitle text="Taquilla" Icon={HiOutlineTicket} />
              <ul className="m-0 p-0">
                {TICKET_DETAILS.map((detail, idx) => (
                  <li key={detail + idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
          <Link className="btn w-fit m-auto btn-accent" href="/tickets">
            Obtener Entradas <HiOutlineTicket className="w-5 h-5" />
          </Link>
        </article>
      </main>
    </div>
  );
}
