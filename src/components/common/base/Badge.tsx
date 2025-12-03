import React from "react";
import { CloseIcon } from "../../../icons/actions/CloseIcon";

export type BadgeVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "error";
export type BadgeSize = "sm" | "md" | "lg";

const variants = {
  default: "bg-background-alt text-text border border-border",
  primary: "bg-primary text-background",
  success: "bg-success text-background",
  warning: "bg-warning text-background",
  error: "bg-error text-background",
};

const sizes = {
  sm: "px-2 py-0.5 text-xs gap-1",
  md: "px-2.5 py-0.5 text-sm gap-1.5",
  lg: "px-3 py-1 text-base gap-2",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  removable = false,
  onRemove,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200";
  const variantClasses = variants[variant];
  const sizeClasses = sizes[size];
  const removableClasses = removable ? "pr-1" : "";

  return (
    <span
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${removableClasses} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {removable && onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="ml-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10 p-0.5 transition-colors focus:outline-none focus:ring-1 focus:ring-current"
          aria-label="Retirer le badge"
        >
          <CloseIcon size={12} />
        </button>
      )}
    </span>
  );
};
