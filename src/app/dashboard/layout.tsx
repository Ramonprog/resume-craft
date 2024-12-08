import { Logo } from "@/components/Logo";

type DashboardLayouteProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayouteProps) {
  return (
    <div className="w-full h-screen overflow-hidden grid grid-cols-[300px,1fr]">
      <aside className="w-full h-full flex-col items-center border-r border-muted">
        <div className="w-full p-6 border-b border-muted">
          <Logo />
        </div>
      </aside>
      <main>
        {children}
      </main>
    </div>
  );
}