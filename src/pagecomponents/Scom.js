import React from 'react'
import { Box, Center,Stack,Text} from "@chakra-ui/react"

function Scom() {
    return (
        <div>
        <Box pos="fixed" left="300px" top="64px" bottom="25px" w="100%" h="100vh" overflow="auto" bg="#1f1f1e">
            <Stack>
                <Box py="40px" px="350px">
                <Text fontWeight="bold" fontSize="35" color="gray.100">
                    TECHNICAL SKILLS
                </Text>
                </Box>

                <Box maxWidth="850px" bg="#548166">
                <Center>
                <Text fontWeight="medium" fontSize="20" color="white">
                    Languages (Python , Java , C)
                </Text>
                </Center>
                </Box>

                <Box maxWidth="800px" bg="cyan.700">
                <Center>
                <Text fontWeight="medium" fontSize="20" color="white">
                    Web development (ReactJS,NodeJS)  
                </Text>
                </Center>
                </Box>

                <Box maxWidth="750px" bg="#548166">
                <Center>
                <Text fontWeight="medium" fontSize="20" color="white">
                    Mobile App development (Flutter) 
                </Text>
                </Center>
                </Box>

                <Box maxWidth="700px" bg="cyan.700">
                <Center>
                <Text fontWeight="medium" fontSize="20" color="white">
                Cloud Computing (AWS)
                    
                </Text>
                </Center>
                </Box>

                <Box maxWidth="650px" bg="#548166">
                <Center>
                <Text fontWeight="medium" fontSize="20" color="white">
                Database (MySQL , MongoDB , Firebase) 
                </Text>
                </Center>
                </Box>

            </Stack>
        </Box> 
        </div>
    )
}

export default Scom
