import { API_ENDPOINTS } from "../config/api";
import { apiClient } from "../utils/api-client";

import type { User } from "../types/entities";
import type { ListUsersQueryParams } from "../types/api/list_users";

export const usersService = {
  async getAll(params?: ListUsersQueryParams): Promise<User[]> {
    return apiClient.get<User[]>(API_ENDPOINTS.users, params);
  },

  async getById(id: number): Promise<User> {
    return apiClient.get<User>(`${API_ENDPOINTS.users}/${id}`);
  },

  async getActive(): Promise<User[]> {
    return apiClient.get<User[]>(API_ENDPOINTS.users, { active: true });
  },
};
