import { useForm } from "react-hook-form";
import { Input, RadioInput } from "@/components";

interface IReservationForm {
  name: string;
  lastName: string;
  email: string;
  type: string;
}

export default function TicketForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IReservationForm>();

  const onSubmit = (data: IReservationForm) => console.log(data);

  return (
    <form
      className="w-full flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full flex gap-4 items-center">
        <Input
          label="Nombre (s)"
          id="name"
          type="text"
          {...register("name", { required: true })}
        />
        <Input
          label="Apellidos"
          id="lastname"
          type="text"
          className="col-span-2"
          {...register("lastName", { required: true })}
        />
      </div>
      <div className="w-full grid gap-4 grid-cols-2 items-center">
        <Input
          label="Correo"
          id="email"
          type="text"
          {...register("email", { required: true })}
        />
        <div className="form-control h-full pt-2 justify-center items-center">
          <span className="label-text w-full text-center">Tipo de entrada</span>
          <div className="flex h-full items-end gap-4">
            <RadioInput
              label="General"
              {...register("type", { required: true })}
              value="general"
            />
            <RadioInput
              label="Gratuita"
              {...register("type", { required: true })}
              value="free"
            />
          </div>
        </div>
      </div>
      <p className="italic">
        <strong className="text-accent">{"*Nota: "}</strong>
        Al reservar tu entrada, puedes mostrar tu comprobante en taquilla para
        proceder al pago. Personas con entrada gratuita pueden pasar
        directamente, con identificacion oficial.
      </p>
      <div className="w-full text-center">
        <button className="btn btn-accent">Reservar entrada</button>
      </div>
    </form>
  );
}
