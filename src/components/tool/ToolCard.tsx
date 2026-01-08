import { useState } from "react";
import { useNavigate } from "react-router-dom";

import type { Tool } from "../../types/entities";

import { formatDate } from "../../utils/date-utils";

import { Badge } from "../common/base/Badge";
import { IconButton } from "../common/base/buttons/IconButton";
import { ModalConfirmation } from "../common/overlay/ModalConfirmation";

import { WrenchScrewdriverIcon as ToolIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/outline";
import { ArrowTopRightOnSquareIcon as ExternalLinkIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { StatusBadge } from "./StatusBadge";
import { useDeleteTool } from "../../hooks/queries/tools/useDeleteTool";

export const ToolCard = ({ tool }: { tool: Tool }) => {
  const navigate = useNavigate();
  const deleteTool = useDeleteTool();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleViewDetails = () => {
    navigate(`/tools/${tool.id}`);
  };
  const handleEdit = () => {
    navigate(`/tools/${tool.id}/edit`);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await deleteTool.mutateAsync(tool.id);
      setIsDeleteModalOpen(false);
    } catch (error) {
      // Error handling is done by React Query
      console.error("Failed to delete tool:", error);
    }
  };

  return (
    <div className="bg-background rounded-lg shadow-md p-6 flex flex-col h-full">
      {/* Tool Title section */}
      <div className="flex justify-between items-start mb-5">
        <div className="flex items-center gap-5 flex-1 min-w-0">
          <ToolIconProtected src={tool.icon_url} alt={tool.name} />
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-semibold text-text-light truncate mb-3">
              {tool.name}
            </h2>
            <div>
              <Badge size="sm" variant="default">
                {tool.category}
              </Badge>
            </div>
          </div>
        </div>
        {/* Quick actions */}
        <div className="flex gap-2 ml-4 shrink-0">
          <IconButton
            icon={<EyeIcon className="w-4 h-4" />}
            ariaLabel="View details"
            onClick={handleViewDetails}
            size="xs"
            variant="ghost"
            color="success"
          />
          <IconButton
            icon={<PencilIcon className="w-4 h-4" />}
            ariaLabel="Edit"
            onClick={handleEdit}
            size="xs"
            variant="ghost"
            color="warning"
          />
          {tool.website_url ? (
            <IconButton
              variant="ghost"
              icon={<ExternalLinkIcon className="w-4 h-4" />}
              ariaLabel="Open website"
              onClick={() => {
                window.open(tool.website_url, "_blank");
              }}
              size="xs"
              color="primary"
            />
          ) : null}
          <IconButton
            icon={<TrashIcon className="w-4 h-4" />}
            ariaLabel="Delete"
            onClick={handleDeleteClick}
            size="xs"
            variant="ghost"
            color="error"
          />
        </div>
      </div>

      {/* Tool Info section */}
      <div className="mb-6 flex-1">
        <p className="text-sm text-text-light line-clamp-2 leading-relaxed">
          {tool.description}
        </p>
      </div>

      {/* Badges section - réorganisée de manière plus propre */}
      <div className="flex flex-col gap-4 mt-auto pt-5 border-t border-border">
        {/* Ligne 1 : Statut et Coût */}
        <div className="flex items-center justify-between gap-4">
          <StatusBadge status={tool.status} />
          <Badge size="sm" variant="default">
            {tool.monthly_cost ? tool.monthly_cost.toLocaleString() : 0}€/month
          </Badge>
        </div>

        {/* Ligne 2 : Utilisateurs, Département et Date */}
        <div className="flex items-center gap-3 flex-wrap text-xs text-text-light">
          <span>
            {tool.active_users_count === 0
              ? "No user"
              : `${tool.active_users_count} user${
                  tool.active_users_count > 1 ? "s" : ""
                }`}
          </span>
          <span>•</span>
          <span>{tool.owner_department}</span>
          <span className="ml-auto text-text-light/70">
            {formatDate(tool.updated_at)}
          </span>
        </div>
      </div>

      <ModalConfirmation
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        title="Delete tool"
        message={`Are you sure you want to delete "${tool.name}"? This action cannot be undone.`}
        confirmLabel="Delete"
        cancelLabel="Cancel"
        confirmColor="error"
        isLoading={deleteTool.isPending}
      />
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
        className={`flex items-center justify-center rounded bg-background-alt border-2 border-border text-text-light ${className}`}
        style={{ width: size, height: size }}
      >
        {fallback ?? <ToolIcon className="w-4 h-4" />}
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
