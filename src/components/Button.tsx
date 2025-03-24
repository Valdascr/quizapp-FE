import React from "react";

type ButtonProps = {
    label: string;
    onClick: () => void;
    padding: string;
};

const Button: React.FC<ButtonProps> = ({label, onClick, padding}) => {
    return (
        <button onClick={onClick} style={{padding: padding, cursor: "pointer"}}>
            {label}
        </button>
    );
};

export default Button;