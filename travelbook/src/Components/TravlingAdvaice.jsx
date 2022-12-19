import React from "react";
import { Stack, Image } from "@chakra-ui/react";
const TravlingAdvaice = () => {
  return (
    <div>
    
      <Stack
        direction="row"
        justifyContent="space-between"
        w="80%"
        m="auto"
        mb="10px"
        mt="10px"
        alignItems="center"
      >
        <Image
          src="https://neon-beijinho-b67b97.netlify.app/img/national%20park.png"
          alt="1"
          w="45%"
        />

        <Image
          src="https://neon-beijinho-b67b97.netlify.app/img/road%20trip.png"
          alt="w"
          w="45%"
        />
      </Stack>
      <Image
        src="https://neon-beijinho-b67b97.netlify.app/img/qr.png"
        alt="w"
        w="80%"
        m="auto"
        mb="10px"
        mt="10px"
      />
    </div>
  );
};

export default TravlingAdvaice;
