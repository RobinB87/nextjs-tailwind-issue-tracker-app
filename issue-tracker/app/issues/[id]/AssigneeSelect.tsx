"use client";

import { Spinner } from "@/app/components";
import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const { data: users, error, isLoading } = useUsers();
  if (isLoading) return <Spinner />;
  if (error) return null;

  const assignIssue = (userId: string) =>
    axios
      .patch(`/api/issues/${issue.id}`, { assignedToUserId: userId === "_" ? null : userId })
      .catch(() => toast.error("Changes could not be saved."));

  return (
    <>
      <Select.Root defaultValue={issue.assignedToUserId || ""} onValueChange={assignIssue}>
        <Select.Trigger placeholder="Assign..." />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value="_">Unassigned</Select.Item>
            {users &&
              users.map((x) => (
                <Select.Item key={x.id} value={x.id}>
                  {x.name}
                </Select.Item>
              ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

const useUsers = () =>
  useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((x) => x.data),
    staleTime: 60 * 1000, // 60s
    retry: 3,
  });

export default AssigneeSelect;
