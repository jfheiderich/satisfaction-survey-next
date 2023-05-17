import { DefaultButton } from "@/app/components/buttons/defaultButton";
import { DefaultInput } from "@/app/components/inputs/defaultInput";
import React, { useState } from "react";
import "/globals.css";
import { users } from "../../src/app/usersMock";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleLogin = () => {
    const user = users.find((user) => user.email === email);
    if (user?.password !== password) {
      setError(true);
      return;
    }

    router.push("/signIn");
  };

  return (
    <form className="form" onSubmit={() => handleLogin()}>
      <DefaultInput
        labelName="Email"
        inputName="email"
        inputType="email"
        inputValue={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <DefaultInput
        labelName="Digite uma senha"
        inputName="password"
        inputType="password"
        inputValue={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <DefaultButton contentButton="Entrar" type="submit" />
      <p>
        Ainda não tem conta? <a href="/signUp">Clique aqui!</a>
      </p>
    </form>
  );
};

export default SignIn;
