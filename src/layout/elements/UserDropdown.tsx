import { DropdownMenu } from "../../components/common/layout/DropdownMenu";
import { DropdownMenuItem } from "../../components/common/layout/DropdownMenuItem";
import { Avatar } from "../../components/common/base/Avatar";
import { UserIcon as PersonIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon as SettingsIcon } from "@heroicons/react/24/outline";
import { PowerIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../../hooks/useTheme";

export const UserDropdown = () => {
  const { theme, toggleTheme } = useTheme();

  const handleNotificationsClick = () => {
    // TODO: Implémenter l'ouverture des notifications
    console.log("2 notifications mockées");
  };

  return (
    <DropdownMenu
      trigger={(isOpen) => (
        <div className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-background-alt transition-colors cursor-pointer">
          <Avatar size="sm" />
          <ChevronDownIcon
            className={`w-4 h-4 text-text-light transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      )}
    >
      <div className="py-2">
        {/* Actions pour tablette (md:lg:) - masquées sur desktop */}
        <div className="lg:hidden pb-2 border-b border-border mb-2">
          <DropdownMenuItem onClick={toggleTheme}>
            {theme === "light" ? (
              <MoonIcon className="w-4 h-4" />
            ) : (
              <SunIcon className="w-4 h-4" />
            )}
            <span>Theme</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleNotificationsClick}>
            <div className="relative">
              <BellIcon className="w-4 h-4" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full border-2 border-background-alt" />
            </div>
            <span>Notifications</span>
          </DropdownMenuItem>
        </div>
        {/* Menu utilisateur */}
        <DropdownMenuItem>
          <PersonIcon className="w-4 h-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon className="w-4 h-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <div className="border-t border-border mt-2 pt-2">
          <DropdownMenuItem>
            <PowerIcon className="w-4 h-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </div>
      </div>
    </DropdownMenu>
  );
};
