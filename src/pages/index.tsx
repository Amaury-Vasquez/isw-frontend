import Head from "next/head";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title> Administrador del Museo - Inicio </title>
        <meta name="description" content="Administrador del Museo - Inicio" />
      </Head>
      <div className="bg-[url(https://i.imgur.com/VxXSyR5.jpg)] min-h-content bg-no-repeat bg-center bg-cover">
        <main className="bg-base-100 bg-opacity-90 min-h-content w-full">
          <h1>Admin</h1>
        </main>
      </div>
    </>
  );
}
