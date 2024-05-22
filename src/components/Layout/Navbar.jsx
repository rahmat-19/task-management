import { useContext } from "react";
import { SidebarContext } from "../Context/SidebarContext";

export default function Navbar() {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-40">
      <button
        name="sidebarOpen"
        className="bg-gray-700 h-8 w-8 flex items-center justify-center p-2 rounded-full focus:outline-none"
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <h2 className="text-xl font-semibold">Navbar</h2>
    </div>
  );
}
