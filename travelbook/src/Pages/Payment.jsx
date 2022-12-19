import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  TabPanel,
  TabPanels,
  Link,
  Tab,
  Tabs,
  TabList,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import PaymentSucess from "../Components/PaymentSucess";

//model here

export default function Payment() {
  

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            {/* <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl> */}
            <Stack>
              <Tabs>
                <TabList>
                  <Tab>Card</Tab>
                  <Tab>UPI</Tab>
                  <Tab>Net-Banking</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <p>Card Details</p>
                    <Stack>
                      <Input placeholder="Card Holder Name" type="text" />
                      <Input placeholder="Card Number" type="number" />

                      <Stack direction="row">
                        <Input placeholder="MM/YY" type="text" />
                        <Input placeholder="000" type="text" />
                      </Stack>
                    </Stack>
                  </TabPanel>
                  <TabPanel>
                    <p>UPI Details</p>
                    <Input placeholder="Enter UPI ID" type="text" />
                  </TabPanel>
                  <TabPanel>
                    <p>Net-Banking Details</p>
                    <p>please login and pay in Net-Banking</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Stack>
            <Stack spacing={10} pt={2}>
              {/* <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                //onClick={onOpen}
              >
                Pay
              </Button> */}
              <PaymentSucess />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
