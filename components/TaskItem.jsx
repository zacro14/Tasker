import { CheckCircleIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Checkbox, Text, Tooltip } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { completedTask, removeTask } from "../redux/todos";

const TaskItem = ({ taskitem }) => {
  const dispatch = useDispatch();

  const handleRemoveTask = () => {
    taskitem ? dispatch(removeTask(taskitem.id)) : null;
  };

  const handleCheckbox = () => {
    dispatch(completedTask(taskitem.id));
  };

  return (
    <>
      <Box
        cursor={"pointer"}
        bgColor={taskitem.completed ? "green.200" : "white"}
        rounded={"lg"}
        boxShadow={"lg"}
        _hover={{ boxShadow: "xl" }}
        minH={"20"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        p={"3"}
      >
        <Box flex={"1"} display={"flex"} alignItems={"center"}>
          {taskitem.completed ? (
            <CheckCircleIcon mr="3" color={"green.500"} />
          ) : (
            <Checkbox onChange={handleCheckbox} pr={"3"} />
          )}

          <Text wordBreak={"break-word"} textTransform={"capitalize"}>
            {taskitem.task}
          </Text>
        </Box>
        <Box display={"flex"} alignItems={"flex-start"}>
          <Tooltip textTransform={"capitalize"} label={"remove this task"}>
            <CloseIcon onClick={handleRemoveTask} color={"red.500"} />
          </Tooltip>
        </Box>
      </Box>
    </>
  );
};

export default TaskItem;
