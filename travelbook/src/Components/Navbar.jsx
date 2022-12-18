import React from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-around"
        w="100%"
        m="auto"
        h="80px"
        textAlign="center"
        alignItems="center"
        bg="#00253c"
        color="#fff"
      >
        <Box
          display="flex"
          justify-content="space-between"
          gap="15px"
          // border="1px solid white"
          alignItems="center"
        >
          <Box>
            <RouterLink to="/">
              <Image
                src="https://wondrous-semolina-9847dc.netlify.app/img/main-logo.png"
                alt="logo"
                w="150px"
                bgColor="#00253c"
              />
            </RouterLink>
          </Box>
          <Box>MENU</Box>
        </Box>
        <Box display="flex" justify-content="space-around" gap="25px">
          <Box _hover={{ color: "#00b1ff" }} cursor="pointer">
            List Your Property
          </Box>
          <Box _hover={{ color: "#00b1ff" }} cursor="pointer">
            {" "}
            Support
          </Box>
          <Box _hover={{ color: "#00b1ff" }} cursor="pointer">
            Trips
          </Box>
          <RouterLink to="/login">
            <Box _hover={{ color: "#00b1ff" }} cursor="pointer">
              Login
            </Box>
          </RouterLink>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
