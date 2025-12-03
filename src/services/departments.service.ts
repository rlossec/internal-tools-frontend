import { apiClient } from "../utils/api-client";
import { API_ENDPOINTS } from "../config/api";
import type { Department } from "../types/entities";
import type { DepartmentsQueryParams } from "../types/api/list_departments";

export const departmentsService = {
  async getAll(params?: DepartmentsQueryParams): Promise<Department[]> {
    return apiClient.get<Department[]>(API_ENDPOINTS.departments, params);
  },

  async getById(id: number): Promise<Department> {
    return apiClient.get<Department>(`${API_ENDPOINTS.departments}/${id}`);
  },
};
