import {
  TOOL_CATEGORIES as TOOL_CATEGORIES_CONST,
  TOOL_STATUSES as TOOL_STATUSES_CONST,
  MAX_TOOL_COST,
} from "../../config/settings";

// Types générés à partir des constantes dans settings.ts
export type ToolStatus = (typeof TOOL_STATUSES_CONST)[number];
export type ToolCategory = (typeof TOOL_CATEGORIES_CONST)[number];

// Exports des constantes comme tableaux mutables pour faciliter l'utilisation dans les props
export const TOOL_CATEGORIES = [...TOOL_CATEGORIES_CONST] as ToolCategory[];
export const TOOL_STATUSES = [...TOOL_STATUSES_CONST] as ToolStatus[];
export { MAX_TOOL_COST };

export interface Tool {
  id: number;
  name: string;
  description: string;
  vendor: string;
  category: ToolCategory;
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
