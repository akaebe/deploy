import { Box, Image,Heading,HStack,Input, VStack, IconButton,Button,Text,useColorModeValue} from '@chakra-ui/react'
import{ DeleteIcon,EditIcon } from "@chakra-ui/icons"
import { useProductStore } from "../store/product"
import { useToast } from '@chakra-ui/react';
import { useDisclosure } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent,ModalCloseButton, ModalHeader, ModalFooter, ModalBody } from '@chakra-ui/react';
import { useState } from 'react';


const ProductCard = ({product}) => {
    const [UpdatedProduct,setUpdatedProduct]=useState(product)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const textColor= useColorModeValue("gray.600","gray.200")
    const bg= useColorModeValue("white","gray.800")
    const {deleteProduct,updateProduct} = useProductStore()
    const toast = useToast()
    const handledeleteProduct = async(id) =>{
        const {success, message} = await deleteProduct(id)
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
        
    }
    const handleditProduct = async(id,UpdatedProduct) =>{
        const {success, message} = await updateProduct(id,UpdatedProduct)
        console.log(success,message)
        onClose()
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
        
    }
    return(
        <Box
        shadow='lg'
        rounded='lg'
        overflow='hidden'
        transition='all 0.3s'
        _hover={{ transform: "translateY(-5px)", shadow: "xl"}}
        bg={bg}
        >
            <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />
            
            <Box p={4}>
                <Heading as='h3' size='md' mb={2}>
                    {product.name}
                </Heading>

                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                    ${product.price}
                </Text>

                <HStack spacing={2}>
                    <IconButton icon={<EditIcon  />}  onClick={onOpen} colorScheme='blue' />
                    <IconButton icon={<DeleteIcon />} onClick={()=>handledeleteProduct(product._id)} colorScheme='red' />
                </HStack>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader>
                            Update Product
                        </ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>
                        <VStack spacing={4}>
        <Input 
            placeholder='Product Name' 
            name='name'
            type='text'
            value={UpdatedProduct.name}
            onChange={(e) => setUpdatedProduct({ ...UpdatedProduct, name: e.target.value })}
        />
        <Input
          placeholder='Price'
          name='price'
          type='number'
          value={UpdatedProduct.price}
          onChange={(e) => setUpdatedProduct({ ...UpdatedProduct, price: e.target.value })}
        />
        <Input
          placeholder='Image URL'
          name='image'
          value={UpdatedProduct.image}
          onChange={(e) => setUpdatedProduct({ ...UpdatedProduct, image: e.target.value })}
        />  
          </VStack>
                            
                            
                        </ModalBody>
                        <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={()=>handleditProduct(product._id,UpdatedProduct)}>
              Update
            </Button>
            <Button variant='ghost'>Cancel</Button>
          </ModalFooter>
                    </ModalContent>
                </ModalOverlay>


            </Modal>
       
       
        </Box>

    )
};
export default ProductCard;