import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import {
  GRADUATE_DEGREE,
  LOCATION,
  FULL_NAME,
  UNDERGRADUATE_DEGREE,
  GITHUB_URL,
  LINKEDIN_URL,
} from "../../utils/variables";
import Container from "../ui/Container";
import classes from "./HeroSection.module.scss";

function HeroSection({ role }) {
  return (
    <>
      <div className={classes.heroSection}>
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
            speed="55"
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
          />
          <h4>Resides in {LOCATION}</h4>
          <a href="#about">Learn More</a>
        </Container>
      </div>
      <div className={classes.quickLinks}>
        <Link href={GITHUB_URL} target="_blank">
          <FaGithub />
        </Link>
        <Link href={LINKEDIN_URL} target="_blank">
          <FaLinkedin />
        </Link>
      </div>
    </>
  );
}

export default HeroSection;
