import { useQuery } from "@tanstack/react-query";
import { usersService } from "../../../services/users.service";
import { usersKeys } from "./users-keys";

export function useGetUser(id: number, enabled: boolean = true) {
  return useQuery({
    queryKey: usersKeys.detail(id),
    queryFn: () => usersService.getById(id),
    enabled: enabled && !!id,
  });
}
