import React from 'react'
import { Box, Text,Stack, Button,Link} from "@chakra-ui/react"
import coding from "../icons/code.svg"

function Acom() {
    return (
        <div>
            <Box pos="fixed" left="300px" top="64px" bottom="25px" w="100%" h="86.3vh" bg="#1f1f1e">
            <Stack>
            <Box px="330px" paddingTop="30px" paddingBottom="10px">
            <img alt = "profile" style={{height:'250px',width:'250px'}} src={coding}/>
            </Box>
            <Box px="150px">
                <Text 
                fontWeight="medium" fontFamily="cursive" fontSize="18" color="white" align="center" maxW="600px"> 
                "A creative , dedicated and enthusiastic student seeking 
                 an entry level position to gain knowledge and extensive experience 
                 in areas of software development , machine learning and related areas."</Text>
            </Box>
            <Box px="330px" paddingTop="50px">
            <Link href="https://drive.google.com/file/d/1EIuwwdwJr_2eLPhF-jOtF99aFJh852kR/view?usp=sharing" isExternal>
            <Button px="75px" 
            bg = "#017acd"
            color = "white"
            _hover={{
                bg:"white",
                color:"#017acd"
            }}>
                DOWNLOAD CV
            </Button>
            </Link>
            </Box>
            </Stack>
            </Box>
        </div>
    )
}

export default Acom
