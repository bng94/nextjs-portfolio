"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Experiences.module.scss";
import usePrefersReducedMotion from "hooks/usePrefersReducedMotion";
import Container from "@components/ui/container";
import Title from "@components/ui/title";
import { MONTHS_ABBREVIATIONS } from "@utils/variables";
import { srConfig } from "@utils/srConfig";
import Link from "next/link";

interface ExperiencesProps {
  experiencesData: {
    title: string;
    company: string;
    url: string;
    startDate: string;
    endDate?: string;
    description: string[];
  }[];
}

const Experiences = ({ experiencesData }: ExperiencesProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const data = experiencesData.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
  const revealContainer = useRef(null);
  const revealContainer2 = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleActiveTabClicked = (i: number) => {
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
    <div id="experiences" className={styles.experiences}>
      <Container>
        <Title reactRef={revealContainer}>Experiences</Title>
        <div>
          <div className={styles.mainContainer} ref={revealContainer2}>
            <div className={styles.tabsContainer}>
              {data?.map((experience, i) => {
                return (
                  <button
                    key={i}
                    tabIndex={i}
                    className={`${styles.tabButton} ${
                      activeTab === i
                        ? `${styles.tabButton} ${styles.activeButton}`
                        : ""
                    }`}
                    onClick={(e) => handleActiveTabClicked(i)}
                  >
                    <span>{experience.company}</span>
                  </button>
                );
              })}
            </div>
            <div className={styles.tabContentContainer}>
              {data?.map((experience, i) => {
                if (!experience.startDate) return;

                const styleClasses =
                  activeTab === i
                    ? `${styles.tabContent} ${styles.active}`
                    : styles.tabContent;

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
                      <span className={styles.company}>
                        <Link
                          href={experience.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {experience.company}
                        </Link>
                      </span>
                    </h3>
                    <p className={styles.range}>
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
};

export default Experiences;
