import * as React from "react";
import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({
  children,
  isDarkBackground,
  background,
  backgroundColor,
  ...rest

}) => {
  return (
    <VStack
      minH="100vh"
      width="100%"
      background={background}
      backgroundColor={backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      {...rest}
    >
      {children}

    </VStack>

  );
};

export default FullScreenSection;
