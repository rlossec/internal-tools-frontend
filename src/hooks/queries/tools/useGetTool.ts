import { useQuery } from "@tanstack/react-query";
import { toolsService } from "../../../services/tools.service";
import { toolsKeys } from "./tools-keys";

export function useGetTool(id: number, enabled: boolean = true) {
  return useQuery({
    queryKey: toolsKeys.detail(id),
    queryFn: () => toolsService.getById(id),
    enabled: enabled && !!id,
  });
}
