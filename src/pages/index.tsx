import Head from "next/head";
import { Home } from "@/modules";

export default function HomePage() {
  return (
    <>
      <Head>
        <title> Museo Universitario - Inicio </title>
        <meta name="description" content="Museo Universitario - Inicio" />
      </Head>
      <Home />
    </>
  );
}
