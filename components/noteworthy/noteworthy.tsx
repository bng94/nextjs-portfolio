"use client";
import { useEffect, useRef } from "react";
import styles from "./Noteworthy.module.scss";
import usePrefersReducedMotion from "hooks/usePrefersReducedMotion";
import { srConfig } from "@utils/srConfig";
import Container from "@components/ui/container";
import Title from "@components/ui/title";
import { NoteworthyProject } from "types";

interface NoteworthyProps {
  data: NoteworthyProject[];
}

const Noteworthy = ({ data }: NoteworthyProps) => {
  const revealContainer = useRef(null);
  const revealProjects = useRef<Array<HTMLDivElement | null>>([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    async function animate() {
      if (revealContainer.current) {
        const ScrollReveal = (await import("scrollreveal")).default;
        ScrollReveal().reveal(revealContainer.current, srConfig());
        revealProjects.current.forEach((ref, i) => {
          if (ref) {
            ScrollReveal().reveal(ref, srConfig((i + 1) * 250));
          }
        });
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
                ref={(el) => {
                  revealProjects.current[i] = el;
                }}
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
