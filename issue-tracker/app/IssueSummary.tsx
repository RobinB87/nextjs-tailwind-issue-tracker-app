import { Status } from "@prisma/client";
import { Card, Flex, Link, Text } from "@radix-ui/themes";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: { label: string; value: number; status: Status }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In-progress Issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
  ];

  return (
    <Flex gap="4">
      {containers.map((x) => (
        <Card key={x.label}>
          <Flex direction="column" gap="1">
            <Link href={`/issues?status=${x.status}`} className="text-sm font-medium">
              {x.label}
            </Link>
            <Text size="5" className="font-bold">
              {x.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
