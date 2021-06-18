import React from 'react'
import {Box,Stack,Text,HStack,Link, Center} from "@chakra-ui/react"

function Cmob() {
    return (
        <div>
            <Box pos="fixed" left="25px" top="32px" bottom="25px" w="100%" h="100vh" bg="#1f1f1e">
            <Center>
            <Stack>
                <Box paddingTop="30px" paddingBottom="50px">
                <Text fontWeight="bold" fontSize="35" color="#017acd">
                    CONTACT ME 
                </Text>
                </Box>
            <HStack>
            <svg xmlns="http://www.w3.org/2000/svg" 
                class="icon icon-tabler icon-tabler-mail" 
                width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
            </svg>
            <Text fontWeight="semibold" fontSize="15" color="white" >kiran.kmr1810@gmail.com</Text>
            </HStack>

            <HStack>
            <svg xmlns="http://www.w3.org/2000/svg" 
                class="icon icon-tabler icon-tabler-phone" 
                width="40" height="40" viewBox="0 0 24 24" 
                stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
            <Text fontWeight="semibold" fontSize="15" color="white" >+91 8056961720</Text>
            </HStack>
            
            <Link href="https://www.linkedin.com/in/kk2/" isExternal>
            <HStack>
            <svg xmlns="http://www.w3.org/2000/svg" 
            class="icon icon-tabler icon-tabler-brand-linkedin" 
            width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.01" />
            <line x1="12" y1="16" x2="12" y2="11" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
            <Text fontWeight="semibold" fontSize="15" color="white" >LinkedIN</Text>
            </HStack>
            </Link> 

            <Link href="https://github.com/kiran-kmr1810" isExternal>
            <HStack>
            <svg xmlns="http://www.w3.org/2000/svg" 
            class="icon icon-tabler icon-tabler-brand-github" 
            width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
            <Text fontWeight="semibold" fontSize="15" color="white" >GITHUB</Text>
            </HStack>
            </Link>

            </Stack>
            </Center>
            </Box>
        </div>
    )
}

export default Cmob
