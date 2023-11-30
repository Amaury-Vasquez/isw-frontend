import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { Auth } from "@/modules";

export default function AuthPage() {
  return (
    <>
      <Head>
        <title>Admin login</title>
      </Head>
      <Auth />
    </>
  );
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const { cookies } = req;

  if (cookies.user) {
    return {
      redirect: {
        destination: "/admin",
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
}
