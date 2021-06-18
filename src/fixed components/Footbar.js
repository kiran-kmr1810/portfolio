import React from 'react';
import { Box,HStack,Spacer,Text } from "@chakra-ui/react"
import { useMediaQuery } from 'react-responsive'
 
function Footbar() {
    const lap = useMediaQuery({query: '(min-device-width: 821px)'})

    return (
      <div>
        <Box bg="#017acd" p="3px" w="100%" height="25px" pos="fixed" bottom="0" left="0">
            <HStack>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-git-fork" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <circle cx="12" cy="18" r="2" />
                  <circle cx="7" cy="6" r="2" />
                  <circle cx="17" cy="6" r="2" />
                  <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" />
                  <line x1="12" y1="12" x2="12" y2="16" />
                </svg>
                <Text fontSize="12" paddingRight="10px" color="white">master*</Text>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-upload" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
                  <polyline points="9 15 12 12 15 15" />
                  <line x1="12" y1="12" x2="12" y2="21" />
                </svg>
                {lap && <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-triangle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 9v2m0 4v.01" />
                  <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
                </svg>}
                {lap && <Text fontSize="12" color="white">0</Text>}
                {lap && <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M10 10l4 4m0 -4l-4 4" />
                </svg>}
                {lap && <Text fontSize="12" color="white">0</Text>}
                {lap && <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-circle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <circle cx="12" cy="12" r="9" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>}
                {lap && <Text fontSize="12" color="white">0</Text>}
                <Spacer/>
                {lap && <Text fontSize="12" px="10px" color="white">Ln 13 , Col 81</Text>}
                {lap && <Text fontSize="12" px="10px" color="white">Spaces: 4</Text>}
                {lap && <Text fontSize="12" px="10px" color="white">UTF-8</Text>}
                {lap && <Text fontSize="12" px="10px" color="white">CRLF</Text>}
                {lap && <Text fontSize="12" px="10px" color="white">Python</Text>}
                <svg xmlns="http://www.w3.org/2000/svg" 
                class="icon icon-tabler icon-tabler-bell" 
                width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
            </HStack>
        </Box>
      </div>
    );
  }
  
  export default Footbar;