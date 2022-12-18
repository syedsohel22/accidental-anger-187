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
            <Image
              src="https://drive.google.com/uc?export=view&id=1LKrXNSqB-UFo-fiwbfcX_nKtUmy9hMFf"
              alt="logo"
              w="150px"
            />
          </Box>
          <Box>MENU</Box>
        </Box>
        <Box display="flex" justify-content="space-around" gap="25px">
          <Box _hover={{ color: "grey" }} cursor="pointer">
            List Your Property
          </Box>
          <Box>Support</Box>
          <Box>Trips</Box>
          <RouterLink to="/login">
            <Box>Login</Box>
          </RouterLink>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
