import prisma from "@/prisma/client";
import { Avatar, Card, Flex, Heading, Table } from "@radix-ui/themes";
import Link from "next/link";
import { IssueStatusBadge } from "./components";

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    include: { assignedToUser: true },
  });

  return (
    <Card>
      <Heading size="4" mb="5"></Heading>
      <Table.Root>
        <Table.Body>
          {issues.map((x) => (
            <Table.Row key={x.id}>
              <Table.Cell>
                <Flex justify="between">
                  <Flex direction="column" align="start" gap="2">
                    <Link href={`/issues/${x.id}`}>{x.title}</Link>
                    <IssueStatusBadge status={x.status} />
                  </Flex>
                  {x.assignedToUser && <Avatar src={x.assignedToUser.image!} fallback="?" size="2" radius="full" />}
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestIssues;
