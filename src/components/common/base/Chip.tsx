import React from "react";
import { CloseIcon } from "../../../icons/actions/CloseIcon";

export type ChipVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "error";
export type ChipSize = "sm" | "md" | "lg";

const variants = {
  default: "bg-background-alt text-text hover:bg-background border-border",
  primary: "bg-primary text-background hover:bg-primary-dark",
  success: "bg-success text-background hover:bg-success-dark",
  warning: "bg-warning text-background hover:bg-warning-dark",
  error: "bg-error text-background hover:bg-error-dark",
};

const sizes = {
  sm: "text-xs px-2 py-0.5 gap-1",
  md: "text-sm px-3 py-1 gap-1.5",
  lg: "text-base px-4 py-1.5 gap-2",
};

export interface ChipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onClick"> {
  label: string;
  variant?: ChipVariant;
  size?: ChipSize;
  icon?: React.ReactNode;
  clickable?: boolean;
  removable?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
}

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      label,
      variant = "default",
      size = "md",
      icon,
      clickable = false,
      removable = false,
      onClick,
      onRemove,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-full transition-all duration-200 whitespace-nowrap font-medium";
    // Si className contient des classes de couleur (bg-, text-, etc.), on les utilise
    // Sinon, on utilise les variants par défaut
    const hasCustomColors =
      className.includes("bg-") || className.includes("text-");
    const variantClasses = hasCustomColors ? "" : variants[variant];
    const sizeClasses = sizes[size];
    const clickableClasses = clickable
      ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      : "";
    const removableClasses = removable ? "pr-1" : "";

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if (clickable && onClick) {
        onClick();
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (clickable && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        e.stopPropagation();
        if (onClick) {
          onClick();
        }
      }
    };

    return (
      <div
        ref={ref}
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${clickableClasses} ${removableClasses} ${className}`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role={clickable ? "button" : undefined}
        tabIndex={clickable ? 0 : undefined}
        aria-label={clickable ? label : undefined}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{label}</span>
        {removable && onRemove && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="ml-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10 p-0.5 transition-colors focus:outline-none focus:ring-1 focus:ring-current"
            aria-label={`Retirer ${label}`}
          >
            <CloseIcon size={12} />
          </button>
        )}
      </div>
    );
  }
);

Chip.displayName = "Chip";
