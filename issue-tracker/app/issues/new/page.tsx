import { Spinner } from "@/app/components";
import dynamic from "next/dynamic";

const IssueForm = dynamic(() => import("../_components/IssueForm"), { ssr: false, loading: () => <Spinner /> });

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;
