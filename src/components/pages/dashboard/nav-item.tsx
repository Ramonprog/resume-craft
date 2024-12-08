'use client'
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Newspaper, SquareUser } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavItem() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Currículos', href: '/dashboard/resumes', icon: Newspaper },
    { label: 'Configurações de Conta', href: '/dashboard/account', icon: SquareUser }
  ];

  return (
    <nav className="w-full flex flex-col gap-2 px-2 py-4">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link key={item.label} href={item.href} >
            <Button variant={"ghost"} className={cn("w-full flex justify-start gap-2", isActive && 'bg-accent')}>
              {item.label}
              <item.icon size={16} />
            </Button>
          </Link>
        )
      })}
    </nav>
  )
}
