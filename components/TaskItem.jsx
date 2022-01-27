import { CloseIcon } from "@chakra-ui/icons";
import { Box, Checkbox, Flex, Spacer, Text, Tooltip } from "@chakra-ui/react";
import React from "react";

const TaskItem = ({ taskitem }) => {
  return (
    <>
      <Box
        cursor={"pointer"}
        bgColor={"white"}
        rounded={"lg"}
        boxShadow={"lg"}
        _hover={{ boxShadow: "xl" }}
        minH={"20"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        p={"3"}
      >
        <Box flex={"1"}>
          <Checkbox>
            <Text>{taskitem}</Text>
          </Checkbox>
        </Box>
        <Box>
          <Tooltip textTransform={"capitalize"} label={"remove this task"}>
            <CloseIcon />
          </Tooltip>
        </Box>
      </Box>
    </>
  );
};

export default TaskItem;
