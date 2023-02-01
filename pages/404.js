import Head from "next/head";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Container from "../components/ui/Container";
import classes from "../styles/Home.module.scss";

export default function Error(props) {
  return (
    <>
      <Head>
        <title>Page Not Found | Brandon Bing Ng </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header disabled={true} />
      <div className={classes.error}>
        <Container>
          <h1>404</h1>
          <h4>Page Not Found</h4>
        </Container>
      </div>
      <Footer />
    </>
  );
}
