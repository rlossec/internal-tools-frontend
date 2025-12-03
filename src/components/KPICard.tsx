import { Chip } from "./common/base/Chip";
import { Paper } from "./common/base/Paper";
import type { ReactNode } from "react";

interface KPICardProps {
  title: string;
  icon: ReactNode;
  value: string;
  trend: string;
  overValue?: string;
  /** Couleur de fond pour l'icône et le Chip de tendance */
  color?: string;
}

export const KPICard = ({
  title,
  icon,
  value,
  trend,
  overValue,
  color,
}: KPICardProps) => {
  return (
    <Paper className="h-full">
      <div className="flex flex-col gap-4 p-6">
        {/* Header avec titre et icône */}
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-text-light">{title}</h2>
          <div
            className={`${
              color || "bg-background-alt"
            } w-12 h-12 rounded-lg flex items-center justify-center text-white [&>svg]:text-white [&>svg]:stroke-white`}
          >
            {icon}
          </div>
        </div>

        {/* Valeur principale */}
        <div className="flex flex-col gap-1">
          <div className="text-3xl font-bold text-text-light">
            {value}
            {overValue && (
              <span className="text-lg font-normal text-text-light/60">
                {" "}
                / {overValue}
              </span>
            )}
          </div>
        </div>

        {/* Chip de tendance */}
        <div>
          <Chip
            label={trend}
            size="sm"
            className={`${color || "bg-background-alt"} font-medium text-white`}
          />
        </div>
      </div>
    </Paper>
  );
};
