import { Text } from "@chakra-ui/react";

const CompletedTaskCount = ({ task }) => {
  return (
    <>
      <Text>{task} Completed Task</Text>
    </>
  );
};

export default CompletedTaskCount;
