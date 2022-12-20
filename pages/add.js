import { useState } from "react";
import Router from "next/router";
import Form from "../components/Form";
import InputForm from "../components/InputForm";
import ButtonForm from "../components/ButtonForm";
import Head from "next/head";

export default function Add() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({
    error: false,
    message: "",
  });

  const formHandler = async (e) => {
    e.preventDefault();

    const req = await fetch("/api/siswa/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });

    const res = await req.json();

    if (res.message !== "success") {
      return setStatus({
        error: true,
        message: "Form Not Valid",
      });
    }

    Router.push("/");
  };
  return (
    <>
      <Head>
        <title>Add Page</title>
      </Head>

      <Form onSubmit={formHandler} status={status}>
        <InputForm
          placeholder="Insert Name Here"
          onChange={(e) => setName(e.target.value)}
          value={name}
        >
          Name :
        </InputForm>
        <InputForm
          placeholder="Insert Email Here"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        >
          Email :
        </InputForm>
        <ButtonForm>Add</ButtonForm>
      </Form>
    </>
  );
}
