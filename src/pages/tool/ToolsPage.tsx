import { useMemo } from "react";
import { ToolCatalog } from "../../components/tool/ToolCatalog";
import { useTools } from "../../hooks/queries/tools/useTools";
import { useToolFilters } from "../../hooks/useToolFilters";
import { Loader } from "../../components/common/loader/Loader";
import { DEPARTMENTS } from "../../types/entities/department";
import {
  TOOL_CATEGORIES,
  TOOL_STATUSES,
  MAX_TOOL_COST,
} from "../../types/entities/tool";
import { RangeSlider } from "../../components/common/forms/simple/RangeSlider";
import { MultiSelectFilterDropdown } from "../../components/common/forms/advanced/MultiSelectFilterDropdown";
import { StatusFilter } from "../../components/common/forms/advanced/StatusFilter";
import { Paper } from "../../components/common/base/Paper";
import { FiltersHeader } from "../../components/tool/FiltersHeader";
import { filterTools, countActiveFilters } from "../../utils/tool-filters";

export const ToolsPage = () => {
  const { data: tools, isLoading, error } = useTools();
  const {
    filters,
    setDepartments,
    setStatus,
    setCategories,
    setCostRange,
    resetFilters,
  } = useToolFilters();

  // Compter les filtres actifs
  const activeFiltersCount = useMemo(
    () => countActiveFilters(filters),
    [filters]
  );

  // Filtrage des outils
  const filteredTools = useMemo(() => {
    if (!tools) return [];
    return filterTools(tools, filters);
  }, [tools, filters]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-error">Erreur lors du chargement des outils</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 py-6">
      {/* Filtres */}
      <Paper elevation="sm" padding="md" className="w-full">
        <div className="flex flex-col gap-4">
          <FiltersHeader
            activeFiltersCount={activeFiltersCount}
            onReset={resetFilters}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MultiSelectFilterDropdown
              label="Départements"
              options={DEPARTMENTS}
              selectedOptions={filters.departments}
              onChange={setDepartments}
            />

            <StatusFilter
              label="Statuts"
              options={TOOL_STATUSES}
              selectedOptions={filters.status}
              onChange={setStatus}
            />

            <MultiSelectFilterDropdown
              label="Catégories"
              options={TOOL_CATEGORIES}
              selectedOptions={filters.categories}
              onChange={setCategories}
            />

            <div className="flex flex-col gap-2">
              <RangeSlider
                label="Coût mensuel (€)"
                min={0}
                max={MAX_TOOL_COST}
                value={filters.costRange}
                onChange={setCostRange}
                className="w-full"
                showValue={true}
                showTooltip={true}
              />
            </div>
          </div>
        </div>
      </Paper>

      <ToolCatalog tools={filteredTools} />
    </div>
  );
};
