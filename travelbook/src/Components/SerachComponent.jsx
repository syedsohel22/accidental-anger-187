import React from "react";
import { Box, Input } from "@chakra-ui/react";
const SerachComponent = () => {
  return (
    <div>
      <Box
        bgImage="url('https://forever.travel-assets.com/flex/flexmanager/images/2021/11/01/ORB_Storefront_6_imgB_1400x600_20211028.jpg?impolicy=fcrop&w=900&h=225&q=mediumHigh')"
        bgPosition="center"
        bgRepeat="no-repeat"
        w="100%"
        h="380px"
        bgSize="100%"
      >
        <Box
          bgPosition="center"
          bgRepeat="no-repeat"
          w="70%"
          bg="white"
          p="10px"
          display="flex"
          alignSelf="center"
          justifyContent="center"
          ml="200px"
          // pt="200px"
        >
          <Input
            placeholder="Going to "
            size="md"
            w="80%"
            align={"center"}
            justify={"center"}
          />
          <Input
            placeholder="Select Check-in Date"
            size="md"
            type="date"
            w="80%"
            align={"center"}
            justify={"center"}
          />
          <Input
            placeholder="Select Check-out Date"
            size="md"
            type="date"
            w="80%"
            align={"center"}
            justify={"center"}
          />
        </Box>
      </Box>
    </div>
  );
};

export default SerachComponent;
