import { DataTable } from "../common/data/DataTable";

interface Tool {
  id: string;
  name: string;
  department: string;
  users_count: number;
  monthly_cost: number;
  status: string;
}

interface ToolsTableProps {
  tools: Tool[];
}

export const ToolsTable = ({ tools }: ToolsTableProps) => {
  const columns = [
    { header: "Id", key: "id" as const, sortable: true },
    { header: "Name", key: "name" as const, sortable: true },
    { header: "Department", key: "department" as const, sortable: true },
    {
      header: "Users",
      key: "users_count" as const,
      sortable: true,
    },
    {
      header: "Monthly Cost",
      key: "monthly_cost" as const,
      sortable: true,
      render: (item: Tool) => `€${item.monthly_cost.toLocaleString()}`,
    },
    { header: "Statut", key: "status" as const, sortable: true },
  ];

  return (
    <DataTable
      columns={columns}
      data={tools}
      keyExtractor={(tool) => tool.id}
      pagination={{ pageSize: 10, showPageSizeSelector: true }}
    />
  );
};
