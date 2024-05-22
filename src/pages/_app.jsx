import { ThemeProvider } from "next-themes";
import { SidebarProvider } from "../components/Context/SidebarContext";
import Layout from "../components/Layout/App";
import "./globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <SidebarProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SidebarProvider>
    </ThemeProvider>
  );
}
