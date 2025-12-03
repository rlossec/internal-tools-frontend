import type { ListToolsQueryParams } from "../../../types/api/list_tools";

export const toolsKeys = {
  all: ["tools"] as const,
  lists: () => [...toolsKeys.all, "list"] as const,
  list: (params?: ListToolsQueryParams) =>
    [...toolsKeys.lists(), params] as const,
  details: () => [...toolsKeys.all, "detail"] as const,
  detail: (id: number) => [...toolsKeys.details(), id] as const,
};
