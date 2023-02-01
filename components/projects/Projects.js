import { FaGithub, FaLink } from "react-icons/fa";
import Link from "next/link";
import Container from "../ui/Container";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";
import classes from "./Projects.module.scss";
import Image from "next/image";

function Projects(props) {
  return (
    <div id="projects" className={classes.projects}>
      <Container>
        <Title>Projects</Title>
        {props.projects.map((project, i) => {
          return (
            <div key={i} className={classes.projectContainer}>
              <Link
                href={project.liveLink}
                className={classes.imageContainer}
                target="_blank"
                rel="noreferrer"
              >
                <img src={project.image} alt={project.title} />
              </Link>
              <div className={classes.description}>
                <Subtitle>{project.title}</Subtitle>
                <div className={classes.techTags}>
                  {project.tags?.map((tag, i) => {
                    return <span key={i}>{tag}</span>;
                  })}
                </div>
                <p>{project.description}</p>
                <div className={classes.link}>
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
}

export default Projects;
