"use client";
import React from "react";

import { DefaultButton } from "./components/buttons/defaultButton";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__container">
        <Image alt="nyc-logo" src={"/nyc-logo.jpeg"} width={200} height={200} />

        <p>Pesquisa de satisfação NYC</p>

        <DefaultButton
          contentButton="Cadastrar"
          onClick={() => console.log("hi")}
        />
        <DefaultButton
          contentButton="Login"
          onClick={() => console.log("ho")}
        />
      </div>
    </div>
  );
};
export default HomePage;
