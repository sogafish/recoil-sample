import React from 'react';

interface IProps {
  onClick: () => void;
  text: string;
}

export const Button = (props: IProps) => {
  const { onClick, text } = props;

  return (
    <button onClick={onClick}>{text}</button>
  );
};
