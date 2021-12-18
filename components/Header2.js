import Head from "next/head";
import React, { useContext } from "react";
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
  useTheme,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import { useRouter } from "next/router";
import { Store } from "../utils/Store";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core";
import { SwipeableDrawer } from "@material-ui/core";
import { CRMContext, CRMProvider } from "../utils/CRMContext";



function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: 100,
  },
  appBar: {
    display: "flex",
    justifyContent: "center",
    //alignItems: "center",
  },
  linkContainer: {
    // marginLeft: "auto",
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    fontSize: "1.3rem",
    fontFamily: "Sancreek",
    color: "#F8F8F8",
    textTransform: "none",
    "&:hover": {
      textDecoration: "underline rgb(167, 137, 38)",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
    },
  },
  link: {
    fontFamily: "Sancreek",
    color: "#2B2B2B",
    fontSize: "1.4rem",
    textTransform: "none",
    "&:hover": {
      textDecoration: "underline #F8F8F8",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  user: {
    fontFamily: "Sancreek",
    color: "#2B2B2B",
    fontSize: "1rem",
    color: "#A13333",
  },

  logo: {
    marginRight: 70,
    marginLeft: 30,
    marginTop: 7,
    marginBottom: 7,
    [theme.breakpoints.down("sm")]: {
      width: 110,
      height: 90,
      marginRight: 40,
      marginLeft: 20,
      marginBottom: 2,
    },
    [theme.breakpoints.down("xs")]: {
      width: 90,
      height: 80,
    },
  },
  drawer: {
    backgroundColor: "#F8F8F8",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    width: 40,
    height: 40,
  },
  linkDrawer: {
    fontFamily: "Sancreek",
    color: "#2B2B2B",
    fontSize: "1.4rem",
  },
  linkDrawerLogin: {
    fontFamily: "Sancreek",
    fontSize: "1.5rem",
    color: "#EFC437",
    //backgroundColor: "#EFC437",
    //   //color: "#EFC437",
    //   fontSize: "1.4rem",
  },
}));

const Header2 = () => {
  const [auth, guardarAuth] = useContext(CRMContext);
  console.log('desde el nav', auth);

  const logout=()=>{
      guardarAuth({
      token: "",
      auth: false,
      rol: "",
      name: "",
    });
  }

  const theme = useTheme();
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const matches = useMediaQuery(theme.breakpoints.down("xs"))
  const [openDrawer, setOpenDrawer]=React.useState(false )

  const classes = useStyles()
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const links = (
      <>
        <div className={classes.linkContainer}>
          <NextLink href="/servicios" passHref>
            <Link className={classes.link}>Servicios</Link>
          </NextLink>
          <NextLink href="/galeria" passHref>
            <Link className={classes.link}>Galeria</Link>
          </NextLink>
          <NextLink href="/contacto" passHref>
            <Link className={classes.link}>Contacto</Link>
          </NextLink>
          {/* <div className={classes.user}>{` ${auth.name ? auth.name : ""}`}</div> */}

          <NextLink href={`${auth.auth ? "/" : "/login"}`} passHref>
            {/* href={`${auth.auth ? "/" : "/login"}`} passHref> */}
            <Link className={classes.link}>
              <Button
                onClick={auth.auth ? logout: null}
                className={classes.button}
                variant="contained"
                color="primary"
              >
                {` ${auth.auth ? "Logout" : "Login"}`}
              </Button>
            </Link>
          </NextLink>
        </div>
      </>
    );

    const drawer = [
      <>
        <SwipeableDrawer
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          onOpen={() => setOpenDrawer(true)}
          classes={{ paper: classes.drawer }}
        >
          <List>
            <ListItem divider button>
              <NextLink href="/" passHref>
                <Link>
                  <ListItemText
                    disableTypography
                    className={classes.linkDrawer}
                  >
                    Inicio
                  </ListItemText>
                </Link>
              </NextLink>
            </ListItem>
            <ListItem divider button>
              <NextLink href="/servicios" passHref>
                <Link>
                  <ListItemText
                    disableTypography
                    className={classes.linkDrawer}
                  >
                    Servicios
                  </ListItemText>
                </Link>
              </NextLink>
            </ListItem>
            <ListItem divider button>
              <NextLink href="/galeria" passHref>
                <Link>
                  <ListItemText
                    disableTypography
                    className={classes.linkDrawer}
                  >
                    Galeria
                  </ListItemText>
                </Link>
              </NextLink>
            </ListItem>
            <ListItem divider button>
              <NextLink href="/contacto" passHref>
                <Link>
                  <ListItemText
                    disableTypography
                    className={classes.linkDrawer}
                  >
                    Contacto
                  </ListItemText>
                </Link>
              </NextLink>
            </ListItem>
            <ListItem divider button>
              <NextLink href="/login" passHref>
                <Link>
                  <ListItemText
                    disableTypography
                    className={( classes.linkDrawerLogin)}
                  >
                    Login
                  </ListItemText>
                </Link>
              </NextLink>
            </ListItem>
          </List>
        </SwipeableDrawer>

        <IconButton
          className={classes.drawerIconContainer}
          onClick={() => setOpenDrawer(!openDrawer)}
          disableRipple
        >
          <MenuIcon className={classes.drawerIcon} />
        </IconButton>
      </>,
    ];

  return (
    <>
      <ElevationScroll>
        <AppBar
          className={classes.appBar}
          position="fixed"
          color="secondary"
        >
          <Toolbar>
            <NextLink href="/" passHref>
              <Link className={classes.logo}>
                <Image src="/images/logo.jfif" width={120} height={100}></Image>
              </Link>
            </NextLink>
            {matches ? drawer : links}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header2;
