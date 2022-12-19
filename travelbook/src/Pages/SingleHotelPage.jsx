import React from "react";
import {
  Image,
  Container,
  Box,
  Stack,
  Text,
  Heading,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  SimpleGrid,
  Button,
  Flex,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { IoMdRestaurant } from "react-icons/io";
import { HiHome, HiWifi } from "react-icons/hi";
import { RiParkingBoxFill } from "react-icons/ri";
import { useEffect } from "react";

//function getselectedhotel() {
let data = [];
let el = JSON.parse(localStorage.getItem("selected-hotel"));
data.push(el);
console.log(data);
//}

const SingleHotelPage = () => {
  return (
    <div>
      <Container>
        {data.map((el) => (
        
          <Stack direction="column">
            <Box>
           
              <RouterLink to="/searchresult">
                <Text p="10px">
                  <ArrowBackIcon />
                  See All Properties
                </Text>
              </RouterLink>
            </Box>
            <Box
            // style={{ width: "100%", margin: "auto", height: "300px" }}
            // overflow="hidden"
            >
              <Image src={el.image} alt="img" w="100%" objectFit="cover" />
              <Tabs>
                <TabList>
                  <Tab>Overview</Tab>
                  <Tab>Rooms</Tab>
                  <Tab>Locations</Tab>
                  <Tab>Policies</Tab>
                </TabList>
                <Flex justifyContent="space-between" p="4px">
                  <RouterLink to="/payment">
                    <Button
                      size="md"
                      height="38px"
                      width="120px"
                      color="#fff"
                      bgColor="#c83269"
                      _hover={{ bgcolor: "#00253c" }}
                    >
                      Reserve Now
                    </Button>
                  </RouterLink>
                  <Heading as="h4" size="md" p="10px">
                    ₹{el.price + 280}
                  </Heading>
                </Flex>
                <TabPanels>
                  <TabPanel>
                    <Heading>{el.name}</Heading>
                    <Text>{el.rating} Star Property</Text>
                    <Heading as="h5" size="sm">
                      {el.review}/10 Wonderful
                    </Heading>
                    <Text color="blue" fontSize="xs">
                      See All Reviews
                    </Text>
                    <Heading as="h5" size="sm" p="10px">
                      Popular amenities
                    </Heading>
                    <SimpleGrid columns={2} spacing={5}>
                      <Box height="50px">
                        <HiHome /> Air conditioning
                      </Box>
                      <Box height="50px">
                        <IoMdRestaurant /> Restaurant
                      </Box>
                      <Box height="50px">
                        {" "}
                        <HiWifi />
                        Free WiFi
                      </Box>
                      <Box height="50px">
                        <RiParkingBoxFill />
                        Parking included
                      </Box>
                    </SimpleGrid>
                  </TabPanel>
                  <TabPanel>
                    <p>Please check for best Avilable Rooms.!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>we are Best loacation in {el.city}</p>
                  </TabPanel>
                  <TabPanel>
                    <p>Policies</p>
                    <p>Please read the terms and conditons carfully</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
            <Box></Box>
          </Stack>
        ))}
      </Container>
    </div>
  );
};

export default SingleHotelPage;
