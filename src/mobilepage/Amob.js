import React from 'react'
import {Box,Stack,Text,Button,Link,Center,HStack} from "@chakra-ui/react"
import coding from "../icons/code.svg"

function Amob() {
    return (
        <div>
        <Box pos="fixed" left="25px" top="32px" bottom="25px" w="100%" h="100vh" bg="#1f1f1e">
        <Center>
        <Stack>
            <Box paddingTop="30px" paddingBottom="10px">
            <img alt = "profile" style={{height:'250px',width:'250px'}} src={coding}/>
            </Box>
            <Box>
                <Text 
                fontWeight="medium" fontFamily="cursive" fontSize="18" color="white" align="center" w="250px"> 
                "A creative , dedicated and enthusiastic student seeking 
                 an entry level position to gain knowledge and extensive experience 
                 in areas of software development , machine learning and related areas."</Text>
            </Box>
            <Box paddingTop="50px">
            <HStack spacing="5px">
            <Link href="https://drive.google.com/file/d/1EIuwwdwJr_2eLPhF-jOtF99aFJh852kR/view?usp=sharing" isExternal>
            <Button 
            w = "100px" 
            bg = "#017acd"
            color = "white"
            _hover={{
                bg:"white",
                color:"#017acd"
            }}>
                VIEW CV
            </Button>
            </Link>
            <Link href="https://drive.google.com/uc?id=1EIuwwdwJr_2eLPhF-jOtF99aFJh852kR&export=download">
            <Button 
            w= "130px"
            bg = "#017acd"
            color = "white"
            _hover={{
                bg:"white",
                color:"#017acd"
            }}>
                DOWNLOAD CV
            </Button>
            </Link>
            </HStack>
            </Box>
            </Stack>
        </Center>
        </Box>
        </div>
    )
}

export default Amob
