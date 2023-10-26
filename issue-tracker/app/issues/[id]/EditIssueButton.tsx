import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { BsPencilSquare } from "react-icons/bs";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <BsPencilSquare />
      <Link href={`/issues/${issueId}/edit`}>Edit issue</Link>
    </Button>
  );
};

export default EditIssueButton;
