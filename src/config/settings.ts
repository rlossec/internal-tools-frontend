export const FICTIVE_DATE = new Date("2025-05-01");

export const DEPARTMENTS = [
  "Engineering",
  "Marketing",
  "Design",
  "Sales",
  "HR",
  "Finance",
  "Operations",
] as const;

export const TOOL_CATEGORIES = [
  "Communication",
  "Development",
  "Design",
  "Productivity",
  "Analytics",
  "Security",
  "Marketing",
  "HR",
  "Finance",
  "Infrastructure",
] as const;

// Statuts d'outils - Source de vérité pour les statuts d'outils
export const TOOL_STATUSES = ["active", "unused", "expiring"] as const;

// Coût maximum pour les outils (utilisé pour les filtres)
export const MAX_TOOL_COST = 3000;
