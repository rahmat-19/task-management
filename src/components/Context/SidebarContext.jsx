import { createContext, useState } from "react";

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [sidebarValue, setSidebarValue] = useState({
    sidebarOpen: true,
    openMenu: null,
  });

  const toggleSidebar = (key) => {
    setSidebarValue((prev) => ({
      ...prev,
      [key.target.name]: !sidebarValue.sidebarOpen,
    }));
  };

  return (
    <SidebarContext.Provider value={{ sidebarValue, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
