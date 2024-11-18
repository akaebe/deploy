import {Box,useColorModeValue} from '@chakra-ui/react'
import {Route, Routes} from "react-router-dom"

import Navbar from "./components/Navbar"
import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"

function App() {
  return (
    //  to change color when toggle btw moon and sun we use colorModeValue here in appfile not in navbarfile
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage/>} />
      </Routes>
      
    </Box>
  )
}

export default App
