import React from "react";
import Button from "./Button"; 

interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick} className="btn btn-danger">
      Deletar
    </Button>
  );
};

export default DeleteButton;
