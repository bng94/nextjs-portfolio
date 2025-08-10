import About from "@components/about/about";
import Contact from "@components/contact/contact";
import Experiences from "@components/experiences/experiences";
import HeroSection from "@components/hero-section/hero-section";
import Footer from "@components/layout/footer";
import Header from "@components/layout/header";
import Noteworthy from "@components/noteworthy/noteworthy";
import Projects from "@components/projects/projects";
import axios from "axios";
import { SERVER_URL } from "config/config";
import { ProfileData } from "types";

const HomePage = ({ data }: { data: ProfileData }) => {
  return (
    <>
      <Header />
      <HeroSection role={data.role} />
      <About
        src={data.src}
        aboutInfo={data.aboutInfo}
        technologies={data.technologies}
      />
      <Experiences experiencesData={data.experiences} />
      <Projects projects={data.projects} />
      <Noteworthy data={data.noteworthy} />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  try {
    const response = await axios.get(`${SERVER_URL}/api/v1`);
    const data = response.data;

    return {
      props: {
        data: data.data,
      },
      revalidate: 1,
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        error: true,
      },
    };
  }
}
