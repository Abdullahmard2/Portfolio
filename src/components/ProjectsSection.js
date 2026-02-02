import React from "react";
import { Heading, VStack, Grid, GridItem } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import projectsData from "../data/projects";
import Card from "./Card";

const ProjectCarousel = () => {

  const leftPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const rightPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <FullScreenSection
    id="projects-section"
    isDarkBackground>
      <VStack
        spacing={16}
        background="
          radial-gradient(circle at 20% 30%, #12343b 0%, transparent 40%),
          radial-gradient(circle at 80% 70%, #050e10ff 0%, transparent 40%),
          #081a1f"
        minH="100vh"
        py={32}
        px={16}
        width="100%"

      >
        <VStack
          position="sticky"
          top="35vh"
          zIndex={0}
          pointerEvents="none"
          textAlign="center"
          spacing={2}
          style={{
    textShadow: "12px 12px 12px rgba(0.9, 0, 0, 0.9)"
  }}
        >
         <Heading
        fontSize={{ base: "3xl", md: "6xl" }}
        top={{ base: "10vh", md: "35vh" }}
        letterSpacing="widest"
        color="teal.400">
        PROJECT<br />HIGHLIGHTS
        </Heading>

        </VStack>

        <Heading as="h1" id="projects-section"></Heading>

        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
          gap={{ base: 12, md: 16 }}
          alignItems="center"
          width="100%"
          justifyItems="center"
        >
          {projectsData.map((project, index) => {
            const position = index % 2 === 0 ? 1 : 3;
            let rowPosition;
            if (position === 1) {
              rowPosition = leftPositions[index % leftPositions.length];
            } else {
              rowPosition = rightPositions[index % rightPositions.length];
            }

            return (
              <GridItem
  key={project.id}
  colStart={{ base: 1, md: position }}
  rowStart={{ base: "auto", md: rowPosition }}
  colSpan={1}
>

                <Card {...project} />
              </GridItem>
            );
          })}
        </Grid>
      </VStack>
    </FullScreenSection>
  );
};

export default ProjectCarousel;
