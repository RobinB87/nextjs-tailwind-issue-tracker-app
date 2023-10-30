import { Button, Flex, Link as RadixLink } from "@radix-ui/themes";
import IssueStatusFilter from "./IssueStatusFilter";

const IssueActions = () => {
  return (
    <Flex mb="5" justify="between">
      <IssueStatusFilter />
      <Button>
        <RadixLink href="/issues/new">New Issue</RadixLink>
      </Button>
    </Flex>
  );
};

export default IssueActions;
