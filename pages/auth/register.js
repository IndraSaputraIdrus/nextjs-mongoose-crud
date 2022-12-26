import Form from "../../components/Form";
import InputForm from "../../components/InputForm";
import { useState } from "react";
import ButtonForm from "../../components/ButtonForm";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState({
    error: false,
    message: "",
  });

  const formHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={formHandler} status={status}>
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
      <ButtonForm>Login</ButtonForm>
    </Form>
  );
}
