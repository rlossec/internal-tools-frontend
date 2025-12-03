import type { QueryParams } from "./common";

export interface DepartmentsQueryParams extends QueryParams {
  name_like?: string;
}

export interface ListDepartmentsOptions {
  /** Rechercher par nom */
  search?: string;
  /** Trier par champ (name, created_at, etc.) */
  sortBy?: string;
  /** Ordre de tri */
  sortOrder?: "asc" | "desc";
  /** Limiter le nombre de résultats */
  limit?: number;
  /** Page pour la pagination */
  page?: number;
  /** Autres paramètres personnalisés */
  customParams?: Record<string, string | number | boolean>;
  /** Activer/désactiver la requête */
  enabled?: boolean;
}
