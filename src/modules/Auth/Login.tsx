import { useForm } from "react-hook-form";
import { Card, Input } from "@/components";
import { ILoginData } from "@/models";

export default function Login() {
  const { register, handleSubmit } = useForm<ILoginData>();

  const onSubmit = (data: ILoginData) => {
    console.log(data);
  };

  return (
    <Card>
      <form
        className="w-full flex flex-col gap-4 p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-center font-semibold">
          Inicia sesión ingresando tu correo y contraseña
        </p>
        <Input
          label="Correo"
          placeholder="ejemplo@example.com"
          {...register("email", { required: true })}
        />
        <Input
          label="Contraseña"
          placeholder="fakepassword"
          type="password"
          {...register("password", { required: true })}
        />
        <button className="btn btn-accent w-fit m-auto px-10">
          Iniciar sesión
        </button>
      </form>
    </Card>
  );
}
