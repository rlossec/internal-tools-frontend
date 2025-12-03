import { IconButton } from "../../components/common/base/buttons/IconButton";
import { BellIcon } from "../../icons/state/BellIcon";

export const NotificationsCounter = () => {
  const handleClick = () => {
    // TODO: Implémenter l'ouverture des notifications
    console.log("2 notifications mockées");
  };

  return (
    <div className="relative">
      <IconButton
        icon={<BellIcon size={20} />}
        ariaLabel="Notifications"
        onClick={handleClick}
        variant="ghost"
        color="default"
        size="md"
      />
      {/* Badge rouge sans texte - juste un indicateur */}
      <div className="absolute top-1 right-1 w-3 h-3 bg-error rounded-full border-2 border-background-alt" />
    </div>
  );
};
