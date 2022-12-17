import React from "react";
import { SimpleGrid, Box, Image } from "@chakra-ui/react";
const HotelCard = () => {
  return (
    <div>
      <SimpleGrid
        columns={[2, null, 3]}
        spacing="1px"
        border="1px"
        w="70%"
        m="auto"
        overflow="hidden"
        p="10px"
      >
        <Box height="230px">
          {/* hotel image  */}
          <Image
            src="https://images.trvl-media.com/hotels/6000000/5310000/5301700/5301691/796fe3c1.jpg?impolicy=resizecrop&rw=455&ra=fit"
            alt="hotel-img"
            w="100%"
          />
        </Box>
        <Box height="230px">
          {/* hotel name,city,fully refundable,reserve now pay later,rating */}
        </Box>
        <Box height="230px">{/* price,total price,including taxes */}</Box>
      </SimpleGrid>
    </div>
  );
};

export default HotelCard;
