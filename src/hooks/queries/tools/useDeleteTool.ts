import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toolsService } from "../../../services/tools.service";
import { toolsKeys } from "./tools-keys";

export function useDeleteTool() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => toolsService.delete(id),
    onSuccess: () => {
      // Invalidate and refetch tools list
      queryClient.invalidateQueries({ queryKey: toolsKeys.lists() });
      queryClient.invalidateQueries({ queryKey: toolsKeys.all });
    },
  });
}
