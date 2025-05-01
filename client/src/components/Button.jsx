import React from "react";
import useRedirect from "./useRedirect";

const Button = ({ children, onClick, isBookingButton = false, type = "button", variant = "primary", icon, className }) => {
  const baseClasses = "px-4 py-2 rounded-lg font-semibold transition duration-200 cursor-pointer " + className;
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-800",
    danger: "bg-red-500 text-white hover:bg-red-800",
    success: "bg-green-500 text-white hover:bg-green-800",
    warning: "bg-yellow-500 text-white hover:bg-yellow-800",
    info: "bg-blue-300 text-white hover:bg-blue-500",
    light: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    dark: "bg-gray-800 text-white hover:bg-gray-700",
    link: "text-blue-500 hover:text-blue-800 underline",
    ghost: "bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    none: '',
  };
  const redirectTo = useRedirect();

  return (
    <button
      type={type}
      onClick={isBookingButton ? onClick = () => redirectTo("/booking") : onClick ? onClick : null}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children} {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;