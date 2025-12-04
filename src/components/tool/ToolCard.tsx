import { useState } from "react";
import { useNavigate } from "react-router-dom";

import type { Tool } from "../../types/entities";

import { formatDate } from "../../utils/date-utils";

import { Badge } from "../common/base/Badge";
import { IconButton } from "../common/base/buttons/IconButton";

import { ToolIcon } from "../../icons/others/ToolIcon";
import { PencilIcon } from "../../icons/actions/PencilIcon";
import { EyeIcon } from "../../icons/media-player/EyeIcon";
import { ExternalLinkIcon } from "../../icons/navigation/ExternalLinkIcon";
import { StatusBadge } from "./StatusBadge";

export const ToolCard = ({ tool }: { tool: Tool }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/tools/${tool.id}`);
  };
  const handleEdit = () => {
    navigate(`/tools/${tool.id}/edit`);
  };

  return (
    <div className="bg-background rounded-lg shadow-md p-4 flex flex-col h-full">
      {/* Tool Title section */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <ToolIconProtected src={tool.icon_url} alt={tool.name} />
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-semibold text-text-light truncate">
              {tool.name}
            </h2>
            <div className="mt-1">
              <Badge size="sm" variant="default">
                {tool.category}
              </Badge>
            </div>
          </div>
        </div>
        {/* Quick actions */}
        <div className="flex gap-1 ml-2 shrink-0">
          <IconButton
            icon={<EyeIcon />}
            ariaLabel="Voir les détails"
            onClick={handleViewDetails}
            size="sm"
            variant="ghost"
          />
          <IconButton
            icon={<PencilIcon />}
            ariaLabel="Modifier"
            onClick={handleEdit}
            size="sm"
            variant="ghost"
          />
          {tool.website_url ? (
            <IconButton
              variant="ghost"
              icon={<ExternalLinkIcon />}
              ariaLabel="Ouvrir le site web"
              onClick={() => {
                window.open(tool.website_url, "_blank");
              }}
              size="sm"
            />
          ) : null}
        </div>
      </div>

      {/* Tool Info section */}
      <div className="mb-4 flex-1">
        <p className="text-sm text-text-light line-clamp-2">
          {tool.description}
        </p>
      </div>

      {/* Badges section - réorganisée de manière plus propre */}
      <div className="flex flex-col gap-2 mt-auto pt-2 border-t border-border">
        {/* Ligne 1 : Statut et Coût */}
        <div className="flex items-center justify-between gap-2">
          <StatusBadge status={tool.status} />
          <Badge size="sm" variant="default">
            {tool.monthly_cost.toLocaleString()}€/mois
          </Badge>
        </div>

        {/* Ligne 2 : Utilisateurs, Département et Date */}
        <div className="flex items-center gap-2 flex-wrap text-xs text-text-light">
          <span>
            {tool.active_users_count} utilisateur
            {tool.active_users_count > 1 ? "s" : ""}
          </span>
          <span>•</span>
          <span>{tool.owner_department}</span>
          <span className="ml-auto text-text-light/70">
            {formatDate(tool.updated_at)}
          </span>
        </div>
      </div>
    </div>
  );
};

interface ToolIconProtectedProps {
  src?: string;
  alt: string;
  size?: number;
  fallback?: React.ReactNode;
  className?: string;
}

const ToolIconProtected: React.FC<ToolIconProtectedProps> = ({
  src,
  alt,
  size = 40,
  fallback,
  className = "",
}) => {
  const [error, setError] = useState(false);

  if (!src || error) {
    // Si pas d’URL ou erreur → fallback
    return (
      <div
        className={`flex items-center justify-center rounded bg-gray-200 text-gray-600 ${className}`}
        style={{ width: size, height: size }}
      >
        {fallback ?? <ToolIcon size={size * 0.6} />}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded object-contain ${className}`}
      onError={() => setError(true)}
    />
  );
};
