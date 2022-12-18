import React from "react";
import { Spinner, Box, Image, Flex } from "@chakra-ui/react";
const Loading = () => {
  return (
    <div>
      <Flex w="20%" m="auto" direction="column" alignItems="center" justifyContent="center">
        <Image
          src="https://wondrous-semolina-9847dc.netlify.app/img/WhatsApp%20Image%202022-12-18%20at%2020.50.57.jpg"
          alt="logo"
          w="200px"
        />
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    </div>
  );
};

export default Loading;
