import Head from "next/head";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import { FULL_NAME } from "../components/constants/variables";
import Noteworthy from "../components/noteworthy/Noteworthy";
import Contact from "../components/contact/Contact";
import HeroSection from "../components/hero-section/HeroSection";
import Experiences from "../components/experiences/Experiences";
import { loadData } from "../lib/load-data";
import { useRouter } from "next/router";
import Error500 from "./500.js";

export default function Home(props) {
  const router = useRouter();
  if (!router.isFallback && !props.data) {
    return <Error500 />;
  }
  return (
    <>
      <Head>
        <title>{FULL_NAME}</title>
        <meta
          name="description"
          content="Brandon Bing Ng is a software engineer with an Master of Science Degree in Software Engineering and an Bachelor of Science degree in Computer Science who specializes in developing websites."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroSection role={props.data.role} />
      <About
        src={props.data.src}
        aboutInfo={props.data.aboutInfo}
        technologies={props.data.technologies}
      />
      <Experiences
        experiencesData={props.data.experiences.sort(
          (a, b) => new Date(b.endDate) - new Date(a.endDate)
        )}
      />
      <Projects projects={props.data.projects} />
      <Noteworthy data={props.data.noteworthy} />
      <Contact />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  try {
    const data = await loadData();

    return {
      props: {
        data: data.data,
      },
      revalidate: 1,
    };
  } catch (e) {
    return {
      props: {
        error: true,
      },
    };
  }
}
