import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import Stack from "@mui/material/Stack";

const HeaderComponent: React.FC = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ paddingLeft: "20px" }}>
      <Link className="navbar-brand" to="/">
      <Stack spacing={2} direction="row"> 
        <HomeIcon color="primary"/>
        {/* Autoline Honda   */}
      </Stack>
      </Link>
      <div className="ml-auto">
      </div>
    </header>
  );
};

export default HeaderComponent;