import Head from "next/head";
import { Events } from "@/modules/Events";

export default function EventsPage() {
  return (
    <>
      <Head>
        <title>Eventos | Museo Universitario</title>
      </Head>
      <Events />
    </>
  );
}
