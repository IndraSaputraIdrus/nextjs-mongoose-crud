import Form from "../../components/Form";
import InputForm from "../../components/InputForm";
import { useState } from "react";
import ButtonForm from "../../components/ButtonForm";
import { authPages } from "../../middlewares/authPages";
import Link from "next/link";

export function getServerSideProps(context) {
  authPages(context);
  return {
    props: {},
  };
}

Register.getLayout = function getLayout(page) {
  return page;
};

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("");

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const req = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, confirmPassword }),
      });

      const res = await req.json();
      setStatus(res.message);
    } catch (error) {
      console.log(error.message);
      setStatus("Failed To Register");
    }
  };

  return (
    <Form onSubmit={formHandler} status={status} className="min-h-screen">
      <InputForm
        placeholder="Insert Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
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
      <InputForm
        placeholder="Insert Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
        type="password"
      >
        Confirm Password :
      </InputForm>
      <ButtonForm>Register</ButtonForm>
      <Link
        href="/auth/login"
        className="text-center hover:underline text-slate-900 hover:opacity-80"
      >
        Login
      </Link>
    </Form>
  );
}
