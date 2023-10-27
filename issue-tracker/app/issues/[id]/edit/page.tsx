import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Spinner } from "@/app/components";
import dynamic from "next/dynamic";

const IssueForm = dynamic(() => import("../../_components/IssueForm"), { ssr: false, loading: () => <Spinner /> });

interface Props {
  params: { id: string };
}

const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: +params.id },
  });

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
