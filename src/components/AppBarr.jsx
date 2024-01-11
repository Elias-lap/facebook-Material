import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import React, { useRef, useState } from "react";
import { Avatar, Menu, MenuItem } from "@mui/material";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
function AppBarr({setshowList ,showList}) {
  // for small Menu

  const [isOpen, setIsOpen] = useState(false);
  const inputElement = useRef(null);
  const handelClose = () => {
    setIsOpen(false);
  };

  //  for menu big screen
  const [isOpenbigscreen, setIsOpenbigscreen] = useState(false);
  const inputElementisOpenbigscreen = useRef(null);
  const handelCloseisOpenbigscreen = () => {
    setIsOpenbigscreen(false);
  };
  const renderMenu = (
    <Menu
      anchorEl={inputElementisOpenbigscreen.current}
      open={isOpenbigscreen}
      onClose={handelCloseisOpenbigscreen}
    >
      <MenuItem onClick={handelCloseisOpenbigscreen}>Profile</MenuItem>
      <MenuItem onClick={handelCloseisOpenbigscreen}>My account</MenuItem>
    </Menu>
  );
  const renderMobileMenu = (
    <Menu anchorEl={inputElement.current} open={isOpen} onClose={handelClose}>
      <MenuItem onClick={handelClose}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem onClick={handelClose}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <p>Notifications</p>
      </MenuItem>
      <MenuItem
        onClick={handelClose}

        // onClick={handleProfileMenuOpen}
      >
        <IconButton size="large" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <AppBar component={"header"}  position="sticky">
      <Toolbar>
        <IconButton

        onClick={()=>{
          showList ==="none" ? setshowList("block") :setshowList("none") 
        
        }}
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2,   display :{xs :"flex"  , md : "none"}}}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          fasebook
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex", alignItems: "center" } }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            sx={{ width: "37px", height: "37px" }}
          >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton
            sx={{ width: "37px", height: "37px" }}
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            ref={inputElementisOpenbigscreen}
            // onClick={handleProfileMenuOpen}
            id="basic-button"
            onClick={() => {
              setIsOpenbigscreen(!isOpenbigscreen);
            }}
            color="inherit"
          >
            <Avatar
              sx={{ width: "37px", height: "37px" }}
              alt="Remy Sharp"
              src="./WhatsApp Image 2023-10-30 at 09.48.16_8fb1094e-modified.png"
            />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            ref={inputElement}
            id="basic-button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            // onClick={handleMobileMenuOpen}
            color="inherit"
            edge="end"
            aria-label="show more"
            aria-haspopup="true"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
      {renderMenu}
      {renderMobileMenu}
    </AppBar>
  );
}

export default AppBarr;
