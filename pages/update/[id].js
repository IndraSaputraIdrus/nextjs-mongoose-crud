import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Form from "../../components/Form";
import InputForm from "../../components/InputForm";
import ButtonForm from "../../components/ButtonForm";
import Head from "next/head";
import { unAuthPages } from "../../middlewares/authPages";

export function getServerSideProps(context) {
  unAuthPages(context);
  return { props: {} };
}

export default function Add() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({
    error: false,
    message: "",
  });
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // if (!router.isReady) return;
    if (!id) return;
    getDataById(id);

    // parameter
    // [router.isReady]
  }, [id]);

  const getDataById = async (id) => {
    const req = await fetch(`/api/siswa/${id}`);
    const res = await req.json();
    setName(res.name);
    setEmail(res.email);
  };

  const formHandler = async (e) => {
    e.preventDefault();

    const req = await fetch(`/api/siswa/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });

    const res = await req.json();

    console.log(res);

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
        <title>Update Page</title>
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
        <ButtonForm>Update</ButtonForm>
      </Form>
    </>
  );
}
