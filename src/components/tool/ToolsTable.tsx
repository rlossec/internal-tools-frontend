import { DataTable } from "../common/data/DataTable";
import type { Tool } from "../../types/entities";

interface ToolsTableProps {
  tools: Tool[];
}

export const ToolsTable = ({ tools }: ToolsTableProps) => {
  const columns = [
    { header: "Id", key: "id" as const, sortable: true },
    { header: "Name", key: "name" as const, sortable: true },
    {
      header: "Department",
      key: "owner_department" as const,
      sortable: true,
    },
    {
      header: "Users",
      key: "active_users_count" as const,
      sortable: true,
    },
    {
      header: "Monthly Cost",
      key: "monthly_cost" as const,
      sortable: true,
      render: (item: Tool) => `€${item.monthly_cost.toLocaleString()}`,
    },
    { header: "Status", key: "status" as const, sortable: true },
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
