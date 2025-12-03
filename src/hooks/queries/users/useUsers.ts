import { useQuery } from "@tanstack/react-query";
import { usersService } from "../../../services/users.service";
import type { ListUsersQueryParams } from "../../../types/api/list_users";
import type { ListUsersOptions } from "../../../types/api/list_users";
import { usersKeys } from "./users-keys";

export function useUsers(options?: ListUsersOptions) {
  const params = buildQueryParams(options);

  return useQuery({
    queryKey: usersKeys.list(params),
    queryFn: () => usersService.getAll(params),
    enabled: options?.enabled !== false,
  });
}

/**
 * Construit les paramètres de requête à partir des options
 */
function buildQueryParams(options?: ListUsersOptions): ListUsersQueryParams {
  if (!options) return {};

  const params: ListUsersQueryParams = {};

  // Filtres
  if (options.active !== undefined) {
    params.active = options.active;
  }

  if (options.departmentId) {
    params.department_id = options.departmentId;
  }

  if (options.search) {
    params.name_like = options.search;
  }

  if (options.role) {
    params.role = options.role;
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
