import { FULL_NAME } from "../constants/variables";
import Container from "../ui/Container";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";
import classes from "./About.module.scss";

/**
 *
 * @param {Object} props
 * @param {String} props.src Profile Image Source
 * @param {Array<String>} props.aboutInfo Array of String of Bio Info
 * @param {Array<String>} props.technologies Array of String of Technologies currently using
 * @returns
 */
function About(props) {
  const myLoader = ({ src }) => {
    return src;
  };

  return (
    <div id="about" className={classes.about}>
      <Container>
        <div>
          <Title>About Me</Title>
          <Subtitle classes={classes.subtitle}>{FULL_NAME}</Subtitle>
        </div>
        <div className={classes.aboutContainer}>
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
