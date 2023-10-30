"use client";

import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";

const IssueStatusFilter = () => {
  const statuses: { label: string; value?: Status }[] = [
    {
      label: "All",
    },
    {
      label: "Open",
      value: "OPEN",
    },
    {
      label: "In Progress",
      value: "IN_PROGRESS",
    },
    {
      label: "Closed",
      value: "CLOSED",
    },
  ];

  return (
    <Select.Root>
      <Select.Trigger placeholder="Filter by status..."></Select.Trigger>
      <Select.Content>
        {statuses.map((x, i) => (
          <Select.Item key={i} value={x.value || "_"}>
            {x.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
