import { Button } from "../common/base/buttons/Button";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

interface FiltersHeaderProps {
  activeFiltersCount: number;
  onReset: () => void;
}

export const FiltersHeader = ({
  activeFiltersCount,
  onReset,
}: FiltersHeaderProps) => {
  return (
    <div className="flex items-center justify-between pb-2 border-b border-border">
      <div className="flex items-center gap-3">
        <h2 className="text-lg font-semibold text-text-light">Filters</h2>
        {activeFiltersCount > 0 && (
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary text-background">
            {activeFiltersCount} active{activeFiltersCount > 1 ? "s" : ""}
          </span>
        )}
      </div>
      {activeFiltersCount > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onReset}
          className="text-text-light hover:text-text"
        >
          <ArrowPathIcon className="w-4 h-4 mr-2" />
          Reset
        </Button>
      )}
    </div>
  );
};
