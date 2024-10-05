import { useEffect, useRef, useState } from "react";
import Container from "../ui/Container";
import Title from "../ui/Title";
import classes from "./Experiences.module.scss";
import { MONTHS_ABBREVIATIONS } from "../../utils/variables.js";
import Link from "next/link";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import { srConfig } from "../../utils/srConfig";

/**
 *
 * @param {Object} props
 * @param {Array<Object>} data
 * @returns
 */
function Experiences(props) {
  const [activeTab, setActiveTab] = useState(0);
  const data = props.experiencesData.sort(
    (a, b) => new Date(b.startDate) - new Date(a.startDate)
  );
  const revealContainer = useRef(null);
  const revealContainer2 = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleActiveTabClicked = (e, i) => {
    setActiveTab(i);
  };

  useEffect(() => {
    setActiveTab(0);
    if (prefersReducedMotion) {
      return;
    }
    async function animate() {
      if (revealContainer.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(revealContainer.current, srConfig());
        sr().reveal(revealContainer2.current, srConfig(350));
      }
    }
    animate();
  }, []);

  return (
    <div id="experiences" className={classes.experiences}>
      <Container>
        <Title reactRef={revealContainer}>Experiences</Title>
        <div>
          <div className={classes.mainContainer} ref={revealContainer2}>
            <div className={classes.tabsContainer}>
              {data?.map((experience, i) => {
                return (
                  <button
                    key={i}
                    tabIndex={i}
                    className={`${classes.tabButton} ${
                      activeTab === i
                        ? `${classes.tabButton} ${classes.activeButton}`
                        : ""
                    }`}
                    onClick={(e) => handleActiveTabClicked(e, i)}
                  >
                    <span>{experience.company}</span>
                  </button>
                );
              })}
            </div>
            <div className={classes.tabContentContainer}>
              {data?.map((experience, i) => {
                if (!experience.startDate) return;

                const styleClasses =
                  activeTab === i
                    ? `${classes.tabContent} ${classes.active}`
                    : classes.tabContent;

                const startDate = new Date(experience.startDate);
                const start_date =
                  MONTHS_ABBREVIATIONS[startDate.getMonth()] +
                  " " +
                  startDate.getFullYear();

                let end_date = "Present";
                if (experience.endDate) {
                  const endDate = new Date(experience.endDate);
                  end_date =
                    MONTHS_ABBREVIATIONS[endDate.getMonth()] +
                    " " +
                    endDate.getFullYear();
                }

                return (
                  <div className={styleClasses} key={i}>
                    <h3>
                      <span>{experience.title} </span> @{" "}
                      <span className={classes.company}>
                        <Link
                          href={experience.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {experience.company}
                        </Link>
                      </span>
                    </h3>
                    <p className={classes.range}>
                      {start_date !== end_date
                        ? `${start_date} - ${end_date}`
                        : start_date === end_date
                        ? start_date
                        : end_date}
                    </p>
                    <div>
                      <ul>
                        {experience.description.map((desc, index) => (
                          <li key={index}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Experiences;
