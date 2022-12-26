import { useEffect, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export default function InputForm(props) {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState("password");
  useEffect(() => {
    if (active) {
      setShow("text");
    } else {
      setShow("password");
    }
  }, [active]);
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm tracking-wider font-bold">
        {props.children}
      </label>
      <div className={props.type === "password" ? "flex gap-2" : ""}>
        <input
          type={show}
          className="w-full text-gray-400 bg-gray-200 p-3 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
        />
        {props.type === "password" && (
          <button
            type="button"
            className={`p-3 bg-gray-200 border-2 rounded-md text-xl text-gray-400 transition-all hover:border-2 hover:border-slate-900 ${
              active ? "border-slate-900 text-slate-900" : ""
            }`}
            onClick={() => setActive(!active)}
          >
            {active ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        )}
      </div>
    </div>
  );
}
