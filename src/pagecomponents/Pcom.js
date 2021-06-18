import React from 'react'
import {Box,Link,Stack,Text} from "@chakra-ui/react"

function Pcom() {
    return (
        <div>
        <Box pos="fixed" left="300px" top="64px" bottom="25px" w="100%" h="100vh" overflow="auto" bg="#1f1f1e">
        <Stack>
                <Box paddingTop="10px" paddingBottom="25px"  px="350px">
                <Text fontWeight="bold" fontSize="35" color="gray.100">
                    PROJECTS
                </Text>
                </Box>

            <Box>
            <Box bg="gray.700" maxH="180px" maxW="550px" p={4} display={{ md: "flex" }}>
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} paddingRight="150px">
                    <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="sm"
                    letterSpacing="wide"
                    color="#017acd"
                    >
                    WebApp
                    </Text>
                    <Link
                    mt={1}
                    display="block"
                    color="white"
                    fontSize="lg"
                    lineHeight="normal"
                    fontWeight="semibold"
                    href="https://github.com/kiran-kmr1810/Quiz-webApp"
                    >
                    QUIZZY - A Quiz App
                    </Link>
                    <Text mt={2} color="#cf9078">
                    A Webapp for teachers to conduct quizzes to students
                    </Text>
                    <Text  mt={2} color="#4ea9e2">
                    ReactJS , NodeJS , MongoDB
                    </Text>
                </Box>
                <Box w="5px" h="150px" bg="#64bc84"/>
                </Box>
            </Box>

            <Box>
            <Box bg="gray.700" maxH="230px" maxW="550px" p={4} display={{ md: "flex" }}>
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} paddingRight="150px">
                    <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="sm"
                    letterSpacing="wide"
                    color="#017acd"
                    >
                    Software
                    </Text>
                    <Link
                    mt={1}
                    display="block"
                    color="white"
                    fontSize="lg"
                    lineHeight="normal"
                    fontWeight="semibold"
                    href="https://github.com/kiran-kmr1810/"
                    >
                    SURWAY — A UAV route planner
                    </Link>
                    <Text mt={2} color="#cf9078">
                    A software-based application that 
                    plans the most optimized route for multiple drones to sweep/scan/survey 
                    a given large area of land with uneven boundaries in short time.
                    </Text>
                    <Text  mt={2} color="#4ea9e2">
                    Python , Matplotlib , Data structures and Algorithms
                    </Text>
                </Box>
                <Box w="15px" h="200px" bg="#64bc84"/>
                </Box>
            </Box>
        </Stack>
        </Box>
        </div>
    )
}

export default Pcom
