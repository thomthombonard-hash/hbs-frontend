export default function Header() {
  return (
    <header className="bg-white shadow-md h-16 flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-gray-800">Tableau de bord</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Thomas Bonard</span>
        <img
          src="https://ui-avatars.com/api/?name=Thomas+Bonard"
          alt="avatar"
          className="w-10 h-10 rounded-full border"
        />
      </div>
    </header>
  );
}
