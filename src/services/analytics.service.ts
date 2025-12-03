import { apiClient } from "../utils/api-client";
import { API_ENDPOINTS } from "../config/api";
import type { Analytics } from "../types/entities";

export const analyticsService = {
  async getAll(): Promise<Analytics> {
    return apiClient.get<Analytics>(API_ENDPOINTS.analytics);
  },
};
