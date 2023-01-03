import { FaBars, FaTimes } from "react-icons/fa";
import Logout from "./Logout";

export default function Header({ menu, setMenu }) {
  return (
    <header className="p-5 bg-slate-800 text-white">
      <nav className="flex gap-2 items-center">
        <div
          onClick={() => setMenu(!menu)}
          className="block text-2xl mr-5 md:hidden"
        >
          {menu ? <FaTimes /> : <FaBars />}
        </div>
        <h2 className="mr-auto text-xl uppercase">Students</h2>
        <Logout className="hidden md:flex md:items-center gap-4" />
      </nav>
    </header>
  );
}
