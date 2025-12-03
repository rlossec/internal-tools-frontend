import type { QueryParams } from "./common";

export interface ListUsersQueryParams extends QueryParams {
  active?: boolean;
  department_id?: number;
  name_like?: string;
  role?: string;
}

export interface ListUsersOptions {
  /** Filtrer par statut actif/inactif */
  active?: boolean;
  /** Filtrer par département */
  departmentId?: number;
  /** Rechercher par nom */
  search?: string;
  /** Filtrer par rôle */
  role?: string;
  /** Trier par champ (name, joined_at, email, etc.) */
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
