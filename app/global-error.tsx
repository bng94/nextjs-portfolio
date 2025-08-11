"use client";
import { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Header from "@components/layout/header";
import Container from "@components/ui/container";
import Footer from "@components/layout/footer";
import { Metadata } from "next";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error:", error);
  }, [error]);
  return (
    <>
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
