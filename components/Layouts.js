import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";
import Cookies from "js-cookie";
import Router from "next/router";

export default function Layouts({ children }) {
  const logoutHandler = () => {
    if (Cookies.get("token")) {
      Cookies.remove("token");
      Router.push("/auth/login");
    }
  };
  return (
    <div className="flex min-h-screen">
      <Aside />
      <div className="flex flex-col w-full">
        <Header logout={logoutHandler} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
