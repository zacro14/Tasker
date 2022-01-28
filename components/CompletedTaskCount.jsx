import { Text } from "@chakra-ui/react";

const CompletedTaskCount = ({ completedTask }) => {
  console.log(completedTask);
  return (
    <>
      <Text>({completedTask}) Completed Task</Text>
    </>
  );
};

export default CompletedTaskCount;
