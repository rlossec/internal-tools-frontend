import { NotificationsCounter } from "./elements/NotificationsCounter";
import { ProfileSettingsButton } from "./elements/ProfileSettingsButton";
import { SearchBar } from "./elements/SearchBar";
import { ThemeToggle } from "./elements/ThemeToggle";
import { UserDropdown } from "./elements/UserDropdown";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header className="bg-background-alt text-text">
      <div className="flex md:flex-row flex-col justify-between items-center p-4 border-b-2 border-border">
        {/* Logo + Navbar */}
        <div className="flex items-center gap-4">
          <div className="px-3 flex items-center gap-2">
            <img
              src={"/src/assets/react.svg"}
              alt="Logo Techcorp"
              className="w-10 h-10"
            />
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
