import { SidebarProvider } from "../components/Context/SidebarContext";
import Layout from "../components/Layout/App";
import "./globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <SidebarProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SidebarProvider>
  );
}
