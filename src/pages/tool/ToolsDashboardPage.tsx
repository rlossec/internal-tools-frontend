import { useTools } from "../../hooks/queries/tools/useTools";
import { useDepartments } from "../../hooks/queries";
import { useAnalytics } from "../../hooks/queries/analytics/useAnalytics";

import { KPICard } from "../../components/KPICard";
import { ToolsTable } from "../../components/tool/ToolsTable";
import { Paper } from "../../components/common/base/Paper";
import { Loader } from "../../components/common/loader/Loader";

import { ArrowTrending } from "../../icons/state/ArrowTrending";
import { WrenchIcon } from "../../icons/user-interface/WrenchIcon";
import { BuildingIcon } from "../../icons/others/BuildingIcon";
import { UsersIcon } from "../../icons/user-interface/UsersIcon";

export const ToolsDashboardPage = () => {
  const {
    data: tools,
    isLoading: isLoadingTools,
    error: errorTools,
  } = useTools({ sortBy: "updated_at", sortOrder: "desc", limit: 8 });
  const {
    data: analytics,
    isLoading: isLoadingAnalytics,
    error: errorAnalytics,
  } = useAnalytics();

  const {
    data: departments,
    isLoading: isLoadingDepartments,
    error: errorDepartments,
  } = useDepartments();

  const isLoadingdForKPIs = isLoadingAnalytics || isLoadingDepartments;
  const hasErrorForKPIs = errorAnalytics || errorDepartments;

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
        {isLoadingdForKPIs ? (
          <Loader />
        ) : hasErrorForKPIs ? (
          <div className="text-error">
            {hasErrorForKPIs instanceof Error
              ? hasErrorForKPIs.message
              : "An error occurred"}
          </div>
        ) : analytics ? (
          <>
            <KPICard
              title="Monthly Budget"
              icon={<ArrowTrending className="w-6 h-6" />}
              value={`€${analytics.budget_overview.current_month_total.toLocaleString()}`}
              overValue={`€${analytics.budget_overview.monthly_limit.toLocaleString()}`}
              trend={analytics.kpi_trends.budget_change}
              color="bg-gradient-to-br from-emerald-300 to-teal-600"
            />
            <KPICard
              title="Active Tools"
              icon={<WrenchIcon className="w-6 h-6" />}
              value={String(tools?.length || 0)}
              trend={analytics.kpi_trends.tools_change}
              color="bg-gradient-to-br from-blue-400 to-purple-500"
            />
            <KPICard
              title="Departments"
              icon={<BuildingIcon className="w-6 h-6" />}
              value={String(departments?.length || 0)}
              trend={`${analytics.kpi_trends.departments_change}`}
              color="bg-gradient-to-br from-orange-400 to-red-500"
            />
            <KPICard
              title="Cost/User"
              icon={<UsersIcon className="w-6 h-6" />}
              value={`€${analytics.cost_analytics.cost_per_user.toLocaleString()}`}
              trend={analytics.kpi_trends.cost_per_user_change}
              color="bg-gradient-to-br from-pink-400 to-rose-500"
            />
          </>
        ) : null}
      </div>

      {/* Recent Tools Table Section */}
      <Paper className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold text-text-light">
            Recent Tools
          </h2>
          <p className="text-sm text-text-light/60">
            Overview of your organization's latest tools and their usage.
          </p>
        </div>

        {isLoadingTools ? (
          <Loader />
        ) : errorTools ? (
          <div className="text-error">
            {errorTools instanceof Error
              ? errorTools.message
              : "An error occurred"}
          </div>
        ) : tools && tools.length > 0 ? (
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
      </Paper>
    </div>
  );
};
