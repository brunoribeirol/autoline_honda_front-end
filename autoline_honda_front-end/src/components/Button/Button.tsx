import React from "react";

interface ButtonProps {
  type: "submit" | "button";
  onClick?: () => void;
  className: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, onClick, className, children }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;

//You can use this Button component in your pages like this:
//<Button type="submit" className="btn btn-success">Save</Button>
