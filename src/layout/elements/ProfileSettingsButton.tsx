import { IconButton } from "../../components/common/base/buttons/IconButton";
import { Cog6ToothIcon as SettingsIcon } from "@heroicons/react/24/outline";

export const ProfileSettingsButton = () => {
  const handleClick = () => {
    // TODO: Implémenter l'ouverture des paramètres
    console.log("Ouvrir les paramètres");
  };

  return (
    <IconButton
      icon={<SettingsIcon className="w-5 h-5" />}
      ariaLabel="Paramètres"
      onClick={handleClick}
      variant="ghost"
      color="default"
      size="md"
    />
  );
};
