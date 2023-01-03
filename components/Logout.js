import { FaSignOutAlt, FaCircle } from "react-icons/fa";
import Cookies from "js-cookie";
import Router from "next/router";
export default function Logout({ className }) {
  const logoutHandler = () => {
    if (Cookies.get("token")) {
      Cookies.remove("token");
      Router.push("/auth/login");
    }
  };
  return (
    <div className={className}>
      <p>name</p>
      <FaCircle className="text-[10px] text-green-500 hidden md:block" />
      <button
        type="button"
        className="hover:bg-opacity-80 bg-red-500 py-1 px-3 rounded-md flex items-center gap-2"
        onClick={logoutHandler}
      >
        Logout
        <FaSignOutAlt />
      </button>
    </div>
  );
}
