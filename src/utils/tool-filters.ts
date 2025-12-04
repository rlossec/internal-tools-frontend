import type { Tool } from "../types/entities/tool";
import type { ToolFilters } from "../hooks/useToolFilters";
import { DEPARTMENTS, type DepartmentName } from "../types/entities/department";
import {
  TOOL_CATEGORIES,
  TOOL_STATUSES,
  MAX_TOOL_COST,
} from "../types/entities/tool";

export const filterTools = (tools: Tool[], filters: ToolFilters): Tool[] => {
  return tools.filter((tool) => {
    // Filtre par département
    if (
      filters.departments.length > 0 &&
      !filters.departments.includes(tool.owner_department as DepartmentName)
    ) {
      return false;
    }

    // Filtre par statut
    if (filters.status.length > 0 && !filters.status.includes(tool.status)) {
      return false;
    }

    // Filtre par catégorie
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(tool.category)
    ) {
      return false;
    }

    // Filtre par coût
    if (
      tool.monthly_cost < filters.costRange[0] ||
      tool.monthly_cost > filters.costRange[1]
    ) {
      return false;
    }

    return true;
  });
};

export const countActiveFilters = (filters: ToolFilters): number => {
  let count = 0;

  if (
    filters.departments.length !== DEPARTMENTS.length ||
    filters.departments.length === 0
  ) {
    count++;
  }

  if (
    filters.status.length !== TOOL_STATUSES.length ||
    filters.status.length === 0
  ) {
    count++;
  }

  if (
    filters.categories.length !== TOOL_CATEGORIES.length ||
    filters.categories.length === 0
  ) {
    count++;
  }

  if (filters.costRange[0] !== 0 || filters.costRange[1] !== MAX_TOOL_COST) {
    count++;
  }

  return count;
};
