import Image from "next/image";
import "globals.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { DefaultButton } from "@/app/components/buttons/defaultButton";

const SuccessPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("@logged")) {
      router.push("/");
    }
  });

  const logOut = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <div className="success">
      <Image alt="nyc-logo" src={"/nyc-logo.jpeg"} width={200} height={200} />
      <h1>Obrigado por responder nosso questionário!</h1>
      <h1>
        Sua ajuda melhora a qualidade dos nossos produtos e ajuda a você a ter
        uma melhor experiência conosco!
      </h1>
      <DefaultButton contentButton="Sair" onClick={logOut} />
    </div>
  );
};

export default SuccessPage;
