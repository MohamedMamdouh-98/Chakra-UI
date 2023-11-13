import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <div>
      <Container maxW={"960px"} py={20}>
        <Heading>Mohamed Mamdouh</Heading>
        <Text ms="10px">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae,
          dolores.
        </Text>
        <Button
          my={10}
          _hover={{
            bg: "green.200",
          }}
        >
          test
        </Button>
        <Box py={5} px={10} bg={"orange"}>
            <Text>Lorem ipsum dolor sit amet.</Text>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
