"use client";
import Container from "@components/ui/container";
import styles from "./HeroSection.module.scss";
import { TypeAnimation } from "react-type-animation";
import {
  FULL_NAME,
  GITHUB_URL,
  GRADUATE_DEGREE,
  LINKEDIN_URL,
  LOCATION,
  UNDERGRADUATE_DEGREE,
} from "@utils/variables";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface HeroSectionProps {
  role: string;
}

const HeroSection = ({ role }: HeroSectionProps) => {
  return (
    <>
      <div className={styles.heroSection}>
        <Container>
          <h1>{FULL_NAME}</h1>
          <TypeAnimation
            sequence={[
              role,
              1150,
              GRADUATE_DEGREE,
              1150,
              UNDERGRADUATE_DEGREE,
              1150,
            ]}
            speed={55}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
          />
          <h4>Resides in {LOCATION}</h4>
          <a href="#about">Learn More</a>
        </Container>
      </div>
      <div className={styles.quickLinks}>
        <Link href={GITHUB_URL} target="_blank">
          <FaGithub />
        </Link>
        <Link href={LINKEDIN_URL} target="_blank">
          <FaLinkedin />
        </Link>
      </div>
    </>
  );
};

export default HeroSection;
