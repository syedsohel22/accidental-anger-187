import React from "react";
import { Image, Box } from "@chakra-ui/react";
const TodaysTopDeal = () => {
  return (
    <div>
      <Box w="80%" m="auto" h="300px" overflow="hidden">
        <Image
          src="https://forever.travel-assets.com/flex/flexmanager/images/2020/12/03/ORB_Storefront_Deals_2740x1484-V1.jpg"
          alt="top-deals"
        />
      </Box>
    </div>
  );
};

export default TodaysTopDeal;
