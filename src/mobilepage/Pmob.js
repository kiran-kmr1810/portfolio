import React from 'react'
import {Box,Link,Stack,Text} from "@chakra-ui/react"


function Pmob() {
    return (
        <div>
            <Box pos="fixed" left="25px" top="32px" bottom="25px" w="100%" h="100vh" bg="#1f1f1e">
            <Stack>
            <Box paddingLeft="70px" paddingTop="20px" paddingBottom="40px">
                <Text fontWeight="bold" fontSize="35" color="gray.100">
                    PROJECTS
                </Text>
            </Box>


            <Box paddingLeft="30px">
            <Box bg="gray.700" maxH="180px" w="250px" p={4} display={{ md: "flex" }}>
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
            </Box>

            <Box paddingLeft="30px">
            <Box bg="gray.700" h ="100%" maxW="250px" p={4} display={{ md: "flex" }}>
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
                </Box>
            </Stack>
            </Box>
        </div>
    )
}

export default Pmob
