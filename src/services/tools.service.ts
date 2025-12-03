import { API_ENDPOINTS } from "../config/api";
import { apiClient } from "../utils/api-client";

import type { Tool } from "../types/entities";
import type { ListToolsQueryParams } from "../types/api/list_tools";

export const toolsService = {
  async getAll(params?: ListToolsQueryParams): Promise<Tool[]> {
    return apiClient.get<Tool[]>(API_ENDPOINTS.tools, params);
  },

  async getById(id: number): Promise<Tool> {
    return apiClient.get<Tool>(`${API_ENDPOINTS.tools}/${id}`);
  },
};
