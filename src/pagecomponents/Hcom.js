import React from 'react'
import {Box,HStack,Stack,Text} from "@chakra-ui/react"
import profile from "../icons/profile.png"

function Hcom() {
    return (
        <div>
            <Box pos="fixed" left="300px" top="64px" bottom="25px" w="100%" h="100vh" overflow="auto" bg="#1f1f1e">
                <HStack spacing="50px">
                <Box p="50px" paddingLeft="100px">
                    <img 
                    alt = "profile"
                    style={{height:'230px',width:'230px'}} 
                    src={profile}/>
                </Box>
                <Box paddingTop="100px">
                    <Stack spacing="2px">
                        <Text fontWeight="medium" fontSize="18" color="#5dafa1" >Hello I'm</Text>
                        <Text fontWeight="bold" fontSize="40" color="white">KIRAN KUMAR</Text>
                        <Text fontWeight="semibold" fontSize="40" color="#017acd" >Software Developer</Text>
                    </Stack>
                    <Box py="50px">
                    <Stack>
                        <HStack>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        class="icon icon-tabler icon-tabler-mail" 
                        width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                        </svg>
                        <Text fontWeight="medium" fontFamily="sans-serif" fontSize="18" color="white">kiran.kmr1810@gmail.com</Text>
                        </HStack>

                        <HStack>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        class="icon icon-tabler icon-tabler-map-pin" 
                        width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="11" r="3" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>
                        <Text fontWeight="medium" fontFamily="sans-serif" fontSize="18" color="white">Theni,Tamilnadu,India</Text>
                        </HStack>
                        
                        <HStack>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        class="icon icon-tabler icon-tabler-phone" 
                        width="35" height="35" viewBox="0 0 24 24" 
                        stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg>
                        <Text fontWeight="medium" fontFamily="sans-serif" fontSize="18" color="white">+91 8056961720</Text>
                        </HStack>

                        <HStack>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        class="icon icon-tabler icon-tabler-confetti" 
                        width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 5h2" />
                        <path d="M5 4v2" />
                        <path d="M11.5 4l-.5 2" />
                        <path d="M18 5h2" />
                        <path d="M19 4v2" />
                        <path d="M15 9l-1 1" />
                        <path d="M18 13l2 -.5" />
                        <path d="M18 19h2" />
                        <path d="M19 18v2" />
                        <path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1.003 1.003 0 0 0 1.329 1.329l9.579 -4.39z" />
                        </svg>
                        <Text fontWeight="medium" fontFamily="sans-serif" fontSize="18" color="white">18/10/2000</Text>
                        </HStack>

                       
                    </Stack>
                    </Box>
                </Box>
                </HStack>
            </Box>
        </div>
    )
}

export default Hcom
