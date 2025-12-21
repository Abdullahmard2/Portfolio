import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const LandingSection = () => (
  <FullScreenSection
    id="LandingSection"
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    background="
      radial-gradient(circle at 50% 50%, #15292dff 0%, transparent 80%),
      #000000ff"
  >
    <VStack spacing={4} align="center" color="white">
      <Avatar
        name="Abdullah"
        src={require("../images/Profile.jpg")}
        size="xl"
      />
      <Heading as="h1">Hello, I am Abdullah!</Heading>
      <Text fontSize="xl" textAlign="center">
        A frontend developer and an architect
      </Text>
      <Text fontSize="lg" textAlign="center">
        Specialised in React and urban planning
      </Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
