import { useForm } from "react-hook-form";
import { Card, Input } from "@/components";
import { IRegisterData } from "@/models";

export default function Register() {
  const { register, handleSubmit } = useForm<IRegisterData>();

  return (
    <Card>
      <form className="w-full flex flex-col gap-4 p-4">
        <p className="text-center font-semibold">Registrate</p>
        <div className="flex w-full gap-4">
          <Input
            label="Nombre"
            placeholder="Juan"
            {...register("name")}
            required
          />
          <Input
            label="Apellidos"
            placeholder="Roldan Perez"
            {...register("lastname")}
            required
          />
        </div>
        <Input
          label="Contraseña"
          placeholder="safepassword"
          {...register("password")}
          required
          type="password"
        />
        <button className="btn btn-accent w-fit m-auto px-10">
          Registrarme
        </button>
      </form>
    </Card>
  );
}
