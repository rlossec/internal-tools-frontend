import type { DepartmentsQueryParams } from "../../../types/api/list_departments";

export const departmentsKeys = {
  all: ["departments"] as const,
  lists: () => [...departmentsKeys.all, "list"] as const,
  list: (params?: DepartmentsQueryParams) =>
    [...departmentsKeys.lists(), params] as const,
  details: () => [...departmentsKeys.all, "detail"] as const,
  detail: (id: number) => [...departmentsKeys.details(), id] as const,
};
