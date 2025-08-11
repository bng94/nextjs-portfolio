"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { FULL_NAME, GITHUB_URL, LINKEDIN_URL } from "@utils/variables";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface HeaderProps {
  disableLinks?: boolean;
}

const Header = ({ disableLinks = false }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [vpHeight, setVpHeight] = useState<boolean>(false);
  const [scrollTop, setScrollTop] = useState<number>(0);
  useEffect(() => {
    const onScroll = (e: Event) => {
      setScrollTop((e.target as Document).documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    if (window.scrollY > window.innerHeight * 0.87) {
      setVpHeight(true);
    } else if (window.scrollY < window.innerHeight) {
      setVpHeight(false);
      setMenuOpen(false);
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const burgerClickedHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setMenuOpen((prevState) => !prevState);
  };

  const onLinkClicked = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMenuOpen(false);
  };
  return (
    <header className={styles.header}>
      <nav className={`${styles.navbar} ${vpHeight ? styles.navbarFixed : ""}`}>
        <div className={styles.navBarContainer}>
          <div className={styles.mainNav}>
            <div className={styles.logo}>
              <Link href="/" onClick={onLinkClicked}>
                {FULL_NAME}
              </Link>
            </div>
            <div
              className={`${styles.burger} ${menuOpen ? styles.toggle : ""}`}
              onClick={burgerClickedHandler}
            >
              <div className={styles.line1}></div>
              <div className={styles.line2}></div>
              <div className={styles.line3}></div>
            </div>
          </div>
          <ul className={`${styles.navList} ${menuOpen ? styles.visible : ""}`}>
            <li className={styles.navItem}>
              <Link
                className={styles.navLink}
                href={disableLinks ? "/" : "#about"}
                onClick={onLinkClicked}
              >
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                className={styles.navLink}
                href={disableLinks ? "/" : "#experiences"}
                onClick={onLinkClicked}
              >
                Experiences
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                className={styles.navLink}
                href={disableLinks ? "/" : "#projects"}
                onClick={onLinkClicked}
              >
                Projects
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                className={styles.navLink}
                href={disableLinks ? "/" : "#contact"}
                onClick={onLinkClicked}
              >
                Contact
              </Link>
            </li>
            {menuOpen && (
              <>
                <div className={styles.socialLinks}>
                  <Link
                    className="linkedInColor"
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </Link>
                  <Link
                    className="githubColor"
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </Link>
                </div>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
