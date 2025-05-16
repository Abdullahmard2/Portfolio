import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

// Card component
const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={4}
      align="stretch"
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      overflow="hidden"
      _hover={{ transform: "scale(1.05)", boxShadow: "lg" }} // Animation on hover
      transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
    >
      
      <Image
        src={imageSrc}
        alt={title}
        boxSize="100%"
        objectFit="cover"
        _hover={{ transform: "scale(1.2)" }} // Subtle image zoom on hover
        transition="transform 0.2s ease-in-out"
      />

     
      <VStack spacing={2} p={2} align="start">
       
        <Heading size="md" fontWeight="semibold">
          {title}
        </Heading>

      
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>

      
        <HStack as="a" href="#" spacing={2} align="center" color="teal.500">
          <Text fontSize="sm" fontWeight="bold">
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;