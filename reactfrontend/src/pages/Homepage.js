import React from 'react';
import { useEffect } from "react";
import { Container, Box, Text, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Login from "../components/Authentication/Logins";
import Signup from "../components/Authentication/Signups";
import { useHistory } from "react-router";

const Homepage = () => {

    const history = useHistory();

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("userInfo"));
  
      if (user) history.push("/chats");
    }, [history]);

  return (
    <Container maxW="xl" centerContent>
        <Box
           d="flex"
           justifyContent="center"
           p={3}
           bg={"white"}
           w="100%"
           m="40px 0 15px 0"
           borderRadius="lg"
           borderWidth="1px"
        >
           <Text fontSize="4xl" fontFamily="Poppins" color="black" textAlign="center">Talk-A-Tive</Text>
        </Box> 
          <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" color="black">
          <Tabs variant='soft-rounded' colorScheme='green'>
             <TabList mb="1em">
               <Tab w="50%">Login</Tab>
               <Tab w="50%">Sign U p</Tab>
             </TabList>
             <TabPanels>
               <TabPanel>
                 <Login />
               </TabPanel>
               <TabPanel>
                 <Signup />
               </TabPanel>
             </TabPanels>
          </Tabs>
        </Box>
    </Container>
  )
}

export default Homepage;
