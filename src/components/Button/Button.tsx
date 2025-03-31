import "./Button.css"
import * as React from "react";

export type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick,  }) => (
    <button className={className} onClick={ onClick }>
        { children }
    </button>
)

export default Button;