import { IconButton } from "../../components/common/base/buttons/IconButton";
import { SettingsIcon } from "../../icons/user-interface/SettingsIcon";

export const ProfileSettingsButton = () => {
  const handleClick = () => {
    // TODO: Implémenter l'ouverture des paramètres
    console.log("Ouvrir les paramètres");
  };

  return (
    <IconButton
      icon={<SettingsIcon size={20} />}
      ariaLabel="Paramètres"
      onClick={handleClick}
      variant="ghost"
      color="default"
      size="md"
    />
  );
};
