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
import { useState } from "react";
import clienteAxios from "../../axios";
import { useRouter } from "next/router";
import { useForm } from "../../hooks/useForm";

export default function Register() {
 const classes = useStyles();
  const router = useRouter();

     const initialForm = {
       name: "",
       lastName: "",
       phonePersonal: "",
       age: "",
       socialNetwork: "",
       picture: "",
       email: "",
       password: "",
     };
    const [client, actualizarState, reset] = useForm(initialForm);

    const handlerSubmit = (e) => {
      e.preventDefault();
      client.idRole
      console.log(client);
     clienteAxios
       .post("/client", client)
       .then((respuesta) => {
         console.log(respuesta);
         router.push("/");
         //  document.querySelector("#form").reset();
       })
       .catch((err) => {
         console.log(err);
       });
    };



 return (
   <Layout title="Login">
     <form id='form' className={classes.form} onSubmit={handlerSubmit}>
       <Typography component="h1" variant="h1">
         Register
       </Typography>
       <List>
         <ListItem>
           <TextField
             variant="outlined"
             fullWidth
             id="name"
             label="name"
             name="name"
             inputProps={{ type: "text" }}
             onChange={actualizarState}
           ></TextField>
         </ListItem>
         <ListItem>
           <TextField
             variant="outlined"
             fullWidth
             id="lastName"
             label="last name"
             name="lastName"
             inputProps={{ type: "text" }}
             onChange={actualizarState}
           ></TextField>
         </ListItem>
         <ListItem>
           <TextField
             variant="outlined"
             fullWidth
             id="phonePersonal"
             label="personal phone"
             name="phonePersonal"
             inputProps={{ type: "tel" }}
             onChange={actualizarState}
           ></TextField>
         </ListItem>
         <ListItem>
           <TextField
             variant="outlined"
             fullWidth
             id="age"
             label="Age"
             name="age"
             inputProps={{ type: "text" }}
             onChange={actualizarState}
           ></TextField>
         </ListItem>
         <ListItem>
           <TextField
             variant="outlined"
             fullWidth
             id="socialNetwork"
             label="social network"
             name="socialNetwork"
             inputProps={{ type: "text" }}
             onChange={actualizarState}
           ></TextField>
         </ListItem>
         <ListItem>
           <TextField
             variant="outlined"
             fullWidth
             id="picture"
             label="picture"
             name="picture"
             inputProps={{ type: "text" }}
             onChange={actualizarState}
           ></TextField>
         </ListItem>
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
             Register
           </Button>
         </ListItem>
         <ListItem>
           Already have an account? &nbsp;
           <NextLink href="/login" passHref>
             <Link>Login</Link>
           </NextLink>
         </ListItem>
       </List>
     </form>
   </Layout>
 );
}
