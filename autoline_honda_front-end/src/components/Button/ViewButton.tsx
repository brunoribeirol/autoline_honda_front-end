import React from "react";
import Button from "./Button"; 

interface ViewButtonProps {
  onClick: () => void;
}

const UpdateButton: React.FC<ViewButtonProps> = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick} className="btn btn-info">
      Editar
    </Button>
  );
};

export default UpdateButton;