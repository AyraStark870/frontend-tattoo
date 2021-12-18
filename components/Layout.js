import Head from "next/head";
import React, { useContext } from "react";
import useStyles from "../utils/styles";
import NextLink from "next/link";
import { Store } from "../utils/Store";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  ThemeProvider,
  CssBaseline,
  createTheme,

  Button,
  Switch,
  Badge,
} from "@material-ui/core";
import { useRouter } from "next/router";
import Header from "./Header";
import Header2 from "./Header2";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import theme from "./Theme"

export default function Layout({ title, description, children }) {
  //const { state, dispatch } = useContext(Store);
  //const { darkMode } = state;


  // const theme = createTheme({
  //   typography: {
  //     h1: {
  //       fontSize: "1.6rem",
  //       fontWeight: 600,
  //       margin: "1rem 0",
  //     },
  //     h2: {
  //       fontSize: "1.4rem",
  //       fontWeight: 400,
  //       margin: "1rem 0",
  //     },
  //   },
  //   palette: {
  //     type: darkMode ? "dark" : "light",
  //     primary: {
  //       main: "#EFC437",
  //     },
  //     secondary: {
  //       main: "#208080",
  //     },
  //   },
  // });

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
    <div>
      <Head>
        <title>Perfect Time Ink</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Header></Header> */}
        <Header2></Header2>


        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved. Perfect Time Ink.</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
