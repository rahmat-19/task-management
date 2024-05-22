import { useTheme } from "next-themes";
import { createContext, useState } from "react";

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const { setTheme } = useTheme();
  const [sidebarValue, setSidebarValue] = useState({
    sidebarOpen: true,
    openMenu: null,
    navbarTheme: true,
  });

  const handleThmeChange = () => {
    try {
      sidebarValue.navbarTheme ? setTheme("dark") : setTheme("light");
      setSidebarValue((prev) => ({
        ...prev,
        navbarTheme: !sidebarValue.navbarTheme,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const toggleSidebar = (key) => {
    setSidebarValue((prev) => ({
      ...prev,
      [key.target.name]: !sidebarValue.sidebarOpen,
    }));
  };

  return (
    <SidebarContext.Provider
      value={{ sidebarValue, toggleSidebar, handleThmeChange }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
