import About from "@components/about/about";
import Contact from "@components/contact/contact";
import Experiences from "@components/experiences/experiences";
import HeroSection from "@components/hero-section/hero-section";
import Footer from "@components/layout/footer";
import Header from "@components/layout/header";
import Noteworthy from "@components/noteworthy/noteworthy";
import Projects from "@components/projects/projects";
import PORTFOLIO from "@config/data";

const Page = async () => {
  const data = PORTFOLIO.data;

  return (
    <div>
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
    </div>
  );
};

export default Page;
