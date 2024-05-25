import { ThemeProvider } from "next-themes";
import { SidebarProvider } from "../components/Context/SidebarContext";
import Layout from "../components/Layout/App";
import "./globals.css";
import { usePathname } from "next/navigation";
import LandinPageLayout from "../components/Layout/LandingPageLayout";
import { AnimatePresence } from "framer-motion";

export default function MyApp({ Component, pageProps }) {
  const pathname = usePathname();
  const landingPage =
    pathname == "/" || pathname == "/login" || pathname == "/register";
  const layoutComponen = landingPage ? (
    <LandinPageLayout>
      <Component {...pageProps} />
    </LandinPageLayout>
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
  return (
    <AnimatePresence>
      <ThemeProvider attribute="class">
        <SidebarProvider>{layoutComponen}</SidebarProvider>
      </ThemeProvider>
    </AnimatePresence>
  );
}
