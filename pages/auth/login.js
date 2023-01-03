import Form from "../../components/Form";
import InputForm from "../../components/InputForm";
import { useState } from "react";
import ButtonForm from "../../components/ButtonForm";
import Cookies from "js-cookie";
import Router from "next/router";
import { authPages } from "../../middlewares/authPages";

export function getServerSideProps(context) {
  authPages(context);
  return {
    props: {},
  };
}

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({
    error: false,
    message: "",
  });

  const loginHandler = async (e) => {
    e.preventDefault();

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
      return setStatus({
        error: true,
        message: res.error,
      });
    }

    setStatus({
      error: false,
      message: "success",
    });

    Cookies.set("token", res.token, { expires: 7, sameSite: "strict" });

    Router.push("/");
  };

  return (
    <Form status={status} onSubmit={loginHandler}>
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
    </Form>
  );
}
