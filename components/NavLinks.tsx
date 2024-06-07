"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Crear", href: "/dashboard/crear"},
  { name: "Por Hacer", href: "/todo" }
];

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return(
          <>
            <Link
              key={link.name}
              href={link.href}
              className={` text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                pathname === link.href ? "bg-gray-600 text-gray-400" : ""
              }`}
            >
              {link.name}
            </Link>
          </>
        );
      })}
    </>
  );
};
export default NavLinks;
