import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import { SquareUser } from "lucide-react";



export function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="w-full flex justify-start gap-2">
          <Avatar className="w-7 h-7 block">
            <AvatarImage src="https://github.com/ramonprog.png" />
            <AvatarFallback>RP</AvatarFallback>
          </Avatar>
          <p>Alisson Ramon</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-[var(--radix-dropdown-menu-trigger-width)] p-0">
        <Link passHref href="/dashboard/account">
          <DropdownMenuItem>
            <SquareUser size={16} />
            <DropdownMenuLabel>Configurações de Conta</DropdownMenuLabel>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>

  );
}