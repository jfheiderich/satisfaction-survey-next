import React from "react";

type DefaultInputProps = {
  labelName: string;
  inputType: string;
  inputName: string;
};

export const DefaultInput = (props: DefaultInputProps) => {
  const { inputName, inputType, labelName } = props;
  return (
    <>
      <label className="label" htmlFor={inputName}>
        {labelName}
      </label>
      <input className="input" type={inputType} name={inputName} />
    </>
  );
};
