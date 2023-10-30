import Head from "next/head";
import Features from "@/modules/Features";

export default function AdminPage() {
  return (
    <>
      <Head>
        <title> Administrador del Museo - Inicio </title>
        <meta name="description" content="Administrador del Museo - Inicio" />
      </Head>
      <Features />
    </>
  );
}
