import React from "react";
import { SimpleGrid, Box, Image, Heading, Text, Badge } from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

const HotelCard = (props) => {
  const { name, city, price, type, rating, review, strikeprice, image } = props;

  const storelocal = (el) => {
    localStorage.setItem("selected-hotel", JSON.stringify(props));
  };
  return (
    <div
      onClick={(e) => {
        storelocal();
      }}
    >
      <RouterLink to="/singlehotelpage">
        <SimpleGrid
          columns={[2, null, 3]}
          spacing="1px"
          w="60%"
          m="auto"
          overflow="hidden"
          mb="10px"
          bgColor="#fff"
          border="1px"
        >
          <Box height="200px">
            {/* hotel image  */}
            <Image src={image} w="80%" />
          </Box>
          <Box height="200px" p="10px" w="500px">
            <Heading as="h4" size="md" pt="8px">
              {name}
            </Heading>
            <Text>{city}</Text>

            <Badge colorScheme="green">Avilable</Badge>
            <Text color="green">fully refundable</Text>
            <Text color="green">reserve now pay later</Text>
            <Heading as="h6" size="xs">
              Rating : {rating}/5
            </Heading>
            {/* hotel name,city,fully refundable,reserve now pay later,rating */}
          </Box>
          <Box height="200px" p="10px" pt="100px" pl="200px">
            {/* price,total price,including taxes */}
            <Text as="del"> ₹{strikeprice}</Text>
            <Heading as="h4" size="md">
              ₹{price}
            </Heading>
            <Text>Total: ₹{price + 280}</Text>
            <Text fontSize="xs"> including taxes</Text>
          </Box>
        </SimpleGrid>
      </RouterLink>
    </div>
  );
};

export default HotelCard;
