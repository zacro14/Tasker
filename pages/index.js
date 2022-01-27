import Head from "next/head";
import TaskItem from "../components/TaskItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/todos";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const taskItem = useSelector((state) => state.task);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleaddTask = () => {
    if (task === "") {
      return null;
    } else {
      dispatch(
        addTask({
          id: Math.floor(Math.random() * 1000),
          task: task,
          completed: false,
        })
      );
      setTask("");
    }
  };

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

          <Box pt={"5"} display={"flex"}>
            <Input
              mr={"4"}
              placeholder="My Todos ...."
              colorScheme={"cyan"}
              onChange={(e) => handleChange(e)}
              value={task}
            />
            <Button onClick={handleaddTask}>Submit</Button>
          </Box>

          {taskItem.task?.map((task) => (
            <TaskItem taskitem={task} key={task.id} />
          ))}
        </Flex>
      </Container>
    </>
  );
}
