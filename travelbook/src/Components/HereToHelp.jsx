import React from "react";
import { Box, Heading } from "@chakra-ui/react";
const HereToHelp = () => {
  return (
    <div>
      <Heading m="auto" w="80%">
        Here to help keep you on the move
      </Heading>
      <Box
        w="80%"
        h="100px"
        m="auto"
        display="flex"
        justifyContent="space-between"
        align="center"
      >
        <Box border="1px" borderColor="gray.800" bgColor="#fff">
          Change or cancel a trip
        </Box>
        <Box border="1px" borderColor="gray.800">
          Use a Credit or Coupon
        </Box>
        <Box border="1px" borderColor="gray.800">
          Track your refund
        </Box>
      </Box>
    </div>
  );
};

export default HereToHelp;
