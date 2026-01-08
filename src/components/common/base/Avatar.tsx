import React from "react";
import { UserIcon as PersonIcon } from "@heroicons/react/24/outline";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: AvatarSize | number;
  className?: string;
  onClick?: () => void;
}

const sizeMap: Record<AvatarSize, number> = {
  xs: 24,
  sm: 32,
  md: 48,
  lg: 64,
  xl: 96,
};

const iconPaddingMap: Record<AvatarSize, string> = {
  xs: "p-1",
  sm: "p-2",
  md: "p-3",
  lg: "p-4",
  xl: "p-6",
};

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt = "", size = "md", className = "", onClick, ...props }, ref) => {
    const isCustomSize = typeof size === "number";
    const avatarSize = isCustomSize ? size : sizeMap[size as AvatarSize];
    const iconPadding = isCustomSize
      ? "p-3"
      : iconPaddingMap[size as AvatarSize];

    const baseClasses =
      "relative inline-block rounded-full overflow-hidden flex items-center justify-center bg-background-alt border-2 border-border transition-all duration-200";
    const clickableClasses = onClick
      ? "cursor-pointer hover:opacity-90 hover:ring-2 hover:ring-primary focus:outline-none focus:ring-2 focus:ring-primary"
      : "";

    return (
      <div
        ref={ref}
        className={`${baseClasses} ${clickableClasses} ${className}`}
        onClick={onClick}
        onKeyDown={(e) => {
          if (onClick && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            onClick();
          }
        }}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        aria-label={onClick ? alt || "Avatar" : undefined}
        style={
          isCustomSize ? { width: avatarSize, height: avatarSize } : undefined
        }
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            style={{ width: avatarSize, height: avatarSize }}
            loading="lazy"
          />
        ) : (
          <PersonIcon
            className={`w-full h-full ${iconPadding} rounded-full text-text`}
            style={{ width: avatarSize, height: avatarSize }}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";
