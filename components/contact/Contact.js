import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  LINKEDIN_URL,
  EMAIL_ADDRESS,
  GITHUB_URL,
} from "../constants/variables";
import Container from "../ui/Container";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";
import classes from "./Contact.module.scss";

function Contact() {
  return (
    <div id="contact" className={classes.contact}>
      <Container>
        <Title>Contact</Title>
        <div className={classes.wrapper}>
          <div className={classes.detail}>
            <Subtitle>Get in touch</Subtitle>
            <p>
              My inbox is always open. I am currently not looking for freelance
              opportunities, but whether you are interested in working together,
              you have a question or just want to say hi, I`ll try my best to
              get back to you!
            </p>
            <div>
              <a href={"mailto:" + EMAIL_ADDRESS}>
                <FaEnvelope /> <span>Email</span>
              </a>
              <Link
                className="linkedInColor"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> <span>Linkedin</span>
              </Link>
              <Link
                className="githubColor"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> <span>GitHub</span>
              </Link>
            </div>
          </div>
          <div className={classes.imgWrapper}>
            <img
              src="https://ngbrandon.com/images/m_chances.svg"
              alt="contact"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
