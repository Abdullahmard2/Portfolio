import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faDeviantart,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const socials = [
  { icon: faEnvelope, url: "mailto:abdullahmarduni@gmail.com" },
  { icon: faGithub, url: "https://github.com/Abdullahmard2" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/abdullah-almardoud-b31223240/" },
  { icon: faFacebook, url: "https://www.facebook.com/abdullah.mard" },
  { icon: faDeviantart, url: "https://www.deviantart.com/abdullahmard" },
];

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  // hide/show header
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setShowHeader(current < lastScrollY.current);
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSection = (id) => {

    if (location.pathname === "/") {
      window.location.hash = id;
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      transform={showHeader ? "translateY(0)" : "translateY(-200px)"}
      transition="transform 0.3s ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between">
          <HStack spacing={8}>
            {socials.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={s.icon} size="2x" />
              </a>
            ))}
          </HStack>

          <HStack spacing={8}>
            <button onClick={() => goToSection("LandingSection")}>Home</button>
            <button onClick={() => goToSection("projects-section")}>Projects</button>
            <button onClick={() => goToSection("contactme-section")}>Contact me</button>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
