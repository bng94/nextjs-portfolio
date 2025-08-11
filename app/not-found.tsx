import styles from "../styles/Home.module.scss";
import Header from "@components/layout/header";
import Container from "@components/ui/container";
import Footer from "@components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Brandon Bing Ng",
  description: "Sorry, the page you are looking for could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Error() {
  return (
    <>
      <Header disableLinks={true} />
      <div className={styles.error}>
        <Container>
          <h1>404</h1>
          <h4>Page Not Found</h4>
        </Container>
      </div>
      <Footer />
    </>
  );
}
