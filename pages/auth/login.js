import Form from "../../components/Form";
import InputForm from "../../components/InputForm";
import { useState } from "react";
import ButtonForm from "../../components/ButtonForm";
import Cookies from "js-cookie";
import Router from "next/router";
import { authPages } from "../../middlewares/authPages";
import Link from "next/link";

export function getServerSideProps(context) {
  authPages(context);
  return {
    props: {},
  };
}

Login.getLayout = function getLayout(page) {
  return page;
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();

    if (!username && !password) {
      return setStatus("Fiels is require");
    }

    const req = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const res = await req.json();

    if (res.message === "failed") {
      return setStatus(res.error);
    }

    setStatus("");

    Cookies.set("token", res.token, { expires: 7, sameSite: "strict" });

    Router.push("/");
  };

  return (
    <Form status={status} onSubmit={loginHandler} className="min-h-screen">
      <InputForm
        placeholder="Insert Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        type="text"
      >
        Username :
      </InputForm>
      <InputForm
        placeholder="Insert Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
      >
        Password :
      </InputForm>
      <ButtonForm>Login</ButtonForm>
      <Link
        href="/auth/register"
        className="text-center hover:underline text-slate-900 hover:opacity-80"
      >
        Register
      </Link>
    </Form>
  );
}
