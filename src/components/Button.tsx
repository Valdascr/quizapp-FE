import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  ButtonType?: 'start' | 'next';
};

const Button: React.FC<ButtonProps> = ({ label, onClick, ButtonType }) => {
  const start =
    'px-32 py-6 rounded-lg font-sans text-2xl text-white bg-sky-500 hover:bg-sky-400 ';
  return (
    <button onClick={onClick} className={`${start}`}>
      {label}
    </button>
  );
};

export default Button;