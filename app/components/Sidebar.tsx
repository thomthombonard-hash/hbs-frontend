import Link from "next/link";
import { Home, Users, UserCog } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg p-4 flex flex-col">
      <h2 className="text-2xl font-bold text-blue-600 mb-8 text-center">HBS Gestion</h2>
      <nav className="flex flex-col space-y-4">
        <Link href="/dashboard" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
          <Home size={20} /> <span>Dashboard</span>
        </Link>
        <Link href="/clients" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
          <Users size={20} /> <span>Clients</span>
        </Link>
        <Link href="/intervenants" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
          <UserCog size={20} /> <span>Intervenants</span>
        </Link>
      </nav>
    </aside>
  );
}
