import { useQuery } from "@tanstack/react-query";
import { departmentsService } from "../../../services/departments.service";
import type { DepartmentsQueryParams } from "../../../types/api/list_departments";
import type { ListDepartmentsOptions } from "../../../types/api/list_departments";
import { departmentsKeys } from "./departments-keys";

/**
 * Hook principal pour récupérer les départements
 * Permet d'appliquer tous les filtres simplement et de les combiner
 *
 * @example
 * // Récupérer tous les départements
 * const { data } = useDepartments();
 *
 * @example
 * // Rechercher par nom
 * const { data } = useDepartments({ search: "Engineering" });
 *
 * @example
 * // Combiner plusieurs filtres
 * const { data } = useDepartments({
 *   search: "Engineering",
 *   sortBy: "name",
 *   sortOrder: "asc",
 *   limit: 10
 * });
 */
export function useDepartments(options?: ListDepartmentsOptions) {
  const params = buildQueryParams(options);

  return useQuery({
    queryKey: departmentsKeys.list(params),
    queryFn: () => departmentsService.getAll(params),
    enabled: options?.enabled !== false,
  });
}

/**
 * Construit les paramètres de requête à partir des options
 */
function buildQueryParams(
  options?: ListDepartmentsOptions
): DepartmentsQueryParams {
  if (!options) return {};

  const params: DepartmentsQueryParams = {};

  // Recherche
  if (options.search) {
    params.name_like = options.search;
  }

  // Tri
  if (options.sortBy) {
    params._sort = options.sortBy;
    params._order = options.sortOrder || "asc";
  }

  // Pagination
  if (options.limit) {
    params._limit = options.limit;
  }

  if (options.page) {
    params._page = options.page;
  }

  // Paramètres personnalisés
  if (options.customParams) {
    Object.assign(params, options.customParams);
  }

  return params;
}
