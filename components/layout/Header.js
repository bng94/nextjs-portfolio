import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FULL_NAME, LINKEDIN_URL, GITHUB_URL } from "../../utils/variables";
import classes from "./Header.module.scss";

/**
 *
 * @param {Object} props
 * @param {Boolean} props.disabled Only true in error pages
 * @returns
 */
function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  //if passed initial viewport height when scrolling
  const [vpHeight, setVpHeight] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
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

  const burgerClickedHandler = (e) => {
    setMenuOpen((prevState) => !prevState);
  };

  const onLinkClicked = (e) => setMenuOpen(false);

  return (
    <header className={classes.header}>
      <nav
        className={`${classes.navbar} ${vpHeight ? classes.navbarFixed : ""}`}
      >
        <div className={classes.navBarContainer}>
          <div className={classes.mainNav}>
            <div className={classes.logo}>
              <Link href="/" onClick={onLinkClicked}>
                {FULL_NAME}
              </Link>
            </div>
            <div
              className={`${classes.burger} ${menuOpen ? classes.toggle : ""}`}
              onClick={burgerClickedHandler}
            >
              <div className={classes.line1}></div>
              <div className={classes.line2}></div>
              <div className={classes.line3}></div>
            </div>
          </div>
          <ul
            className={`${classes.navList} ${menuOpen ? classes.visible : ""}`}
          >
            <li className={classes.navItem}>
              <Link
                className={classes.navLink}
                href={props.disabled ? "/" : "#about"}
                onClick={onLinkClicked}
              >
                About
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link
                className={classes.navLink}
                href={props.disabled ? "/" : "#experiences"}
                onClick={onLinkClicked}
              >
                Experiences
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link
                className={classes.navLink}
                href={props.disabled ? "/" : "#projects"}
                onClick={onLinkClicked}
              >
                Projects
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link
                className={classes.navLink}
                href={props.disabled ? "/" : "#contact"}
                onClick={onLinkClicked}
              >
                Contact
              </Link>
            </li>
            {menuOpen && (
              <>
                <div className={classes.socialLinks}>
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
}

export default Header;
