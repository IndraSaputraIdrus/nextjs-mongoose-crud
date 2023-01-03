import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

export default function Layouts({ children }) {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex min-h-screen">
      <Aside menu={menu} />
      <div className="flex flex-col w-full">
        <Header menu={menu} setMenu={setMenu} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
