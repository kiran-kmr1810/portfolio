import React from 'react'
import {Box,Spacer,VStack} from "@chakra-ui/react"
import { Link } from 'react-router-dom';

function Sidebarmob() {
    return (
        <div>
            <Box pos="fixed" left="0" top="32px" w="25px" h="93vh" bg="#333333">
                <VStack spacing="20px" paddingTop="10px">
                
                <Link to="/">
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" 
                class="icon icon-tabler icon-tabler-files" 
                width="17" height="17" viewBox="0 0 24 24" 
                stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M15 3v4a1 1 0 0 0 1 1h4" />
                <path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z" />
                <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
                </svg>
                </button>
                </Link>

                <Link to="/skills">
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" 
                class="icon icon-tabler icon-tabler-code" 
                width="17" height="17" viewBox="0 0 24 24" 
                stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="7 8 3 12 7 16" />
                <polyline points="17 8 21 12 17 16" />
                <line x1="14" y1="4" x2="10" y2="20" />
                </svg>
                </button>
                </Link>
                
                <Link to="/contact">
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" 
                class="icon icon-tabler icon-tabler-search" 
                width="16" height="16" viewBox="0 0 24 24" 
                stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
                </button>
                </Link>


                <Link to="/about">
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" 
                class="icon icon-tabler icon-tabler-link" 
                width="17" height="17" viewBox="0 0 24 24" 
                stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
                </button>
                </Link>

                <Link to="/projects">
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" 
                class="icon icon-tabler icon-tabler-brand-github" 
                width="17" height="17" viewBox="0 0 24 24" 
                stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
                </button>
                </Link>

                <Spacer/>

                
                <Box bottom="25px" pos="fixed">
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" 
                class="icon icon-tabler icon-tabler-settings" 
                width="16" height="16" viewBox="0 0 24 24" 
                stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                <circle cx="12" cy="12" r="3" />
                </svg>
                </button>
                </Box>
                

                </VStack>
            </Box>
        </div>
    )
}

export default Sidebarmob
