import React from "react";
import { Image, Box, Heading } from "@chakra-ui/react";
const FeaturedOffers = () => {
  return (
    <div>
      <Heading      m="auto"
        w="80%">Featured offers</Heading>
      <Box
        display="flex"
        m="auto"
        w="80%"
        h="250px"
        gap="25px"
        cursor="pointer"
      >
        <Box>
          <Image
            src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_LastMinute_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh"
            alt="featured-offer-1"
          />
        </Box>
        <Box>
          <Image
            src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_AllInclusive_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh"
            alt="featured-offer-2"
          />
        </Box>
        <Box>
          <Image
            src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_MOD_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh"
            alt="featured-offer-3"
          />
        </Box>
        <Box>
          <Image
            src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_JetAndReset_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh"
            alt="featured-offer-4"
          />
        </Box>
      </Box>
    </div>
  );
};

export default FeaturedOffers;
