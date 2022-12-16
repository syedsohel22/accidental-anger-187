import React from "react";
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

const initstate = {
  city: "",
  checkIn: "",
  checkOut: "",
  guest: 0,
  child: 0,
};
const SerachComponent = () => {
  const [searchData, setSearchData] = useState(initstate);
  return (
    <div>
      <Box
        // bgImage="url('https://forever.travel-assets.com/flex/flexmanager/images/2021/11/01/ORB_Storefront_6_imgB_1400x600_20211028.jpg?impolicy=fcrop&w=900&h=225&q=mediumHigh')"
        // bgPosition="center"
        // bgRepeat="no-repeat"
        w="100%"
        h="380px"
        // bgSize="100%"
        position="relative"
        zIndex="4"
      >
        <Image
          src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/01/ORB_Storefront_6_imgB_1400x600_20211028.jpg?impolicy=fcrop&w=900&h=225&q=mediumHigh"
          alt="background-img"
          width="100%"
        />
        <Box w="70%" bg="white" p="10px" m="auto">
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
                    name="city"
                    align={"center"}
                    justify={"center"}
                    value={"e.target.value"}
                  />
                  <Input
                    placeholder="Select Check-in Date"
                    size="md"
                    type="date"
                    w="80%"
                    align={"center"}
                    justify={"center"}
                  />
                  <Input
                    placeholder="Select Check-out Date"
                    size="md"
                    type="date"
                    w="80%"
                    align={"center"}
                    justify={"center"}
                  />
                  <Input
                    placeholder="Travlears"
                    size="md"
                    type="Number"
                    w="80%"
                    align={"center"}
                    justify={"center"}
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
            <Button
              size="md"
              height="48px"
              width="200px"
              color="#fff"
              bgColor="#c83269"
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SerachComponent;
