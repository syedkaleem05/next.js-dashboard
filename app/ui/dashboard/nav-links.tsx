'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

const links = [
  {
    name: "Home",
    href: "/dashboard",
    icon: "/home.svg",
  },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: "/invoices.svg",
  },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: "/customers.svg",
  },
];

export default function NavLinks() {
  const pathName = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex items-center px-2 py-2 hover:cursor-pointer hover:bg-gray-400",
              {
                "bg-gray-400 text-blue-600": pathName == link.href,
              },)}
          >
            <Image
              src={link.icon}
              alt=""
              width={20}
              height={20}
            />
            <p className="px-2">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
