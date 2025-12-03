import type { QueryParams } from "./common";

export interface ListToolsQueryParams extends QueryParams {
  status?: "active" | "unused" | "expiring";
  name_like?: string;
  category?: string;
  vendor?: string;
}

export interface ListToolsOptions {
  /** Filtrer par statut */
  status?: "active" | "unused" | "expiring";
  /** Rechercher par nom */
  search?: string;
  /** Filtrer par catégorie */
  category?: string;
  /** Filtrer par vendeur */
  vendor?: string;
  /** Trier par champ (name, monthly_cost, updated_at, etc.) */
  sortBy?: string;
  /** Ordre de tri */
  sortOrder?: "asc" | "desc";
  /** Limiter le nombre de résultats */
  limit?: number;
  /** Page pour la pagination */
  page?: number;
  /** Récupérer les outils récents (tri par updated_at desc) */
  recent?: boolean;
  /** Autres paramètres personnalisés */
  customParams?: Record<string, string | number | boolean>;
  /** Activer/désactiver la requête */
  enabled?: boolean;
}
