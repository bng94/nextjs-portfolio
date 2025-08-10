import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "@components/layout/header";
import Container from "@components/ui/container";
import Footer from "@components/layout/footer";

export default function Error500() {
  return (
    <>
      <Head>
        <title>Brandon Bing Ng | Internal Server Error</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header disableLinks={true} />
      <div className={styles.error}>
        <Container>
          <h1>500</h1>
          <h4>Internal Server Error</h4>
        </Container>
      </div>
      <Footer />
    </>
  );
}
