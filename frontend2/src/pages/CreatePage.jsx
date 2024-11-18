import { Input, VStack,Container,Heading,Box,Button, useToast,useColorModeValue } from "@chakra-ui/react"
import {useState} from "react"
import { useProductStore } from "../store/product"

const CreatePage = () => {

    const [newProduct, setNewProduct]= useState({
      name: "",
      price: "",
      image: "",
    })
    // toast method is used
    const toast = useToast()

    const {createProduct } = useProductStore()

    const handleAddProduct = async() => {
      
      const {success,message} = await createProduct(newProduct)
      console.log(message,success)
      if(!success){
        // toast method is used
        toast({
        title:"Error",
        description: message,
        status: "error",    
        duration:3000,
        isClosable: true
      })
    } else {
      toast({
        ttitle:"Success",
        description: message,
        status: "success",
        duration:3000,
        isClosable: true
      })
    }
    setNewProduct({ name: "",price: "",image: ""})
  }

  return (
    <Container maxW={"container.sm"}>

     <VStack spacing={8} >
      
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
        Create New Product
      </Heading>

      <Box
        w={"full"} bg={useColorModeValue("white","gray.800")}
        p={6} rounded={"lg"} shadow={"md"}
      >
        <VStack spacing={4}>
        <Input 
            placeholder='Product Name' 
            name='name'
            type='text'
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            autoComplete="off"
        />
        <Input
          placeholder='Price'
          name='price'
          type='number'
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          autoComplete="off"
        />
        <Input
          placeholder='Image URL'
          name='image'
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct,image: e.target.value })}
          autoComplete="off"
        />  

<Button colorScheme='blue' onClick={handleAddProduct} w='full'> 
   Add Product
</Button>
          </VStack>

      </Box>
    </VStack>
    </Container>
  )
}


export default CreatePage