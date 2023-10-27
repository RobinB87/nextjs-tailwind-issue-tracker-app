import prisma from "@/prisma/client";
import { Button } from "@radix-ui/themes";
import { notFound } from "next/navigation";

const DeleteIssueButton = async ({ issueId }: { issueId: number }) => {
  const issue = await prisma.issue.findUnique({ where: { id: issueId } });
  if (!issue) notFound();
  console.log("i", issue);
  //   await prisma.issue.delete({ where: { }})

  return <Button color="red">Delete Issue</Button>;
};

export default DeleteIssueButton;
