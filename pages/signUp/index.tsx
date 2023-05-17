import { DefaultButton } from "@/app/components/buttons/defaultButton";
import { DefaultInput } from "@/app/components/inputs/defaultInput";
import React, { useState } from "react";
import "/globals.css";
import { users } from "../../src/app/usersMock";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const createAccount = () => {
    const user = users.find((user) => user.email === email);
    if (user) {
      console.log("usuario já cadastrado");
    }
    users.push({
      name,
      email,
      password,
    });
    router.push("/signIn");
  };

  return (
    <form className="form" onSubmit={() => createAccount()}>
      <DefaultInput
        labelName="Nome de usuário"
        inputName="name"
        inputType="text"
        inputValue={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <DefaultInput
        labelName="Repita a senha"
        inputName="confirm_password"
        inputType="password"
        inputValue={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <DefaultButton contentButton="Cadastrar" type="submit" />
      <p>
        Já tem conta? <a href="/signIn">Clique aqui!</a>
      </p>
    </form>
  );
};

export default SignUp;
