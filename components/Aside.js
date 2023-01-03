import Link from "next/link";
import { FaUserGraduate, FaUserFriends } from "react-icons/fa";
import Logout from "./Logout";
export default function Aside({ menu }) {
  return (
    <aside
      className={`bg-cyan-500 w-[250px] p-5 text-white uppercase fixed top-[68px] h-[calc(100vh-116px)] md:h-screen md:static transition-all duration-300 ${
        menu ? "left-0" : "-left-full"
      }`}
    >
      <h1 className="text-2xl font-bold mb-5">Panel</h1>
      <ul className="space-y-2 text-center">
        <li>
          <Link
            href="/"
            className="bg-cyan-600 px-5 py-2 rounded-md flex items-center gap-2 transition hover:bg-opacity-80"
          >
            <FaUserGraduate />
            <p className="text-sm font-semibold">Students</p>
          </Link>
        </li>
        <li>
          <Link
            href="/users"
            className="bg-cyan-600 px-5 py-2 rounded-md flex items-center gap-2 transition hover:bg-opacity-80"
          >
            <FaUserFriends />
            <p className="text-sm font-semibold">Users</p>
          </Link>
        </li>
        <li className="md:hidden">
          <Logout className="my-5 flex flex-col items-start gap-2" />
        </li>
      </ul>
    </aside>
  );
}
