import "@/styles/globals.css";
import Layout from "@/layout";
import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-left"
        />
      </QueryClientProvider>
    </CookiesProvider>
  );
}
