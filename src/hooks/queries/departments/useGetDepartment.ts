import { useQuery } from "@tanstack/react-query";
import { departmentsService } from "../../../services/departments.service";
import { departmentsKeys } from "./departments-keys";

/**
 * Hook pour récupérer un département par son ID
 *
 * @example
 * // Récupérer un département par son ID
 * const { data: department, isLoading, error } = useGetDepartment(123);
 *
 * @example
 * // Conditionner la requête
 * const { data } = useGetDepartment(id, id > 0);
 */
export function useGetDepartment(id: number, enabled: boolean = true) {
  return useQuery({
    queryKey: departmentsKeys.detail(id),
    queryFn: () => departmentsService.getById(id),
    enabled: enabled && !!id,
  });
}
