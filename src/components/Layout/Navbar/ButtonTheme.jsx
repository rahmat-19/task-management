import { useContext } from "react";
import { SidebarContext } from "../../Context/SidebarContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ButtonThme() {
  const { sidebarValue, handleThmeChange } = useContext(SidebarContext);

  return (
    <div
      className={`relative inline-flex items-center rounded-full p-1 cursor-pointer ${
        sidebarValue.navbarTheme ? "bg-yellow-900" : "bg-indigo-950"
      }`}
      onClick={handleThmeChange}
    >
      <div className="w-11">
        <div
          className={` h-5 w-5 rounded-full bg-white flex items-center justify-center transition-transform duration-300 ${
            sidebarValue.navbarTheme ? "translate-x-6" : "translate-x-0"
          }`}
        >
          {sidebarValue.navbarTheme ? (
            <SunIcon className="h-4 w-4 text-yellow-500" />
          ) : (
            <MoonIcon className="h-4 w-4 text-gray-500" />
          )}
        </div>
      </div>
    </div>
  );
}
