import { useQuery } from "@tanstack/react-query";
import { analyticsService } from "../../../services/analytics.service";
import { analyticsKeys } from "./analytics-keys";

export function useAnalytics() {
  return useQuery({
    queryKey: analyticsKeys.overview(),
    queryFn: () => analyticsService.getAll(),
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}
