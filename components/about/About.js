import { useEffect, useRef } from "react";
import { FULL_NAME } from "../../utils/variables";
import Container from "../ui/Container";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";
import classes from "./About.module.scss";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import { srConfig } from "../../utils/srConfig";

/**
 *
 * @param {Object} props
 * @param {String} props.src Profile Image Source
 * @param {Array<String>} props.aboutInfo Array of String of Bio Info
 * @param {Array<String>} props.technologies Array of String of Technologies currently using
 * @returns
 */
function About(props) {
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
    <div id="about" className={classes.about}>
      <Container>
        <div ref={revealContainer}>
          <Title>About Me</Title>
          <Subtitle classes={classes.subtitle}>{FULL_NAME}</Subtitle>
        </div>
        <div className={classes.aboutContainer} ref={revealContainer2}>
          <div className={classes.imgContainer}>
            <img src={props.src} alt={FULL_NAME} />
          </div>
          <div>
            {props.aboutInfo?.map((data, i) => (
              <p key={i}>{data}</p>
            ))}
            <p>Here are a few technologies I`ve been working with recently:</p>
            <ul className={classes.technologiesList}>
              {props.technologies?.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
