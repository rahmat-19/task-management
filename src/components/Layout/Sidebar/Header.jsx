import { useContext } from "react";
import { SidebarContext } from "../../Context/SidebarContext";

export default function Header() {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <div className="h-16 flex items-center px-4">
      <button
        name="sidebarOpen"
        className="absolute top-4 h-8 w-8 right-2 flex items-center justify-center bg-gray-700 p-2 rounded-full focus:outline-none"
        onClick={toggleSidebar}
      >
        X
      </button>
      <h2 className="text-xl font-semibold">Sidebar</h2>
    </div>
  );
}
