import React from 'react'
import {Box,HStack,Text} from "@chakra-ui/react"
import { Link } from 'react-router-dom';

function Filebarpc() {
    return (
        <div>
            <Box bg="#252427" pos="fixed" left="300px" top="32px" w="100%" height = "32px">
            <HStack spacing="50px" p="5px">

                <Link to="/">
                <button>
                    <HStack spacing="4px">
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
                    <HStack spacing="4px">
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
                    <HStack spacing="4px">
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
                    <HStack spacing="4px">
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
                    <HStack spacing="4px">
                    <img alt="css" src="https://img.icons8.com/color/24/fa314a/css3.png"/>
                    <Text
                    fontSize="12"
                    color="white"
                    >Contact.css</Text>
                    </HStack>
                </button>
                </Link>
                
                </HStack>
            </Box>
        </div>
    )
}

export default Filebarpc
