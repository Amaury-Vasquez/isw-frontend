import Head from "next/head";
import { Tickets } from "@/modules";

export default function TicketsPage() {
  return (
    <>
      <Head>
        <title>Obtener entradas - Museo Universitario - ESCOM IPN</title>
        <meta
          name="description"
          content="Obtener entradas - Museo Universitario - ESCOM IPN. Pagina no oficial"
        />
      </Head>
      <Tickets />
    </>
  );
}
