
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
} from "@material-ui/core";


 export default createTheme({
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
     // type: darkMode ? "dark" : "light",
     type: "light",
     primary: {
       main: "#EFC437",
     },
     secondary: {
       main: "#F8F8F8",
     },
   },
 });
