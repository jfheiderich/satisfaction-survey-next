import { DefaultButton } from "@/app/components/buttons/defaultButton";
import { DefaultInput } from "@/app/components/inputs/defaultInput";
import React, { useEffect, useState } from "react";
import "/globals.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("@logged")) {
      router.push("/survey");
    }
  });

  const createAccount = () => {
    if (!name) {
      toast.error(`Campo "nome" está em branco`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    } else if (!email) {
      toast.error(`Campo "email" está em branco`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    } else if (!password) {
      toast.error(`Campo "senha" está em branco`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    const newUser = {
      name,
      email,
      password,
    };

    const users = localStorage.getItem("@users");

    if (users) {
      let usersMock = JSON.parse(users);
      const isUserUsed = usersMock.find(
        (user: { email: string }) => user.email === newUser.email
      );
      if (isUserUsed) {
        toast.info(`Este email já está em uso`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
      usersMock.push(newUser);
      const usersUpdated = JSON.stringify(usersMock);

      localStorage.setItem("@users", usersUpdated);
    }
    router.push("/signIn");
  };

  return (
    <div className="form">
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

      <DefaultButton
        contentButton="Cadastrar"
        onClick={() => createAccount()}
      />
      <p>
        Já tem conta? <Link href="/signIn">Clique aqui!</Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
