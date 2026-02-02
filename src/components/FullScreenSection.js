import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, ...props }) => {
  return (
    <VStack
      minH="100vh"
      w="100%"
      color="white"
      px={{ base: 4, md: 0 }}
      {...props}
    >
      {children}
    </VStack>
  );
};

export default FullScreenSection;
