import Head from "next/head";
import TaskItem from "../components/TaskItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, completedTask } from "../redux/todos";
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
import Notask from "../components/Notask";
import Taskcount from "../components/Taskcount";
import CompletedTaskCount from "../components/CompletedTaskCount";

export default function Home() {
  const [task, setTask] = useState("");
  const taskItem = useSelector((state) => state.task);
  const dispatch = useDispatch();

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

  const taskCount = taskItem.task.length;

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
              variant={"flushed"}
              placeholder="My Todos ...."
              colorScheme={"cyan"}
              focusBorderColor={"pink.300"}
              borderBottomColor={"pink.200"}
              onChange={(e) => handleChange(e)}
              value={task}
            />
            <Button
              bgColor={"blue.200"}
              _hover={{ bgColor: "blue.300" }}
              onClick={handleaddTask}
            >
              Submit
            </Button>
          </Box>

          {taskItem.task.length > 0 ? (
            taskItem.task.map((task) => (
              <TaskItem taskitem={task} key={task.id} />
            ))
          ) : (
            <Notask />
          )}

          <Box>
            {taskCount > 0 ? <Taskcount task={taskCount} /> : null}
            <CompletedTaskCount taskcount={1} />
          </Box>
        </Flex>
      </Container>
    </>
  );
}
