import { useState, useCallback } from "react";
import { DEPARTMENTS, type DepartmentName } from "../types/entities/department";
import {
  TOOL_CATEGORIES,
  TOOL_STATUSES,
  MAX_TOOL_COST,
  type ToolStatus,
  type ToolCategory,
} from "../types/entities/tool";

export interface ToolFilters {
  departments: DepartmentName[];
  status: ToolStatus[];
  categories: ToolCategory[];
  costRange: [number, number];
}

const DEFAULT_FILTERS: ToolFilters = {
  departments: DEPARTMENTS,
  status: TOOL_STATUSES,
  categories: TOOL_CATEGORIES,
  costRange: [0, MAX_TOOL_COST],
};

export const useToolFilters = () => {
  const [filters, setFilters] = useState<ToolFilters>(DEFAULT_FILTERS);

  const setDepartments = useCallback((departments: DepartmentName[]) => {
    setFilters((prev) => ({ ...prev, departments }));
  }, []);

  const setStatus = useCallback((status: ToolStatus[]) => {
    setFilters((prev) => ({ ...prev, status }));
  }, []);

  const setCategories = useCallback((categories: ToolCategory[]) => {
    setFilters((prev) => ({ ...prev, categories }));
  }, []);

  const setCostRange = useCallback((costRange: [number, number]) => {
    setFilters((prev) => ({ ...prev, costRange }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
  }, []);

  return {
    filters,
    setDepartments,
    setStatus,
    setCategories,
    setCostRange,
    resetFilters,
  };
};
