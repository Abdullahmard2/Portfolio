import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, description, imageSrc, liveUrl }) => {

  return (
    <VStack
    zIndex={2}
      align="start"
      spacing={4}
      bg="transparent"
      p={0}
      transition="transform 0.4s ease"
      _hover={{ transform: "translateY(-6px)" }}
    >
      {/* Image */}
      {liveUrl ? (
  <a
    href={liveUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      zIndex={3}
      src={imageSrc}
      alt={title}
      maxW={{ base: "100%", md: "600px" }}
      borderRadius="2xl"
      boxShadow="12px 12px 12px rgba(0.9, 0, 0, 0.9)"
      objectFit="cover"
      transition="transform 0.4s ease"
      _hover={{ transform: "scale(1.04)" }}
    />
  </a>
) : (
  <Link to={`/projects/${id}`}>
    <Image
      zIndex={3}
      src={imageSrc}
      alt={title}
      maxW={{ base: "100%", md: "600px" }}
      borderRadius="2xl"
      boxShadow="12px 12px 12px rgba(0.9, 0, 0, 0.9)"
      objectFit="cover"
      transition="transform 0.4s ease"
      _hover={{ transform: "scale(1.04)" }}
    />
  </Link>
)}


      {/* Text-Project */}
      <VStack align="start" spacing={1}>
        <Text
        zIndex={3}
          fontSize="4xl"
          sx={{
    textShadow: "6px 6px 15px rgba(2, 0, 0, 0.6)"
  }}
          letterSpacing="widest"
          textTransform="uppercase"
          color="gray.400"
        >
          Project
        </Text>
        <Heading zIndex={3} size="md" fontWeight="semibold">
          {title}
        </Heading>

        <Text
        zIndex={3} fontSize="sm" color="gray.300" maxW="420px">
          {description}
        </Text>
      </VStack>
    </VStack>
  );
};

export default Card;
