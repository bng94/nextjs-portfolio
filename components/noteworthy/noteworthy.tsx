"use client";
import { useEffect, useRef } from "react";
import styles from "./Noteworthy.module.scss";
import usePrefersReducedMotion from "hooks/usePrefersReducedMotion";
import { srConfig } from "@utils/srConfig";
import Container from "@components/ui/container";
import Title from "@components/ui/title";

interface NoteworthyProps {
  data: {
    title: string;
    description: string;
    codeLink: string;
    tags: string[];
  }[];
}

const Noteworthy = ({ data }: NoteworthyProps) => {
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
    <div className={styles.noteworthy}>
      <Container>
        <Title reactRef={revealContainer}>Noteworthy Projects</Title>
        <div className={styles.noteworthyContainer}>
          {data?.map((project, i) => {
            return (
              <div
                key={i}
                className={styles.noteworthyProject}
                ref={(el) => (revealProjects.current[i] = el)}
              >
                <h2>{project.title}</h2>
                <a href={project.codeLink}>
                  <p>{project.description}</p>
                </a>
                <div className={styles.techTags}>
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
};

export default Noteworthy;
