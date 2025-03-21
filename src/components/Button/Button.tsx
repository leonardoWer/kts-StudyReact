import "./Button.css"
import * as React from "react";

export type ButtonProps = {
    onClick?: (event: React.MouseEvent) => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
    <button onClick={ onClick }> { children } </button>
)

export default Button;