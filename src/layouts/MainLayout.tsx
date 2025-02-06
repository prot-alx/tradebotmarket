import { BottomNavigation, Header } from "@/components";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col h-screen bg-deep-navy text-pure-white">
      <header className="flex-shrink-0">
        <Header />
      </header>

      <main className="flex-1 overflow-auto flex flex-col items-center justify-center">
        {children}
      </main>

      <footer className="flex-shrink-0">
        <BottomNavigation />
      </footer>
    </div>
  );
};
