"use client";

import { Box, Container, Flex } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFillBugFill } from "react-icons/bs";

const NavBar = () => {
  const path = usePathname();
  const { status, data: session } = useSession();

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
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <BsFillBugFill />
            </Link>
            <div className="space-x-6">
              {links &&
                links.map((x) => (
                  <Link key={x.href} href={x.href} className={getActiveLink(x.href)}>
                    {x.label}
                  </Link>
                ))}
            </div>
          </Flex>
          <Box>
            {status === "authenticated" && <Link href="/api/auth/signout">Logout</Link>}
            {status === "unauthenticated" && <Link href="/api/auth/signin">Login</Link>}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
