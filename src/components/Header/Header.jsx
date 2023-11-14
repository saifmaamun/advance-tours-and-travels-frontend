import * as React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/images/advance-tours-logo.jpg";
import { Link } from "react-router-dom";


const settings = ["Profile", "Account", "Dashboard", "Logout"]; 

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar sx={{ bgcolor: "#430f6400", boxShadow: 0 }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar src={logo} alt="" />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#000"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                sx={{ mx: 'auto', color: "#000", display: "block" }}
                component={Link}
                to={"/offers"}
              >
                Offers
              </MenuItem>
              <MenuItem
                sx={{  mx: 'auto', color: "#000", display: "block" }}
                component={Link}
                to={"/login"}
              >
                Login
              </MenuItem>
              <MenuItem
                sx={{  mx: 'auto', color: "#000", display: "block" }}
                component={Link}
                to={"/signin"}
              >
                Signin
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", sm: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "roboto",
              fontWeight: 700,
              letterSpacing: ".3rem",

              color: "#000",
              textDecoration: "none",
            }}
          >
            ADVANCE TOURS & TRAVELS
          </Typography>
          <Typography
            variant="subtitle1"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "none", md: "none" },
              flexGrow: 1,
              fontFamily: "roboto",
              fontWeight: 500,
              letterSpacing: ".1rem",

              color: "#000",
              textDecoration: "none",
            }}
          >
            ADVANCE TOURS
          </Typography>
          <Box sx={{ mx: "auto", display: { xs: "none", md: "flex" } }}>
            <MenuItem
              sx={{ my: 2, color: "#000", display: "block" }}
              component={Link}
              to={"/offers"}
            >
              Offers
            </MenuItem>
            <MenuItem
              sx={{ my: 2, color: "#000", display: "block" }}
              component={Link}
              to={"/login"}
            >
              Login
            </MenuItem>
            <MenuItem
              sx={{ my: 2, color: "#000", display: "block" }}
              component={Link}
              to={"/signin"}
            >
              Signin
            </MenuItem>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
