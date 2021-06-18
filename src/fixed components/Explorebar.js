import React , { useState }from 'react'
import {Box ,HStack, Stack,Text} from "@chakra-ui/react"
import { Link } from 'react-router-dom';

function Explorebar() {
    const [drop, setdrop] = useState(true);

    function click(){
        setdrop(!drop)
    }

    return (
        <div>
            <Box pos="fixed" left="50px" top="32px" w="250px" h="93vh" bg="#252427">
            <Stack>
                <Text 
                paddingLeft ="20px" 
                paddingTop = "10px"
                fontSize="12" color="white">EXPLORER</Text>
                <HStack spacing="5px">
                
                <button
                onClick={click}
                >
                { !drop? 
                <svg xmlns="http://www.w3.org/2000/svg" 
                class="icon icon-tabler icon-tabler-chevron-right" 
                width="24" height="24" viewBox="0 0 24 24" 
                stroke-width="0.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="9 6 15 12 9 18" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" 
                class="icon icon-tabler icon-tabler-chevron-down" 
                width="24" height="24" viewBox="0 0 24 24" 
                stroke-width="0.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="6 9 12 15 18 9" />
                </svg>
                }
                </button>


                <Text
                fontSize="12"
                color="white"
                fontWeight="bold"
                >PORTFOLIO</Text>
                </HStack>

                { drop? 
                <Stack paddingLeft="25px" spacing="5px">

                <Link to="/">
                <button>
                    <HStack spacing="2px">
                    <img alt="html" src="https://img.icons8.com/ios-glyphs/24/fa314a/html-5.png"/>
                    <Text
                    fontSize="12"
                    color="white"
                    >Homepage.html</Text>
                    </HStack>
                </button>
                </Link>
                
                
                <Link to="/about">
                <button>
                    <HStack spacing="2px">
                    <img alt="js" src="https://img.icons8.com/color/24/fa314a/javascript.png"/>
                    <Text
                    fontSize="12"
                    color="white"
                    >About.js</Text>
                    </HStack>
                </button>
                </Link>
                
                <Link to="/skills">
                <button>
                    <HStack spacing="2px">
                    <img alt="json" src="https://img.icons8.com/ultraviolet/24/fa314a/file.png"/>
                    <Text
                    fontSize="12"
                    color="white"
                    >Skills.json</Text>
                    </HStack>
                </button>
                </Link>
                
                <Link to="/projects">
                <button>
                    <HStack spacing="2px">
                    <img alt="react" src="https://img.icons8.com/color/24/fa314a/react-native.png"/>
                    <Text
                    fontSize="12"
                    color="white"
                    >Projects.jsx</Text>
                    </HStack>
                </button>
                </Link>
                
                <Link to="/contact">
                <button>
                    <HStack spacing="2px">
                    <img alt="css" src="https://img.icons8.com/color/24/fa314a/css3.png"/>
                    <Text
                    fontSize="12"
                    color="white"
                    >Contact.css</Text>
                    </HStack>
                </button>
                </Link>

                </Stack>
                :null}
            </Stack>
            </Box>
        </div>
    )
}

export default Explorebar
