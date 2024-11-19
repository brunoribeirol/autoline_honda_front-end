import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent: React.FC = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Autoline Honda</Link>
      <div className="ml-auto">
      </div>
    </header>
  );
};

export default HeaderComponent;