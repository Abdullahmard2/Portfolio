import React, { useState } from "react";
import { Heading, HStack, Image, Text, VStack, IconButton, Grid, GridItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import FullScreenSection from "./FullScreenSection";


const projectsData = [
  {
    title: "Windmill",
    description: "A 3D project made with Cinema 4D of the windmill Meyers Mühle, Papenburg.",
     imageSrc: require("../images/Windmill.jpg"),
  },
  {
    title: "Community Hall for Students",
    description: "The community hall serves as a kind of interim station for students. Here, they are given the opportunity to use the time between daily activities",
    imageSrc: require("../images/BA_Abgabe.png"),
  },
  {
    title: "Residential Building in the City",
    description: "This residential building was designed as a block in the heart of the city to meet the needs of various types of families, while also addressing urban design requirements.",
    imageSrc: require("../images/Städtebau.jpg"),
  },
  {
    title: "Donut",
    description: "A classic beginner project in Blender, this 3D donut model demonstrates fundamental skills in modeling, texturing, and lighting.It demonstrates the ability to create simple yet visually impactful compositions.",
    imageSrc: require("../images/Donut.jpg"),
  },
  {
    title: "Monastery in the City",
    description: "Tailored to the needs of the nuns, this monastery was built in the heart of the city to meet their daily requirements, ensuring they don't have to leave frequently unless necessary.",
    imageSrc: require("../images/Kloster.jpg"),
  },
  {
    title: "Forest",
    description: "A simple Blender project featuring a cozy yet eerie atmosphere of a forest at night.",
    imageSrc: require("../images/Forest.png"),
  },
  
];

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={4}
      align="center"
      boxShadow="md"
      p={4}
      borderRadius="md"
      _hover={{ transform: "scale(1.05)", transition: "transform 0.2s ease" }}
      bg="white"
    >
      <Image src={imageSrc} alt={title} boxSize="600px" objectFit="cover" />
      <Heading size="md" textAlign="center">
        {title}
      </Heading>
      <Text textAlign="center">{description}</Text>
      <Text
        as="a"
        href="#"
        fontWeight="bold"
        color="blue.500"
        _hover={{ textDecoration: "underline" }}
      >
        Read More →
      </Text>
    </VStack>
  );
};

const ProjectCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const projectsPerPage = 4;
  const totalProjects = projectsData.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      
    }
  };

  const currentProjects = projectsData.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );
  <Grid templateColumns="repeat(2, 1fr)" gap={8}>
    
  {currentProjects.map((project, index) => (
    <GridItem key={index}>
      <Card {...project} />
    </GridItem>
  ))}
</Grid>

  return (
    <VStack spacing={8}>
       <Heading as="h1" id="projects-section"></Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
        {currentProjects.map((project, index) => (
          <GridItem key={index}>
            <Card {...project} />
          </GridItem>
        ))}
      </Grid>
      <HStack spacing={4}>
        <IconButton
          icon={<FontAwesomeIcon icon={faArrowLeft} />}
          onClick={handlePrevPage}
          isDisabled={currentPage === 0}
          aria-label="Previous"
        />
        <IconButton
          icon={<FontAwesomeIcon icon={faArrowRight} />}
          onClick={handleNextPage}
          isDisabled={currentPage === totalPages - 1}
          aria-label="Next"
        />
      </HStack>
    </VStack>
  );
};

export default ProjectCarousel;