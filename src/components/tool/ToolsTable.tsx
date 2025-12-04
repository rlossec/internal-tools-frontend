import { DataTable } from "../common/data/DataTable";
import { StatusBadge } from "./StatusBadge";

import type { Tool } from "../../types/entities";
import { DisplayToolIcon } from "./DisplayToolIcon";

interface ToolsTableProps {
  tools: Tool[];
}

export const ToolsTable = ({ tools }: ToolsTableProps) => {
  const columns = [
    {
      header: "Name",
      key: "name" as const,
      sortable: true,
      render: (item: Tool) => (
        <div className="flex items-center gap-2">
          <DisplayToolIcon iconUrl={item.icon_url} toolName={item.name} />
          <span>{item.name || "-"}</span>
        </div>
      ),
    },
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
      render: (item: Tool) =>
        item.monthly_cost != null
          ? `€${item.monthly_cost.toLocaleString()}`
          : "-",
    },
    {
      header: "Status",
      key: "status" as const,
      sortable: true,
      render: (item: Tool) => {
        return <StatusBadge status={item.status} />;
      },
    },
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
