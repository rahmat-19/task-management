import {
  ChevronDownIcon,
  ChevronUpIcon,
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

const items = [
  { name: "Dashboard", href: "#", icon: HomeIcon },
  {
    name: "Profile",
    href: "#",
    icon: UserIcon,
    children: [
      { name: "View Profile", href: "#" },
      { name: "Edit Profile", href: "#" },
      { name: "Hapus Profile", href: "#" },
      { name: "mumek Profile", href: "#" },
      { name: "amke Profile", href: "#" },
    ],
  },
  {
    name: "Settings",
    href: "#",
    icon: Cog6ToothIcon,
    children: [
      { name: "General", href: "#" },
      { name: "Security", href: "#" },
    ],
  },
];

const MenuItem = ({ item, openMenu, toggleMenu }) => {
  return (
    <li className="mt-4">
      <div
        onClick={() => (item.children ? toggleMenu(item.name) : null)}
        className="flex justify-between items-center cursor-pointer"
      >
        <span className="flex items-center justify-center">
          {item.icon && <item.icon className="h-4 w-4 text-blue-500 mr-1" />}
          {item.name}
        </span>
        {item.children && (
          <span>
            {openMenu === item.name ? (
              <ChevronUpIcon className="h-4 w-4" />
            ) : (
              <ChevronDownIcon className="h-4 w-4" />
            )}
          </span>
        )}
      </div>
      {item.children && openMenu === item.name && (
        <SubMenu items={item.children} />
      )}
    </li>
  );
};

const SubMenu = ({ items }) => {
  return (
    <ul className="mt-2 ml-4">
      {items.map((child, childIndex) => (
        <li key={childIndex} className="mt-2">
          <span href={child.href}>{child.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default MenuItem;

export { items, MenuItem };
