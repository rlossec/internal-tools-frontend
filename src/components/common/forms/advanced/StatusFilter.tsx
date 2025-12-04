import { capitalizeFirst } from "../../../../utils/string-utils";
import type { ToolStatus } from "../../../../types/entities/tool";

interface StatusFilterProps {
  label?: string;
  options: ToolStatus[];
  selectedOptions: ToolStatus[];
  onChange: (options: ToolStatus[]) => void;
  className?: string;
}

// Mapping des couleurs de gradient pour chaque statut (identique à StatusBadge)
const gradientStyles: Record<ToolStatus, string> = {
  active: "bg-gradient-to-r from-success to-cyan-700",
  expiring: "bg-gradient-to-r from-orange-400 to-orange-700 text-background",
  unused: "bg-gradient-to-r from-error-dark to-pink-700 text-background",
};

export const StatusFilter = ({
  label,
  options,
  selectedOptions,
  onChange,
  className = "",
}: StatusFilterProps) => {
  const handleStatusClick = (option: ToolStatus) => {
    // Si l'option cliquée est déjà sélectionnée, la retirer du tableau
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter((opt) => opt !== option));
    }
    // Sinon, l'ajouter au tableau
    else {
      onChange([...selectedOptions, option]);
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="text-sm font-semibold text-text-light">{label}</label>
      )}
      <div className="flex flex-col gap-2">
        {options.map((option) => {
          const isSelected = selectedOptions.includes(option);
          const gradientClass = gradientStyles[option];
          const displayText = capitalizeFirst(option);

          return (
            <button
              key={option}
              type="button"
              onClick={() => handleStatusClick(option)}
              className={`flex items-center justify-between px-3 py-2 rounded-lg border transition-all ${
                isSelected
                  ? `${gradientClass} text-white border-transparent shadow-md`
                  : "border-border bg-background text-text-light hover:bg-background-alt"
              }`}
            >
              <span className="text-sm font-medium">{displayText}</span>
              {isSelected && <span className="text-white text-xs">✓</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};
