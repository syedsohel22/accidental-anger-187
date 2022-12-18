import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Input,
  Image,
  TabPanel,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const SerachComponent = () => {
  const [searchData, setSearchData] = useState({
    city: "",
    checkIn: "",
    checkOut: "",
    guest: 1,
  });

  const handleChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(searchData);
  localStorage.setItem("searchData", JSON.stringify(searchData));
  return (
    <div>
      <Box
        top="0"
        mt="80px"
        w="100%"
        h="380px"
        // bgSize="100%"
        position="absolute"
        //zIndex="4"
      >
        <Image
          src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/01/ORB_Storefront_6_imgB_1400x600_20211028.jpg?impolicy=fcrop&w=900&h=225&q=mediumHigh"
          alt="background-img"
          width="100%"
        />
        <Box
          w="80%"
          h="70%"
          bg="white"
          p="10px"
          m="auto"
          position="relative"
          top="-320px"
          bottom="100px"
        >
          {/* tab-menus */}
          <Tabs>
            <TabList>
              <Tab>Stay</Tab>
              <Tab>Flights</Tab>
              <Tab>Car</Tab>
              <Tab>Packages</Tab>
              <Tab>Things to do</Tab>
              <Tab>Cruises</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Box
                  // w="70%"
                  // bg="white"
                  p="10px"
                  display="flex"
                  ml="200px"
                  m="auto"
                  // position="absolute"
                  zIndex="5"
                  alignItems="center"
                >
                  <Input
                    placeholder="Going to "
                    size="md"
                    w="80%"
                    align={"center"}
                    justify={"center"}
                    type="text"
                    name="city"
                    value={searchData.city}
                    onChange={handleChange}
                  />
                  <Input
                    placeholder="Select Check-in Date"
                    size="md"
                    type="date"
                    w="80%"
                    align={"center"}
                    justify={"center"}
                    name="checkIn"
                    value={searchData.checkIn}
                    onChange={handleChange}
                  />
                  <Input
                    placeholder="Select Check-out Date"
                    size="md"
                    type="date"
                    w="80%"
                    name="checkOut"
                    align={"center"}
                    justify={"center"}
                    value={searchData.checkOut}
                    onChange={handleChange}
                  />
                  <Input
                    placeholder="Travlears"
                    size="md"
                    type="Number"
                    w="80%"
                    align={"center"}
                    justify={"center"}
                    name="guest"
                    value={searchData.guest}
                    onChange={handleChange}
                  />
                </Box>
              </TabPanel>
              <TabPanel>
                <p>Flights</p>
              </TabPanel>
              <TabPanel>
                <p>Cars</p>
              </TabPanel>
              <TabPanel>
                <p>Packages</p>
              </TabPanel>
              <TabPanel>
                <p>Things to do</p>
              </TabPanel>
              <TabPanel>
                <p>Cruises</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Box textAlign="center">
            <RouterLink to="/searchresult">
              <Button
                size="md"
                height="48px"
                width="200px"
                color="#fff"
                bgColor="#c83269"
                // onClick={}
              >
                Search
              </Button>
            </RouterLink>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SerachComponent;
