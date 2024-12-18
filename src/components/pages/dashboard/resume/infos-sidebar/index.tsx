import { Logo } from "@/components/shared/Logo";
import Link from "next/link";
import { AiGenerationDropdown } from "./ai-generation-dropdown";
import { Separator } from "@/components/ui/separator";
import { BasicInfo } from "./sections/basic-info";


export function ResumeInfosSidebar() {
  return (
    <aside className="w-full h-full p-6 overflow-y-auto">
      <div className="w-full flex items-center justify-between">
        <Link href="/dashboard/resumes" >
          <Logo />
        </Link>
        <AiGenerationDropdown />
      </div>
      <Separator className="my-3" />
      <BasicInfo />
    </aside>
  )
}