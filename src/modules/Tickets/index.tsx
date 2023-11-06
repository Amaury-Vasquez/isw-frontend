import { useForm } from "react-hook-form";
import TicketForm from "./TicketForm";
export default function Tickets() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <main className="flex flex-col min-h-content p-4 sm:p-8 items-center justify-start">
      <article className="w-full max-w-3xl bg-base-200 shadow-sm p-8 rounded-lg leading-8">
        <h1 className="text-2xl font-bold text-center">Reservar entrada</h1>
        <p className="italic">
          Entrada general: $85.00 MXN <br />
          Estudiantes, maestros, INAPAM, personas con discapacidad y niños
          entrada gratuita. <br />
        </p>
        <TicketForm />
      </article>
    </main>
  );
}
