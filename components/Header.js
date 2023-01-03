import { FaSignOutAlt } from "react-icons/fa";

export default function Header({ logout }) {
  return (
    <header className="p-5 bg-slate-800 text-white">
      <nav className="flex gap-2 items-center">
        <h2 className="mr-auto text-xl uppercase">Students</h2>
        <p>name</p>|
        <button
          type="button"
          className="hover:bg-opacity-80 bg-red-500 py-1 px-3 rounded-md flex items-center gap-2"
          onClick={logout}
        >
          Logout
          <FaSignOutAlt />
        </button>
      </nav>
    </header>
  );
}
