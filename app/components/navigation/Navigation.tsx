"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Contents", href: "/contents" },
  { name: "Experiences", href: "/experiences" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Fauzan</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors hover:text-primary ${
                pathname === item.href
                  ? "text-primary"
                  : "text-foreground/60"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation; 