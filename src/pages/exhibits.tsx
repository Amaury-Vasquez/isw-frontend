import Head from "next/head";
import { Exhibits } from "@/modules/Exhibits";

export default function ExhibitsPage() {
  return (
    <>
      <Head>
        <title>Museo Universitario - Exhibiciones</title>
        <meta name="description" content="Museo Universitario - Exhibiciones" />
      </Head>
      <Exhibits />
    </>
  );
}
