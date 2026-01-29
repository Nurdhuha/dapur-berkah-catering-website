import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

const Button = ({
    children,
    variant = "primary",
    className = "",
    onClick,
    type = "button",
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full px-6 py-2.5 text-sm";

    const variants = {
        primary: "bg-orange-500 hover:bg-orange-600 text-white shadow-sm focus:ring-orange-500",
        secondary: "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 focus:ring-gray-200",
        ghost: "bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-100",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
