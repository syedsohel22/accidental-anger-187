import React from "react";
import { Box, Image } from "@chakra-ui/react";
const ThreeCard = () => {
  return (
    <div>
      <Box
        display="flex"
        w="80%"
        h="250px"
        alignItems="center"
        justify-content="space-between"
        m="auto"
        cursor="pointer"
        gap="20px"
      >
        <Box>
          <Image
            src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_TravelAsYouAre_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
            alt="img-1"
            w="100%"
          />
        </Box>
        <Box>
          <Image
            src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_Rewards_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
            alt="img-2"
          />
        </Box>
        <Box>
          <Image
            src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_InsiderPrices_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
            alt="img-3"
          />
        </Box>
      </Box>
    </div>
  );
};

export default ThreeCard;
