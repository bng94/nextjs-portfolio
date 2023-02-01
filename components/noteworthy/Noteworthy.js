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
  return (
    <div className={classes.noteworthy}>
      <Container>
        <Title>Noteworthy Projects</Title>
        <div className={classes.noteworthyContainer}>
          {props.data?.map((project, i) => {
            return (
              <div key={i} className={classes.noteworthyProject}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
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
