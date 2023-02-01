import Head from "next/head";
import { FULL_NAME } from "../components/constants/variables";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
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
        <h1>500</h1>
        <h4>Internal Server Error</h4>
      </div>
      <Footer />
    </>
  );
}
