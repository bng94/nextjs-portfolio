import Link from "next/link";
import { FULL_NAME } from "../constants/variables";
import classes from "./Footer.module.scss";

function Footer(props) {
  return (
    <footer className={classes.footer}>
      <Link href="https://github.com/bng94/nextjs-portfolio" target="_blank">
        <div>Developed using NextJS and MongoDB</div>
        <div>
          &copy; 2022 - {new Date().getFullYear()} {FULL_NAME}
        </div>
      </Link>
    </footer>
  );
}

export default Footer;
