import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import {
  Grid,
  List,
  ListItem,
  Typography,
  Link,
  Button,
} from "@material-ui/core";
import NextLink from "next/link";
import useStyles from "../utils/styles";
import clienteAxios from "../axios";

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Image
            src="/images/tatoo.jpg"
            width={340}
            height={120}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={6} xs={12} className={classes.infoIndex}>
          <List>
            <ListItem>
              <Typography component="h5" variant="h5">
                Lorem ipsum dolor, sit amet consectetut.
              </Typography>
              <NextLink href="/contacto" passHref>
                <Link>
                  <Button variant="contained" color="primary">
                    Contactanos
                  </Button>
                </Link>
              </NextLink>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={6} xs={12}>
          <Image
            src="/images/tatoo.jpg"
            width={340}
            height={120}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={6} xs={12} mx={{ flexDirection: "column-reverse" }}>
          <Image
            src="/images/tatoo.jpg"
            width={340}
            height={120}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={6} xs={12} mx={{ flexDirection: "column-reverse" }}>
          <List>
            <ListItem>
              <Typography component="h5" variant="h5">
                Lorem ipsum dolor, sit amet consectetut.
              </Typography>
              <NextLink href="/contacto" passHref>
                <Link>
                  <Button variant="contained" color="primary">
                    contactanos
                  </Button>
                </Link>
              </NextLink>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Layout>
  );
}
export async function getServerSideProps() {
  const respuesta = await clienteAxios.get("/staff");
  const data = respuesta.data.listUser.users;
  console.log(data);
  return {
    props: {
      products: "jeee",
    },
  };
}
