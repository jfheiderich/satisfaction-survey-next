import React, { ChangeEventHandler } from "react";

type DefaultInputProps = {
  labelName: string;
  inputType: string;
  inputName: string;
  inputValue: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
};

export const DefaultInput = (props: DefaultInputProps) => {
  const { inputName, inputType, labelName, inputValue, onChange } = props;
  return (
    <>
      <label className="label" htmlFor={inputName}>
        {labelName}
      </label>
      <input
        className="input"
        type={inputType}
        name={inputName}
        value={inputValue}
        onChange={onChange}
      />
    </>
  );
};
