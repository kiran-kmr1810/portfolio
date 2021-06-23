import React from 'react'
import { Box, Text,Stack, Button,Link,HStack} from "@chakra-ui/react"
import coding from "../icons/code.svg"

function Acom() {
    return (
        <div>
            <Box pos="fixed" left="300px" top="64px" bottom="25px" w="100%" h="100vh" overflow="auto" bg="#1f1f1e">
            <Stack>
            <Box px="330px" paddingTop="15px" paddingBottom="5px">
            <img alt = "profile" style={{height:'250px',width:'250px'}} src={coding}/>
            </Box>
            <Box px="150px">
                <Text 
                fontWeight="medium" fontFamily="cursive" fontSize="18" color="white" align="center" maxW="600px"> 
                "A creative , dedicated and enthusiastic student seeking 
                 an entry level position to gain knowledge and extensive experience 
                 in areas of software development , machine learning and related areas."</Text>
            </Box>
            <Box px = "310px" paddingTop="30px">
            <HStack spacing="15px">
            <Link href="https://drive.google.com/file/d/1EIuwwdwJr_2eLPhF-jOtF99aFJh852kR/view?usp=sharing" isExternal>
            <Button px="30px" 
            py="10px"
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
            <Button px="25px" 
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
            </Box>
        </div>
    )
}

export default Acom
