import React from "react";

interface DropdownMenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const DropdownMenuItem = ({
  children,
  onClick,
  disabled = false,
}: DropdownMenuItemProps) => {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`px-4 py-2 flex items-center gap-3 text-sm text-text transition ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "cursor-pointer hover:bg-background-alt"
      }`}
    >
      {children}
    </div>
  );
};
