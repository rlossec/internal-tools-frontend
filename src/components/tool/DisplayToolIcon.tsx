import { useState } from "react";
import { WrenchScrewdriverIcon as WrenchIcon } from "@heroicons/react/24/outline";

export const DisplayToolIcon = ({
  iconUrl,
  toolName,
  size = 24,
}: {
  iconUrl?: string;
  toolName: string;
  size?: number;
}) => {
  const [imageError, setImageError] = useState(false);

  // Si pas d'URL ou erreur de chargement, afficher WrenchIcon
  if (!iconUrl || imageError) {
    return (
      <WrenchIcon
        className="text-text-light"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <img
      src={iconUrl}
      alt={`${toolName} icon`}
      className="object-contain rounded"
      style={{ width: size, height: size }}
      onError={() => setImageError(true)}
    />
  );
};
