import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

interface Props {
  status: Status;
}

const statusMap: Record<Status, { label: string; color: "red" | "violet" | "green" }> = {
  OPEN: { label: "OPEN", color: "red" },
  IN_PROGRESS: { label: "IN_PROGRESS", color: "violet" },
  CLOSED: { label: "CLOSED", color: "green" },
};

const IssueStatusBadge = ({ status }: Props) => {
  const statusMapped = statusMap[status];
  return <Badge color={statusMapped.color}>{statusMapped.label}</Badge>;
};

export default IssueStatusBadge;
