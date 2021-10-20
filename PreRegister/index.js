import React from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import './preregister.css'
import { Button, ButtonGroup, Stack, HStack, Flex } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { FaWhatsapp, FaDiscord, FaTwitter } from 'react-icons/fa'
// import { Checkbox, CheckboxGroup } from "@chakra-ui/core";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react"

function BasicUsage() {
    const handleSubmit=()=>{
        return
    }
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="90%" borderRadius="1rem">
          <ModalHeader fontWeight="700">Pre-register for Engineer's Cradle</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing="3">
                <Text fontSize="xs" fontWeight="600" color="rgb(78, 78, 78)">Nice to have you</Text>
                <form action="" onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                    <FormControl id="name" border="0px" isRequired>
                        <FormLabel fontWeight="600" fontSize="70%">Name</FormLabel>
                        <Input type="text" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="Name" fontSize="80%" />
                    </FormControl>
                    <FormControl id="email" border="0px" isRequired>
                        <FormLabel fontWeight="600" fontSize="70%">E-mail</FormLabel>
                        <Input type="text" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="email@email.com" fontSize="80%" />
                    </FormControl>
                    <FormControl id="whatsappnumber" border="0px">
                        <FormLabel fontWeight="600" fontSize="70%">Whatsapp number (Optional)</FormLabel>
                        <Input type="text" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="+91 123456789" fontSize="80%" />
                    </FormControl>
                    <Text fontSize="xs" fontWeight="600">I would like to receive further updates and help Engineer’s Cradle</Text>
                    <Button borderRadius="0.6rem" colorScheme="blue" mr={3} onClick={handleSubmit}>
                        Submit
                    </Button>
                    </Stack>
                </form>

                {/* <Checkbox defaultIsChecked>Checkbox</Checkbox> */}
            
             <Text marginTop="3" fontSize="md" fontWeight="700">Untill we prepare a platform to help you , you can join in our community and start learning!</Text>
            <Flex direction="row" px={0} justifyContent="space-around" >
            <Button width="45%" colorScheme="whatsapp" leftIcon={<FaWhatsapp />}>
                Whatsapp
            </Button>
            <Button  _hover={{background: "rgb(82, 14, 190)",color: "white",}} width="45%" backgroundColor="rgb(136, 62, 255)" color="white" leftIcon={<FaDiscord />}>
                Discord
            </Button>
            {/* <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
                Twitter
            </Button> */}
            </Flex>
            </Stack>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default function PreRegister(){
    return(
        <div className="dummycontainer">
            <div className="preregistercontainer">
                {/* <div className="preregistertitle"><h2></h2></div> */}
                <BasicUsage/>
            </div>
        </div>
    )
}