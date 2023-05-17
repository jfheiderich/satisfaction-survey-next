import React from "react";

type DefaultButtonProps = {
  contentButton: string;
  onClick: () => void;
};

export const DefaultButton = (props: DefaultButtonProps) => {
  const { contentButton, onClick } = props;

  return (
    <button onClick={onClick} className="button default--button">
      {contentButton}
    </button>
  );
};
