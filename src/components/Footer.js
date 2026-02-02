import React from "react";
import { Box, Flex, HStack } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (id) => {
    if (location.pathname === "/") {
      window.location.hash = id;
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <Box
      background="
        radial-gradient(circle at 50% 50%, #15292dff 0%, transparent 60%),
        #000000ff
      "
    >
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >

          <p>Copyright • © 2026</p>

          <HStack spacing={6}>
            <button onClick={() => goToSection("LandingSection")}>
              Home
            </button>

            <button onClick={() => goToSection("projects-section")}>
              Projects
            </button>

            <button onClick={() => goToSection("contactme-section")}>
              Contact me
            </button>
          </HStack>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;