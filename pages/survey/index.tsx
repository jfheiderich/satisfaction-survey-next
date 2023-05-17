import { DefaultButton } from "@/app/components/buttons/defaultButton";
import "globals.css";
import { useState } from "react";
const Survey = () => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("0");
  const [expectations, setExpectations] = useState({
    mobile_app: false,
    security: false,
    transparency: false,
    transactions_agility: false,
    solve_problems_agility: false,
    points_program: false,
    low_interest_rates: false,
    credit_to_by: false,
    attractions_discounts: false,
  });
  const [other, setOther] = useState("");

  return (
    <form className="survey-container" onSubmit={() => console.log("test")}>
      <h1>Nós fa NYC queremos ouvir você!</h1>
      <h2>Sua opinião é super importante para nós!</h2>

      {/* Gender */}
      <div className="survey-container__gender">
        <p>Qual seu gênero?</p>
        <span>
          <input
            checked={gender === "male"}
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
            checked={gender === "female"}
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
            checked={gender === "uninformed"}
            type="radio"
            name="gender"
            value="other"
            id="other"
            onChange={() => setGender("other")}
          />
          <label htmlFor="uninformed">Outro</label>
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
            checked={expectations.mobile_app}
          />
          <label htmlFor="mobile_app">Um aplicativo intuitivo</label>
        </span>

        <span>
          <input
            type="checkbox"
            name="security"
            checked={expectations.security}
          />
          <label htmlFor="security">Segurança</label>
        </span>

        <span>
          <input
            type="checkbox"
            name="transparency"
            checked={expectations.transparency}
          />
          <label htmlFor="transparency">Transparência</label>
        </span>

        <span>
          <input
            type="checkbox"
            name="transactions_agility"
            checked={expectations.transactions_agility}
          />
          <label htmlFor="transactions_agility">Agilidade nas transações</label>
        </span>

        <span>
          <input
            type="checkbox"
            name="solve_problems_agility"
            checked={expectations.solve_problems_agility}
          />
          <label htmlFor="solve_problems_agility">
            Agilidade no atendimento
          </label>
        </span>

        <span>
          <input
            type="checkbox"
            name="points_program"
            checked={expectations.points_program}
          />
          <label htmlFor="points_program">Programa de Pontos</label>
        </span>

        <span>
          <input
            type="checkbox"
            name="low_interest_rates"
            checked={expectations.low_interest_rates}
          />
          <label htmlFor="low_interest_rates">Taxas baixas</label>
        </span>

        <span>
          <input
            type="checkbox"
            name="credit_to_by"
            checked={expectations.credit_to_by}
          />
          <label htmlFor="credit_to_by">Crédito para compra</label>
        </span>

        <span>
          <input
            type="checkbox"
            name="attractions_discounts"
            checked={expectations.attractions_discounts}
          />
          <label htmlFor="attractions_discounts">Disconto em atrações</label>
        </span>
      </div>
      <span className="text-area">
        <label htmlFor="other">Algo mais? Conta pra gente!</label>
        <textarea
          name="other"
          cols={30}
          rows={10}
          value={other}
          onChange={(e) => setOther(e.target.value)}
        ></textarea>
      </span>

      <DefaultButton contentButton="Enviar" type="submit" />
    </form>
  );
};

export default Survey;
