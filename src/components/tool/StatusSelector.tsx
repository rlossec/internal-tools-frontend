import type { ToolStatus } from "../../types/entities/tool";

interface StatusSelectorProps {
  value: ToolStatus; // Obligatoire : "active", "unused" ou "expiring"
  onChange: (value: ToolStatus) => void;
  error?: string;
  disabled?: boolean;
}

// Mapping des couleurs de gradient pour chaque statut (identique à StatusBadge)
const gradientStyles: Record<ToolStatus, string> = {
  active: "bg-gradient-to-r from-success to-cyan-700",
  expiring: "bg-gradient-to-r from-orange-400 to-orange-700 text-background",
  unused: "bg-gradient-to-r from-error-dark to-pink-700 text-background",
};

// Mapping des labels pour l'interface utilisateur
const statusLabels: Record<ToolStatus, string> = {
  active: "Active",
  unused: "Unused",
  expiring: "Expiring",
};

export const StatusSelector = ({
  value,
  onChange,
  error,
  disabled = false,
}: StatusSelectorProps) => {
  const selectedStatus = value;

  const handleStatusClick = (status: ToolStatus) => {
    if (!disabled) {
      onChange(status);
    }
  };

  const statuses: ToolStatus[] = ["active", "unused", "expiring"];

  return (
    <div className="space-y-2">
      <div className="flex flex-col gap-2">
        {statuses.map((status) => {
          const isSelected = selectedStatus === status;
          const gradientClass = gradientStyles[status];
          const displayText = statusLabels[status];

          return (
            <button
              key={status}
              type="button"
              onClick={() => handleStatusClick(status)}
              disabled={disabled}
              className={`flex items-center justify-between px-4 py-3 rounded-lg border transition-all ${
                isSelected
                  ? `${gradientClass} text-white border-transparent shadow-md`
                  : "border-border bg-background text-text-light hover:bg-background-alt"
              } ${
                disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              <span className="text-sm font-medium">{displayText}</span>
              {isSelected && (
                <span className="text-white text-xs font-bold">✓</span>
              )}
            </button>
          );
        })}
      </div>
      {error && <span className="text-sm text-error">{error}</span>}
    </div>
  );
};
