import React from 'react';
import { Box,HStack,Text} from "@chakra-ui/react"
import icovs from "../icons/icovs.svg";
import { useMediaQuery } from 'react-responsive'
 
function Navbar() {
      const lap = useMediaQuery({query: '(min-device-width: 821px)'})
      const mobile = useMediaQuery({ query: '(max-device-width: 768px)' })
    return (
      <div>
        <Box bg="#3c3c3c" w="100%" Top="0" pos="fixed" height = "32px" color="white">
            <HStack>
                {mobile && <img style={{height:'25px',width:'25px',paddingTop:"5px" }} pos="fixed" top="0" alt="logo" src={icovs}/>}
                {lap && <img style={{height:'30px',width:'30px',padding:"5px"}} pos="fixed" top="0" alt="logo" src={icovs}/>}
                <HStack>
                {lap &&<Text fontSize="14" paddingLeft="5px" color="gray.200">File</Text>}
                {lap &&<Text fontSize="14" paddingLeft="5px" color="gray.200">Edit</Text>}
                {lap &&<Text fontSize="14" paddingLeft="5px" color="gray.200">Selection</Text>}
                {lap &&<Text fontSize="14" paddingLeft="5px" color="gray.200">View</Text>}
                {lap &&<Text fontSize="14" paddingLeft="5px" color="gray.200">Go</Text>}
                {lap &&<Text fontSize="14" paddingLeft="5px" color="gray.200">Run</Text>}
                {lap &&<Text fontSize="14" paddingLeft="5px" color="gray.200">Terminal</Text>}
                {lap &&<Text fontSize="14" paddingLeft="5px" paddingRight="200px" color="gray.200">Help</Text>}
                </HStack>
                {lap &&<Text 
                fontSize="14" color="gray.200"> Kiran Kumar A - Portfolio Website</Text>}
            </HStack>
        </Box>
      </div>
    );
  }
  
  export default Navbar;