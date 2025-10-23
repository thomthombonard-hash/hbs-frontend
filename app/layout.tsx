import "./globals.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export const metadata = {
  title: "HBS Gestion",
  description: "Interface de gestion interne HBS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-100 text-gray-900">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
