import Link from "next/link";
import styles from "./Footer.module.scss";
import { FULL_NAME } from "@utils/variables";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="https://github.com/bng94/nextjs-portfolio" target="_blank">
        <div>Developed using NextJS and MongoDB</div>
        <div>
          &copy; 2022 - {new Date().getFullYear()} {FULL_NAME}
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
