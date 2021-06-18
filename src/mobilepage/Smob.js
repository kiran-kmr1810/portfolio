import React from 'react'
import {Box,Stack,Text,Center} from "@chakra-ui/react"

function Smob() {
    return (
        <div>
            <Box pos="fixed" left="25px" top="32px" bottom="25px" w="100%" h="100vh" bg="#1f1f1e">
            <Stack>
                <Box py="30px" paddingLeft="80px">
                <Text fontWeight="bold" fontSize="20" color="gray.100">
                    TECHNICAL SKILLS
                </Text>
                </Box>

                <Box maxWidth="350px" bg="#548166">
                <Center>
                <Text fontWeight="medium" fontSize="10" color="white">
                    Languages (Python , Java , C)
                </Text>
                </Center>
                </Box>

                <Box maxWidth="325px" bg="cyan.700">
                <Center>
                <Text fontWeight="medium" fontSize="10" color="white">
                    Web development (ReactJS,NodeJS)  
                </Text>
                </Center>
                </Box>

                <Box maxWidth="300px" bg="#548166">
                <Center>
                <Text fontWeight="medium" fontSize="10" color="white">
                    Mobile App development (Flutter) 
                </Text>
                </Center>
                </Box>

                <Box maxWidth="275px" bg="cyan.700">
                <Center>
                <Text fontWeight="medium" fontSize="10" color="white">
                Cloud Computing (AWS)
                    
                </Text>
                </Center>
                </Box>

                <Box maxWidth="250px" bg="#548166">
                <Center>
                <Text fontWeight="medium" fontSize="10" color="white">
                Database (MySQL , MongoDB , Firebase) 
                </Text>
                </Center>
                </Box>

            </Stack>
            </Box>
        </div>
    )
}

export default Smob
