import { IconButton } from "../../components/common/base/buttons/IconButton";
import { useTheme } from "../../hooks/useTheme";
import { MoonIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      icon={
        theme === "light" ? (
          <MoonIcon className="w-5 h-5" />
        ) : (
          <SunIcon className="w-5 h-5 text-warning" />
        )
      }
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-background-alt transition-colors text-text-light cursor-pointer"
      aria-label={`Basculer vers le thème ${
        theme === "light" ? "sombre" : "clair"
      }`}
      title={`Thème actuel: ${theme === "light" ? "Clair" : "Sombre"}`}
    />
  );
};
