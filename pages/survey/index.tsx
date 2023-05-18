import { DefaultButton } from "@/app/components/buttons/defaultButton";
import "globals.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Survey = () => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("0");
  const [mobileApp, setMobileApp] = useState(false);
  const [security, setSecurity] = useState(false);
  const [transparency, setTransparency] = useState(false);
  const [transactionsAgility, setTransactionsAgility] = useState(false);
  const [solveProblemsAgility, setSolveProblemsAgility] = useState(false);
  const [pointsProgram, setPointsProgram] = useState(false);
  const [lowRates, setLowRates] = useState(false);
  const [creditToBuy, setCreditToBuy] = useState(false);
  const [attractionsDiscounts, setAttractionsDiscounts] = useState(false);
  const [complement, setComplement] = useState("");

  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("@logged")) {
      router.push("/");
    }
  });

  const surveyHandler = () => {
    const userAnswers = {
      gender,
      age,
      mobileApp,
      security,
      transparency,
      transactionsAgility,
      solveProblemsAgility,
      pointsProgram,
      lowRates,
      creditToBuy,
      attractionsDiscounts,
      complement,
    };

    if (!gender) {
      toast.info(`Adicione o seu gênero`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    } else if (age === "0") {
      toast.info(`Adicione sua idade corretamente`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    localStorage.setItem("@userAnswers", JSON.stringify(userAnswers));

    router.push("/success");
  };

  return (
    <div className="survey-container">
      <h1>Nós da NYC queremos ouvir você!</h1>
      <h2>Sua opinião é super importante para nós!</h2>

      {/* Gender */}
      <div className="survey-container__gender">
        <p>Qual seu gênero?</p>
        <span>
          <input
            defaultChecked={gender === "male"}
            type="radio"
            name="gender"
            value="male"
            id="male"
            onChange={() => setGender("male")}
          />
          <label htmlFor="male">Homem</label>
        </span>
        <span>
          <input
            defaultChecked={gender === "female"}
            type="radio"
            name="gender"
            value="female"
            id="female"
            onChange={() => setGender("female")}
          />
          <label htmlFor="female">Mulher</label>
        </span>
        <span>
          <input
            defaultChecked={gender === "other"}
            type="radio"
            name="gender"
            value="other"
            id="other"
            onChange={() => setGender("other")}
          />
          <label htmlFor="other">Outro</label>
        </span>
      </div>
      <hr />

      {/* Age */}
      <div className="survey-container__age">
        <label htmlFor="age">Qual a sua idade?</label>
        <p>{age}</p>
        <input
          min={0}
          max={100}
          type="range"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <hr />
      {/* Expectation */}
      <div className="survey-container__expectations">
        <p>O que você espera de um banco digital como a NYC?</p>
        <span>
          <input
            type="checkbox"
            name="mobile_app"
            defaultChecked={mobileApp}
            onClick={() => setMobileApp(!mobileApp)}
          />
          <label htmlFor="mobile_app">Um aplicativo intuitivo</label>
        </span>

        <span>
          <input
            type="checkbox"
            name="security"
            defaultChecked={security}
            onClick={() => setSecurity(!security)}
          />
          <label htmlFor="security">Segurança</label>
        </span>

        <span>
          <input
            type="checkbox"
            name="transparency"
            defaultChecked={transparency}
            onClick={() => setTransparency(!transparency)}
          />
          <label htmlFor="transparency">Transparência</label>
        </span>

        <span>
          <input
            type="checkbox"
            name="transactions_agility"
            defaultChecked={transactionsAgility}
            onClick={() => setTransactionsAgility(!transactionsAgility)}
          />
          <label htmlFor="transactions_agility">Agilidade nas transações</label>
        </span>

        <span>
          <input
            type="checkbox"
            name="solve_problems_agility"
            defaultChecked={solveProblemsAgility}
            onClick={() => setSolveProblemsAgility(!solveProblemsAgility)}
          />
          <label htmlFor="solve_problems_agility">
            Agilidade no atendimento
          </label>
        </span>

        <span>
          <input
            type="checkbox"
            name="points_program"
            defaultChecked={pointsProgram}
            onClick={() => setPointsProgram(!pointsProgram)}
          />
          <label htmlFor="points_program">Programa de Pontos</label>
        </span>

        <span>
          <input
            type="checkbox"
            name="low_interest_rates"
            defaultChecked={lowRates}
            onClick={() => setLowRates(!lowRates)}
          />
          <label htmlFor="low_interest_rates">Taxas baixas</label>
        </span>

        <span>
          <input
            type="checkbox"
            name="credit_to_by"
            defaultChecked={creditToBuy}
            onClick={() => setCreditToBuy(!creditToBuy)}
          />
          <label htmlFor="credit_to_by">Crédito para compra</label>
        </span>

        <span>
          <input
            type="checkbox"
            name="attractions_discounts"
            defaultChecked={attractionsDiscounts}
            onClick={() => setAttractionsDiscounts(!attractionsDiscounts)}
          />
          <label htmlFor="attractions_discounts">Desconto em atrações</label>
        </span>
      </div>
      <span className="text-area">
        <label htmlFor="other">Algo mais? Conta pra gente!</label>
        <textarea
          name="other"
          cols={30}
          rows={10}
          value={complement}
          onChange={(e) => setComplement(e.target.value)}
        ></textarea>
      </span>

      <DefaultButton contentButton="Enviar Respostas" onClick={surveyHandler} />
      <ToastContainer />
    </div>
  );
};

export default Survey;
