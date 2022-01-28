import { Container, Text } from "@chakra-ui/react";

const Notask = () => {
  return (
    <>
      <Container>
        <Text textAlign={"center"} color={"gray.400"}>
          Congrats you dont have a task today!
        </Text>
      </Container>
    </>
  );
};

export default Notask;
