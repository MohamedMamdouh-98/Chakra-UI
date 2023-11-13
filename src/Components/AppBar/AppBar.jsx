import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

const AppBar = () => {
  return (
    <Flex as="nav" p="10px" alignItems={"center"}>
      <Heading as="h1">Dogo Tasks</Heading>
      <Spacer />
      <HStack spacing={"10px"}>
        <Box bg={"gray.200"} p={"10px"}>
          M
        </Box>
        <Text>mohamed@gmail.com</Text>
        <Button
         _hover={{
          bg:"red.300"
         }}
         >Logout</Button>
      </HStack>
    </Flex>
  );
};

export default AppBar;
