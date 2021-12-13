import Head from "next/head";
import React, { useContext } from "react";
import useStyles from "../utils/styles";
import NextLink from "next/link";
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
import { createMuiTheme } from "@material-ui/styles";

export default function Layout({ title, description, children }) {


  const theme = createTheme({
    typography: {

      h1: {
        fontSize: "1.6rem",
        fontWeight: 600,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      type: "light",
      primary: {
        main: "#EFC437",
      },
      secondary: {
        main: "#208080",
      },
    },
  });
  const classes = useStyles();
  // const darkModeChangeHandler = () => {
  //   dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
  //   const newDarkMode = !darkMode;
  //   Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  // };
  return (
    <div>
      <Head>
        <title>Perfect Time Ink</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.logo}>Logo</Typography>
              </Link>
            </NextLink>
           {/* <div ></div> */}
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
                </div>
              <NextLink href="/login" passHref>
                <Link>
                  <Button

                    variant="contained"
                    color="primary"
                  >
                    Login
                  </Button>
                </Link>
              </NextLink>
          </Toolbar>
        </AppBar>

        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved. Perfect Time Ink.</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
