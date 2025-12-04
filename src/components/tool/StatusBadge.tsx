import type { ToolStatus } from "../../types/entities";
import { capitalizeFirst } from "../../utils/string-utils";

export interface StatusBadgeProps {
  status: ToolStatus;
  capitalize?: boolean;
  className?: string;
}

const gradientStyles: Record<ToolStatus, string> = {
  active: "bg-gradient-to-r from-success to-cyan-700",
  expiring: "bg-gradient-to-r from-orange-400 to-orange-700 text-background",
  unused: "bg-gradient-to-r from-error-dark to-pink-700 text-background",
};

export const StatusBadge = ({
  status,
  capitalize = true,
  className = "",
}: StatusBadgeProps) => {
  const displayText = capitalize ? capitalizeFirst(status) : status;
  const gradientClass = gradientStyles[status];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-white text-xs font-medium ${gradientClass} ${className}`}
    >
      {displayText}
    </span>
  );
};
