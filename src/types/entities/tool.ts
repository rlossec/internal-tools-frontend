export type ToolStatus = "active" | "unused" | "expiring";

export interface Tool {
  id: number;
  name: string;
  description: string;
  vendor: string;
  category: string;
  monthly_cost: number;
  previous_month_cost: number;
  owner_department: string;
  status: ToolStatus;
  website_url: string;
  active_users_count: number;
  icon_url: string;
  created_at: string;
  updated_at: string;
}
