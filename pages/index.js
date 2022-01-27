import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import Head from "next/head";
import TaskItem from "../components/TaskItem";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tasker</title>
        <meta name="description" content="To Do App" />
      </Head>
      <Container
        p={"10"}
        bgGradient="linear(to-r, gray.100, gray.100)"
        height={"100vh"}
      >
        <Flex direction={"column"} gap={"4"}>
          <Box textAlign={"center"}>
            <Heading>Tasker</Heading>
            <Divider
              border={"1px"}
              variant={"dashed"}
              borderColor={"blackAlpha.700"}
            />
            <Text>Your best buddy for your tasks </Text>
          </Box>

          <Box pt={"5"}>
            <Input placeholder="My Todos" colorScheme={"cyan"}></Input>
          </Box>

          <TaskItem taskitem={"Go to bed"} />
          <TaskItem taskitem={"Eating foods at 8 am"} />
        </Flex>
      </Container>
    </>
  );
}
