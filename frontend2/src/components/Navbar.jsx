import { Container, Flex, Button,Text,HStack,useColorMode} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

import { PlusSquareIcon } from "@chakra-ui/icons"


const Navbar = () => {
    const { colorMode, toggleColorMode }= useColorMode();
  return (
    <Container maxW={"1140px"} px={4} >
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm:"row",
            }}
        >

    <Text
        fontSize={{base:"22",sm: "28" }}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
        bgGradient={"linear(to-r, cyan.400, blue.500)"}
        bgClip={"text"}
     >
        <Link to={"/"}>Product Store 🛒</Link>

    </Text>

    <HStack spacing={2} alignItems={"center"}>
            <Link to={"/create"}>
            <Button>
                <PlusSquareIcon fontSize={20}/>
            </Button>
            </Link>
            <Button onClick={toggleColorMode}>
                <Text fontSize={colorMode === "light" ? "md" : "2xl"}>
                {colorMode === "light" ? "🌙" : "🌞 "}
                </Text>
            </Button>
    </HStack>

    </Flex>
    </Container>
  )
}

export default Navbar