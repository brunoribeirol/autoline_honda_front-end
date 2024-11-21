import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import Stack from "@mui/material/Stack";
import { Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';

const HeaderComponent: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ paddingLeft: "20px" }}>
      
      <Stack spacing={2} direction="row">
        {/* <Link className="navbar-brand" to="/"> 
          <HomeIcon color="primary" fontSize="large"/>
        </Link> */}
        {location.pathname.includes("/") 
          && <>
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon color="primary"/>
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                <List>
                  {[{ text: "Home", route: "/" },
                    {text: "Dashboard", route: "/dashboard" },].map((item, index) => (
                    <ListItem key={item.text} disablePadding>
                      <ListItemButton onClick={() => navigate(item.route)}>
                        <ListItemIcon>
                          {index % 2 === 0 ? <HomeIcon /> : <DashboardIcon />}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        }        
        {/* Autoline Honda   */}
      </Stack>
      
      <div className="ml-auto">
      </div>
    </header>
  );
};

export default HeaderComponent;