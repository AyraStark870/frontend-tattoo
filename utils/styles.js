import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#ffffff",
    marginBottom: 50,
    "& a": {
      color: "#000000",
      marginLeft: 10,
      fontSize: "1.3rem",
    },
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    marginTop: 10,
    textAlign: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  grow: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  infoIndex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& button": {
      display: "block",
    },
  },
  form: {
    maxWidth: 800,
    margin: "0 auto",
  },
});
export default useStyles