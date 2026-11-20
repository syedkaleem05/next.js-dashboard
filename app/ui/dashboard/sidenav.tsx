import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";
import NavLinks from "@/app/ui/dashboard/nav-links";

export default function SideNav() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-600">
      <div className="flex shrink-0 items-end rounded-b-md bg-blue-500 p-1 md:h-52">
        <Image
          src="/globe.svg"
          alt="Globe"
          width={50}
          height={50}
        />
        <p className={`${lusitana.className} text-4xl`}>
          Acme
        </p>
      </div>

      <NavLinks />
    </main>
  );
}
