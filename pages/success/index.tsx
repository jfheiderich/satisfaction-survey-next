import Image from "next/image";
import "globals.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SuccessPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("@logged")) {
      router.push("/");
    }
  });

  return (
    <div className="success">
      <Image alt="nyc-logo" src={"/nyc-logo.jpeg"} width={200} height={200} />
      <h1>Obrigado por responder nossas perguntas!</h1>
      <h1>
        Sua ajuda melhora a qualidade dos nossos produtos e ajuda a você a ter
        uma melhor experiência conosco!
      </h1>
    </div>
  );
};

export default SuccessPage;
