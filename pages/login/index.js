import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
  Link,
} from "@material-ui/core";
import NextLink from "next/link";
import useStyles from "../../utils/styles";
import Layout from "../../components/Layout";
import {useState} from 'react'
import clienteAxios from "../../axios";
import { useForm } from "../../hooks/useForm";
import { useRouter } from "next/router";

export default function Login() {
 const classes = useStyles();
  const router = useRouter();

  const initialForm = {
       email: "",
       password: "",
  };
  const [user, actualizarState, reset] = useForm(initialForm);


  //  const [user, datosUser] = useState({
  //    email: "",
  //    password: "",
  //  });
  //    const actualizarState = ({ target }) => {
  //      datosUser({
  //        ...user,
  //        [target.name]: target.value,
  //      });
  //     };
      const handlerSubmit = e=>{
        e.preventDefault()
        console.log(user);
         clienteAxios
           .post("/login", user)
           .then((respuesta) => {
             console.log(respuesta);
             router.push("/");
             //  document.querySelector("#form").reset();
           })
           .catch((err) => {
             console.log(err);
           });
    }

 return (
   <Layout title="Login">
     <form className={classes.form} onSubmit={handlerSubmit}>
       <Typography component="h1" variant="h1">
         Login
       </Typography>
       <List>
         <ListItem>
           <TextField
             variant="outlined"
             fullWidth
             id="email"
             label="Email"
             name="email"
             inputProps={{ type: "email" }}
             onChange={actualizarState}
           ></TextField>
         </ListItem>
         <ListItem>
           <TextField
             variant="outlined"
             fullWidth
             id="password"
             label="Password"
             name="password"
             inputProps={{ type: "password" }}
             onChange={actualizarState}
           ></TextField>
         </ListItem>
         <ListItem>
           <Button variant="contained" type="submit" fullWidth color="primary">
             Login
           </Button>
         </ListItem>
         <ListItem>
           Don't have an account? &nbsp;
           <NextLink href="/register" passHref>
             <Link>Register</Link>
           </NextLink>
         </ListItem>
       </List>
     </form>
   </Layout>
 );
}
