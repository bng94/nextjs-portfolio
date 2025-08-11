"use client";

import { useEffect, useRef } from "react";
import styles from "./Contact.module.scss";
import Subtitle from "@components/ui/subtitle";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from "@utils/variables";
import Container from "@components/ui/container";
import Title from "@components/ui/title";
import { srConfig } from "@utils/srConfig";
import usePrefersReducedMotion from "hooks/usePrefersReducedMotion";

const Contact = () => {
  const revealContainer = useRef(null);
  const revealContainer2 = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    async function animate() {
      if (revealContainer.current && revealContainer2.current) {
        const ScrollReveal = (await import("scrollreveal")).default;
        ScrollReveal().reveal(revealContainer.current, srConfig());
        ScrollReveal().reveal(revealContainer2.current, srConfig(300));
      }
    }
    animate();
  }, []);

  return (
    <div id="contact" className={styles.contact}>
      <Container>
        <Title reactRef={revealContainer}>Contact</Title>
        <div className={styles.wrapper} ref={revealContainer2}>
          <div className={styles.detail}>
            <Subtitle>Get in touch</Subtitle>
            <p>
              My inbox is always open. I am currently not looking for freelance
              opportunities, but whether you are interested in working together,
              you have a question or just want to say hi, I`ll try my best to
              get back to you!
            </p>
            <div>
              <a href={"mailto:" + EMAIL_ADDRESS}>
                <FaEnvelope /> <span>Email</span>
              </a>
              <Link
                className="linkedInColor"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> <span>Linkedin</span>
              </Link>
              <Link
                className="githubColor"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> <span>GitHub</span>
              </Link>
            </div>
          </div>
          <div className={styles.imgWrapper}>
            <img src="/static/m_chances.svg" alt="contact" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
