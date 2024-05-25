import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathName = usePathname();
  const mapingRoute = pathName.split("/");
  return (
    <div className="flex items-center fixed">
      {mapingRoute.map((item, index) => (
        <span key={index}>
          <Link
            href={`/${item}`}
            className="text-blue-600 underline decoration-1 underline-offset-4"
          >
            {item}
          </Link>
          {index < mapingRoute.length - 1 && index != 0 && (
            <ChevronDoubleRightIcon className="h-4 inline-block mx-2 text-blue-600" />
          )}
        </span>
      ))}
    </div>
  );
}
