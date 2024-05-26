import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

export default function Navigation() {
  const pathName = usePathname();
  let mapingRoute = pathName?.split("/");
  const route = useRouter();
  const handleRiderect = (value) => {
    // Cari indeks elemen
    let index = mapingRoute.indexOf(value);

    // Jika elemen ditemukan, potong array hingga elemen tersebut
    if (index !== -1) {
      mapingRoute = mapingRoute.slice(0, index + 1);
      route.push(`/${mapingRoute.join("/")}`);
    }
  };
  return (
    <div className="flex items-center fixed">
      {mapingRoute?.map((item, index) => (
        <span key={index}>
          <span
            onClick={() => handleRiderect(item)}
            className="text-blue-600 underline decoration-1 underline-offset-4 cursor-pointer"
          >
            {item}
          </span>
          {index < mapingRoute.length - 1 && index != 0 && (
            <ChevronDoubleRightIcon className="h-4 inline-block mx-2 text-blue-600" />
          )}
        </span>
      ))}
    </div>
  );
}
