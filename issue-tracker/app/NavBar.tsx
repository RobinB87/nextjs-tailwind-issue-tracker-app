"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFillBugFill } from "react-icons/bs";

const NavBar = () => {
  const path = usePathname();

  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];

  const getActiveLink = (href: string) => {
    return (href === path ? "text-zinc-900 font-bold" : "text-zinc-500") + " hover:text-zinc-800 transition-colors";
  };

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <BsFillBugFill />
      </Link>
      <div className="flex space-x-6">
        {links &&
          links.map((x) => (
            <Link key={x.href} href={x.href} className={getActiveLink(x.href)}>
              {x.label}
            </Link>
          ))}
      </div>
    </nav>
  );
};

export default NavBar;
