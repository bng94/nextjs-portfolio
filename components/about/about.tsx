"use client";
import { useEffect, useRef } from "react";
import styles from "./About.module.scss";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import { srConfig } from "../../utils/srConfig";
import Container from "@components/ui/container";
import Subtitle from "@components/ui/subtitle";
import { FULL_NAME } from "@utils/variables";
import Title from "@components/ui/title";

interface AboutProps {
  src: string;
  aboutInfo: string[];
  technologies: string[];
}

const About = ({ src, aboutInfo, technologies }: AboutProps) => {
  const revealContainer = useRef(null);
  const revealContainer2 = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    async function animate() {
      if (revealContainer.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(revealContainer.current, srConfig());
        sr().reveal(revealContainer2.current, srConfig(300));
      }
    }
    animate();
  }, []);
  return (
    <div id="about" className={styles.about}>
      <Container>
        <div ref={revealContainer}>
          <Title>About Me</Title>
          <Subtitle className={styles.subtitle}>{FULL_NAME}</Subtitle>
        </div>
        <div className={styles.aboutContainer} ref={revealContainer2}>
          <div className={styles.imgContainer}>
            <img src={src} alt={FULL_NAME} />
          </div>
          <div>
            {aboutInfo?.map((data, i) => (
              <p key={i}>{data}</p>
            ))}
            <p>Here are a few technologies I`ve been working with recently:</p>
            <ul className={styles.technologiesList}>
              {technologies?.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
