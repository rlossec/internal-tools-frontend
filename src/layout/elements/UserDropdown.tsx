import { DropdownMenu } from "../../components/common/layout/DropdownMenu";
import { DropdownMenuItem } from "../../components/common/layout/DropdownMenuItem";
import { Avatar } from "../../components/common/base/Avatar";
import { PersonIcon } from "../../icons/user-interface/PersonIcon";
import { SettingsIcon } from "../../icons/user-interface/SettingsIcon";
import { PowerIcon } from "../../icons/state/PowerIcon";
import { ChevronDownIcon } from "../../icons/navigation/ChevronDownIcon";

export const UserDropdown = () => {
  return (
    <DropdownMenu
      trigger={(isOpen) => (
        <div className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-background-alt transition-colors cursor-pointer">
          <Avatar size="sm" />
          <ChevronDownIcon
            size={16}
            className={`text-text-light transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      )}
    >
      <div className="py-2">
        <DropdownMenuItem>
          <PersonIcon size={16} />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon size={16} />
          <span>Settings</span>
        </DropdownMenuItem>
        <div className="border-t border-border mt-2 pt-2">
          <DropdownMenuItem>
            <PowerIcon size={16} />
            <span>Logout</span>
          </DropdownMenuItem>
        </div>
      </div>
    </DropdownMenu>
  );
};
