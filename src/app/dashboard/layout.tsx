import { NavItem } from "@/components/pages/dashboard/nav-item";
import { UserDropdown } from "@/components/pages/dashboard/user-dropdown";
import { Logo } from "@/components/shared/Logo";

type DashboardLayouteProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayouteProps) {
  return (
    <div className="w-full h-screen overflow-hidden grid grid-cols-[300px,1fr]">
      <aside className="w-full h-full flex flex-col items-center border-r border-muted ">
        <div className="w-full">
          <div className="w-full p-6 border-b border-muted ">
            <Logo />
          </div>
          <NavItem />
        </div>


        <div className="w-full mt-auto  border-t border-muted px-3 py-4 flex items-center justify-between gap-2">
          <UserDropdown />
        </div>
      </aside>
      <main>
        {children}
      </main>
    </div>
  );
}