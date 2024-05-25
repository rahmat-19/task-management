import { useContext, useState } from "react";
// import Navbar from "./Navbar";
import { SidebarContext } from "../Context/SidebarContext";
// import NavbarLandingPage from "./NavbarLandingPage";
import Navbar from "./Testing";

export default function Layout({ children }) {
  const { sidebarValue } = useContext(SidebarContext);

  return (
    <div className="min-h-screen flex">
      {/* <NavbarLandingPage /> */}
      <Navbar />
      <main className="p-4 mt-12">{children}</main>
    </div>
  );
}
