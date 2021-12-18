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
import { CRMContext, CRMProvider } from "../../utils/CRMContext";
import { useContext } from "react";

export default function Login() {
 const classes = useStyles();
  const router = useRouter();
  const [auth, guardarAuth] = useContext(CRMContext);

  const initialForm = {
       email: "",
       pasword: "",
  };
  const [user, actualizarState, reset] = useForm(initialForm);

      const handlerSubmit = e=>{
        e.preventDefault()
        console.log(user);
         clienteAxios
           .post("/login", user)
           .then(respuesta => {
            const {rol,name, token} = respuesta.data
                     guardarAuth({
                       token,
                       auth: true,
                       rol,
                       name,
                     });
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
             name="pasword"
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
