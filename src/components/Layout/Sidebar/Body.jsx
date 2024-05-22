import { useState } from "react";
import MenuItem, { items } from "../../Utils/Menu/ItemMenu";
export default function Body() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };
  return (
    <div className="flex-grow px-4 custom-scrollbar overflow-y-auto ">
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <span className="flex-shrink mx-4 text-gray-500 dark:text-gray-400">
          Master Data
        </span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>
      <ul>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            openMenu={openMenu}
            toggleMenu={toggleMenu}
          />
        ))}
      </ul>
    </div>
  );
}
