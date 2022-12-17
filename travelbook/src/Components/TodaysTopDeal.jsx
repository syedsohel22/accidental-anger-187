import React from "react";
import { Image, Box } from "@chakra-ui/react";
const TodaysTopDeal = () => {
  return (
    <div>
      <div
        style={{ width: "80%", margin: "auto", height: "300px" }}
        overflow="hidden"
        // backgroundSize="100%"
        // backgroundRepeat="no-repeat"
      >
        <Image
          src="https://forever.travel-assets.com/flex/flexmanager/images/2020/12/03/ORB_Storefront_Deals_2740x1484-V1.jpg"
          alt="top-deals"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default TodaysTopDeal;
