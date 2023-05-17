"use client";
import React, { useEffect } from "react";

import { DefaultButton } from "./components/buttons/defaultButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  // useEffect(() => {
  //   if (localStorage.getItem("@login")) {
  //     router.push("/");
  //   }
  // }, []);
  return (
    <div className="home-page">
      <div className="home-page__container">
        <Image alt="nyc-logo" src={"/nyc-logo.jpeg"} width={200} height={200} />

        <p>Pesquisa de satisfação NYC</p>

        <DefaultButton
          contentButton="Cadastrar"
          onClick={() => router.push("/signUp")}
        />
        <DefaultButton
          contentButton="Login"
          onClick={() => router.push("/signIn")}
        />
      </div>
    </div>
  );
};
export default HomePage;
