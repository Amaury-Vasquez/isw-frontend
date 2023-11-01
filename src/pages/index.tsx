import Head from "next/head";
import { Home } from "@/modules";

export default function HomePage() {
  return (
    <>
      <Head>
        <title> Administrador del Museo - Inicio </title>
        <meta name="description" content="Administrador del Museo - Inicio" />
      </Head>
      <Home />
    </>
  );
}
