import Head from "next/head";
import React, { useContext } from "react";
import useStyles from "../utils/styles";
import NextLink from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Link,
    CssBaseline,
  createTheme,
  Button,
  Switch,
  ThemeProvider,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import { useRouter } from "next/router";
import { Store } from "../utils/Store";
import theme from "./Theme";

const Header = () => {
  //const theme = createTheme({ });
  const { state, dispatch } = useContext(Store);
  const { darkMode} = state;
  console.log(darkMode);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    router.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = () => {
    router.push("/");
  };

  const open = Boolean(anchorEl);
  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/",
    },
    {
      menuTitle: "Contacto",
      pageURL: "/contacto",
    },
    {
      menuTitle: "Servicios",
      pageURL: "/servicios",
    },
    {
      menuTitle: "Galeria",
      pageURL: "/galeria",
    },
    {
      menuTitle: "Login",
      pageURL: "/login",
    },
  ];

    const darkModeChangeHandler = () => {
      dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
      const newDarkMode = !darkMode;
      //Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
    };


  return (

      <AppBar position="static" color="secondary" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Image src="/images/logo.jfif" width={90} height={90}></Image>
            </Link>
          </NextLink>
          {isMobile ? (
            <div className={classes.grow2}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem) => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </div>
          ) : (
            <div className={classes.grow}>
              <NextLink href="/servicios" passHref>
                <Link>Servicios</Link>
              </NextLink>
              <NextLink href="/galeria" passHref>
                <Link>Galeria</Link>
              </NextLink>
              <NextLink href="/contacto" passHref>
                <Link>Contacto</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>
                  <Button variant="contained" color="primary">
                    Login
                  </Button>
                </Link>
              </NextLink>
            </div>
          )}
          <Switch checked={darkMode} onChange={darkModeChangeHandler}></Switch>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
