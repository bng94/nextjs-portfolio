import Head from "next/head";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Container from "../components/ui/Container";
import classes from "../styles/Home.module.scss";

export default function Error500(props) {
  return (
    <>
      <Head>
        <title>Brandon Bing Ng | Internal Server Error</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header disabled={true} />
      <div className={classes.error}>
        <Container>
          <h1>500</h1>
          <h4>Internal Server Error</h4>
        </Container>
      </div>
      <Footer />
    </>
  );
}
