import { ModalHeader } from "@chakra-ui/react";
import { React } from "react";
import {
  Modal,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
function PaymentSucess() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        loadingText="Submitting"
        size="lg"
        bg={"blue.400"}
        color={"white"}
        _hover={{
          bg: "blue.500",
        }}
        onClick={onOpen}
      >
        Pay
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment Successful</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>You Have Reserved the Room.!</p>
          </ModalBody>

          <ModalFooter>
            <RouterLink to="/">
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </RouterLink>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PaymentSucess;
