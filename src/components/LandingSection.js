
import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Abdullah!";
const bio1 = "A frontend developer and an architect";
const bio2 = "specialised in React and urban planning";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} align="center" color="white">
      <Avatar
        name="Abdullah"
        src="https://i.pravatar.cc/150?img=12"
        size="xl"
      />
      <Heading as="h1">{greeting}</Heading>
      <Text fontSize="xl" textAlign="center">
        {bio1}
      </Text>
      <Text fontSize="lg" textAlign="center">
        {bio2}
      </Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
