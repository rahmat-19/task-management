import { useState } from "react";
import MenuItem, { items } from "../../Utils/Menu/ItemMenu";
export default function Body() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };
  return (
    <div className="flex-grow px-4 custom-scrollbar overflow-y-auto ">
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
