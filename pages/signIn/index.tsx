import { DefaultButton } from "@/app/components/buttons/defaultButton";
import { DefaultInput } from "@/app/components/inputs/defaultInput";
import React, { useEffect, useState } from "react";
import "/globals.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("@logged")) {
      router.push("/survey");
    }
  });

  const handleLogin = () => {
    if (!email) {
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

    const userInfo = {
      email,
      password,
    };

    const users = localStorage.getItem("@users");
    if (users) {
      let usersMock = JSON.parse(users);

      const hasAccount = usersMock.find(
        (user: { email: string }) => user.email === userInfo.email
      );

      const passwordMatch =
        hasAccount?.password === userInfo.password ? true : false;

      if (!hasAccount || !passwordMatch) {
        toast.info(`Confira suas credenciais e tente novamente!`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }

      localStorage.setItem("@logged", email);
      router.push("/survey");
    }
  };

  return (
    <div className="form">
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

      <DefaultButton contentButton="Entrar" onClick={handleLogin} />
      <p>
        Ainda não tem conta? <Link href="/signUp">Clique aqui!</Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
