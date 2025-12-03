import { useQuery } from "@tanstack/react-query";
import { toolsService } from "../../../services/tools.service";
import type { ListToolsQueryParams } from "../../../types/api/list_tools";
import type { ListToolsOptions } from "../../../types/api/list_tools";
import { toolsKeys } from "./tools-keys";

export function useTools(options?: ListToolsOptions) {
  const params = buildQueryParams(options);

  return useQuery({
    queryKey: toolsKeys.list(params),
    queryFn: () => toolsService.getAll(params),
    enabled: options?.enabled !== false,
  });
}

function buildQueryParams(options?: ListToolsOptions): ListToolsQueryParams {
  if (!options) return {};

  const params: ListToolsQueryParams = {};

  // Filtres
  if (options.status) {
    params.status = options.status;
  }

  if (options.search) {
    params.name_like = options.search;
  }

  if (options.category) {
    params.category = options.category;
  }

  if (options.vendor) {
    params.vendor = options.vendor;
  }

  // Tri
  if (options.recent) {
    // Outils récents : tri par updated_at desc
    params._sort = "updated_at";
    params._order = "desc";
  } else if (options.sortBy) {
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
