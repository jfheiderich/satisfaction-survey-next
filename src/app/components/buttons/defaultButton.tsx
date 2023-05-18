import React from "react";

type DefaultButtonProps = {
  contentButton: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
};

export const DefaultButton = (props: DefaultButtonProps) => {
  const { contentButton, onClick, type } = props;

  return (
    <button onClick={onClick} type={type} className="button default-button">
      {contentButton}
    </button>
  );
};
