import { useEffect, useRef } from "react";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import { srConfig } from "../../utils/srConfig";
import Container from "../ui/Container";
import Title from "../ui/Title";
import classes from "./Noteworthy.module.scss";

/**
 *
 * @param {Object} props
 * @param {Array} props.data data for noteworthy projects
 * @returns
 */
function Noteworthy(props) {
  const revealContainer = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    async function animate() {
      if (revealContainer.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(revealContainer.current, srConfig());
        revealProjects.current.forEach((ref, i) =>
          sr().reveal(ref, srConfig((i + 1) * 250))
        );
      }
    }
    animate();
  }, [prefersReducedMotion]);
  return (
    <div className={classes.noteworthy}>
      <Container>
        <Title reactRef={revealContainer}>Noteworthy Projects</Title>
        <div className={classes.noteworthyContainer}>
          {props.data?.map((project, i) => {
            return (
              <div
                key={i}
                className={classes.noteworthyProject}
                ref={(el) => (revealProjects.current[i] = el)}
              >
                <h2>{project.title}</h2>
                <a href={project.codeLink}>
                  <p>{project.description}</p>
                </a>
                <div className={classes.techTags}>
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Noteworthy;
