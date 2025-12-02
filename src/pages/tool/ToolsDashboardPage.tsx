import { KPICard } from "../../components/KPICard";
import { ToolsTable } from "../../components/tool/ToolsTable";
import { Paper } from "../../components/common/base/Paper";

export const ToolsDashboardPage = () => {
  const tools = [
    {
      id: "1",
      name: "Tool 1",
      department: "Department 1",
      users_count: 10,
      monthly_cost: 100,
      status: "Active",
    },
  ];

  return (
    <div className="flex flex-col gap-6 py-6">
      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-text-light">
          Internal Tools Dashboard
        </h1>
        <p className="text-base text-text-light/70">
          Monitor and manage your organization's software tools and expenses.
        </p>
      </div>

      {/* KPI Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Monthly Budget"
          icon="💰"
          value={"€28,750"}
          overValue={"30k"}
        />
        <KPICard title="Active Tools" icon="🔧" value={"147"} />
        <KPICard title="Departments" icon="🏢" value={"8"} />
        <KPICard title="Cost/User" icon="💰" value={"€156"} />
      </div>

      {/* Recent Tools Table Section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold text-text-light">
            Recent Tools
          </h2>
          <p className="text-sm text-text-light/60">
            Overview of your organization's latest tools and their usage.
          </p>
        </div>

        {tools.length > 0 ? (
          <Paper className="p-0 overflow-hidden">
            <ToolsTable tools={tools} />
          </Paper>
        ) : (
          <Paper className="flex flex-col items-center justify-center py-12">
            <p className="text-text-light/60 text-center">
              No tools found. Start by adding your first tool.
            </p>
          </Paper>
        )}
      </div>
    </div>
  );
};
