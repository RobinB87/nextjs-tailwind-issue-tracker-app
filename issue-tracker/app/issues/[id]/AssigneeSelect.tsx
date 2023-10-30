"use client";

import { Spinner } from "@/app/components";
import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((x) => x.data),
    staleTime: 60 * 1000, // 60s
    retry: 3,
  });

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <Select.Root
      defaultValue={issue.assignedToUserId || ""}
      onValueChange={(userId) =>
        axios.patch(`/api/issues/${issue.id}`, { assignedToUserId: userId === "_" ? null : userId })
      }
    >
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
  );
};

export default AssigneeSelect;
