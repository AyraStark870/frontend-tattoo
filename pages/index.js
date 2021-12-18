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
import {CRMContext, CRMProvider} from '../utils/CRMContext'
import {useContext} from "react";

export default function Home() {
  const classes = useStyles();
  const [auth, guardarAuth] = useContext(CRMContext);
  console.log(auth);

  // const { tattoos } = props;
  return (
    <Layout>
      {/* <div>
        <h1>Our best tattos</h1>

        <Grid container spacing={3}>
          {tattoos.map((product) => (
            <Grid item md={4} key={product.authorName}>
              <Card>
                <NextLink href={`/product/${product.description}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.description}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{product.category}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>${product.description}</Typography>
                  <Button size="small" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div> */}
    </Layout>
  );
}

/*
export async function getServerSideProps() {
  const res = await clienteAxios("/admin");
  const resJSON = await res.json();
  console.log(resJSON);
  //return { users: resJON.data };
  // return {
  //   props: {
  //     tattoos: tattoos.map(db.convertDocToObj),
  //   },
  // };
}
*/