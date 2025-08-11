"use client";
import Container from "@components/ui/container";
import styles from "./Projects.module.scss";
import { useEffect, useRef } from "react";
import usePrefersReducedMotion from "@hooks/usePrefersReducedMotion";
import { srConfig } from "../../utils/srConfig";
import Title from "@components/ui/title";
import Link from "next/link";
import Subtitle from "@components/ui/subtitle";
import { FaGithub, FaLink } from "react-icons/fa";
import { Project } from "types";

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
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
            ScrollReveal().reveal(ref, srConfig((i + 1) * 150));
          }
        });
      }
    }
    animate();
  }, []);
  return (
    <div id="projects" className={styles.projects}>
      <Container>
        <Title reactRef={revealContainer}>Projects</Title>
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className={styles.projectContainer}
              ref={(el) => {
                revealProjects.current[i] = el;
              }}
            >
              <Link
                href={project.liveLink}
                className={styles.imageContainer}
                target="_blank"
                rel="noreferrer"
              >
                <img src={project.image} alt={project.title} />
              </Link>
              <div className={styles.description}>
                <Subtitle>{project.title}</Subtitle>
                <div className={styles.techTags}>
                  {project.tags?.map((tag, i) => {
                    return <span key={i}>{tag}</span>;
                  })}
                </div>
                <p>{project.description}</p>
                <div className={styles.link}>
                  <Link
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </Link>
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLink />
                    <span>View Project</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default Projects;
