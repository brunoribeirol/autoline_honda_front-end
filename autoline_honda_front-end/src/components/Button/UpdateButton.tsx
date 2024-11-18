import React from "react";
import Button from "./Button"; 

interface UpdateButtonProps {
  onClick: () => void;
}

const UpdateButton: React.FC<UpdateButtonProps> = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick} className="btn btn-warning">
      Editar
    </Button>
  );
};

export default UpdateButton;
