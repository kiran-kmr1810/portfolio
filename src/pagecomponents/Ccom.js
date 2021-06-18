import React from 'react'
import {Box,Stack,Text,HStack,Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Portal,} from "@chakra-ui/react"

function Ccom() {
    return (
        <div>
            <Box pos="fixed" left="300px" top="64px" bottom="25px" w="100%" h="86.3vh" bg="#1f1f1e">
            <Stack>
                <Box paddingTop="40px"  px="370px">
                <Text fontWeight="bold" fontSize="35" color="gray.100">
                    CONTACT ME 
                </Text>
                </Box>
                <Box paddingTop="100px" px="120px">
                <HStack spacing="120px">
                <Popover>
                    <PopoverTrigger trigger='hover' placement="down">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        class="icon icon-tabler icon-tabler-mail" 
                        width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                        </svg>
                    </PopoverTrigger>
                    <Portal>
                    <PopoverContent maxW="220px">
                        <PopoverBody>kiran.kmr1810@gmail.com</PopoverBody>
                    </PopoverContent>
                    </Portal>
                </Popover>

                <Popover>
                    <PopoverTrigger trigger='hover' placement="down">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        class="icon icon-tabler icon-tabler-phone" 
                        width="100" height="100" viewBox="0 0 24 24" 
                        stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg>
                    </PopoverTrigger>
                    <Portal>
                    <PopoverContent maxW="150px">
                        <PopoverBody>+91 8056961720</PopoverBody>
                    </PopoverContent>
                    </Portal>
                </Popover>

                        <Link href="https://github.com/kiran-kmr1810" isExternal>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        class="icon icon-tabler icon-tabler-brand-github" 
                        width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                        </Link>

                        <Link href="https://www.linkedin.com/in/kk2/" isExternal>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        class="icon icon-tabler icon-tabler-brand-linkedin" 
                        width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <line x1="8" y1="11" x2="8" y2="16" />
                        <line x1="8" y1="8" x2="8" y2="8.01" />
                        <line x1="12" y1="16" x2="12" y2="11" />
                        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                        </svg>
                        </Link>            
                    </HStack>
                </Box>
            </Stack>
            </Box>
        </div>
    )
}

export default Ccom