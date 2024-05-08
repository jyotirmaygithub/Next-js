"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// pathname is good to know the current url
// hooks are only applicable in client side components and file.

// we are doing this inside the group folder
const navLinks = [
  { name: "Log", href: "/log" },
  { name: "sign", href: "/sign" },
  { name: "forget-password", href: "/forgot" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      
      {navLinks.map((link, index) => {
        const isActive = pathname.startsWith(link.href);
        console.log(isActive + " " + pathname);
        return (
          <Link href={link.href} key={index} className={isActive ? "text-black font-bold " : "text-blue-800"}>
            {link.name}{" "}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
