import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Divider // Add this import for Divider
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const StyledNavLink =styled(NavLink)`
color : #ffffff;
text-decoration:none;
color :#333;
text-align: center:
`
const drawerWidth = 240;
const navItems = [
  {
    Key:"Home",
    path:"/home"
  },
  {
   key: "Employee List",
    path:"/employee-list"
  } ,
  {
    key:"Add Employee",
    path:"/add-employee"
  } ,
  {
    key:"LogOut",
    path:"/home"
  }
];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box  onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ my: 2 }}>
        Employee App
      </Typography>
      <Divider /> 
      <List>
        {navItems.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton sx={{textAlign:"center"}}>
             <StyledNavLin to={item.path}
              variant="text">
              <ListItemText primary={item.key} />
            </StyledNavLin> 
            </ListItemButton>
            
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Employee App
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item.key} sx={{ color: "#fff" }} variant="text">
                <styledNavLink to ={item.path} >
                {item.key}
              </styledNavLink>
              </Button>
              
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default NavBar;
