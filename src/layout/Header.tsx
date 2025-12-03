import { NotificationsCounter } from "./elements/NotificationsCounter";
import { ProfileSettingsButton } from "./elements/ProfileSettingsButton";
import { SearchBar } from "./elements/SearchBar";
import { ThemeToggle } from "./elements/ThemeToggle";
import { UserDropdown } from "./elements/UserDropdown";
import { NavBar } from "./NavBar";
import { BoltIcon } from "../icons/others/BoltIcon";

export const Header = () => {
  return (
    <header className="bg-background-alt text-text">
      <div className="flex md:flex-row flex-col justify-between items-center p-4 border-b-2 border-border">
        {/* Logo + Navbar */}
        <div className="flex items-center gap-4">
          <div className="px-2 flex items-center gap-2">
            <div className="bg-linear-to-br from-blue-600 to-purple-600 w-8 h-8 rounded-lg flex items-center justify-center">
              <BoltIcon className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-text-light">Techcorp</h1>
          </div>
          <NavBar />
        </div>
        {/* Search Bar and Buttons */}
        <div className="flex items-center gap-4">
          <SearchBar />
          <ThemeToggle />
          <NotificationsCounter />
          <ProfileSettingsButton />
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};
