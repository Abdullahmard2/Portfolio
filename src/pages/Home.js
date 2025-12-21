import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectsSection from "../components/ProjectsSection";
import LandingSection from "../components/LandingSection";
import ContactMeSection from "../components/ContactMeSection";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <LandingSection />
      <ProjectsSection />
      <ContactMeSection />
    </>
  );
}

export default Home;
