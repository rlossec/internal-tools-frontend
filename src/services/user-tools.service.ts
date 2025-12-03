import { API_ENDPOINTS } from "../config/api";
import { apiClient } from "../utils/api-client";

import type { UserTool } from "../types/entities";

export const userToolsService = {
  async getAll(): Promise<UserTool[]> {
    return apiClient.get<UserTool[]>(API_ENDPOINTS.userTools);
  },

  async getByUserId(userId: number): Promise<UserTool[]> {
    return apiClient.get<UserTool[]>(
      `${API_ENDPOINTS.users}/${userId}${API_ENDPOINTS.userTools}`
    );
  },

  async getByToolId(toolId: number): Promise<UserTool[]> {
    return apiClient.get<UserTool[]>(API_ENDPOINTS.userTools, {
      tool_id: toolId,
    });
  },
};
