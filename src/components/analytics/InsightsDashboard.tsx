import { InformationCircleIcon as InfoIcon } from "@heroicons/react/24/outline";
import { CostOptimizationAlerts } from "./insights/CostOptimizationAlerts";
import { UnusedToolsWarnings } from "./insights/UnusedToolsWarnings";
import { ROICalculations } from "./insights/ROICalculations";
import { UsagePatterns } from "./insights/UsagePatterns";

export const InsightsDashboard = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <InfoIcon className="w-6 h-6 text-text-light" />
        <h2 className="text-xl font-semibold text-text-light">
          Insights Dashboard
        </h2>
      </div>
      <div className="flex flex-col gap-6">
        <CostOptimizationAlerts />
        <UnusedToolsWarnings />
        <ROICalculations />
        <UsagePatterns />
      </div>
    </section>
  );
};
