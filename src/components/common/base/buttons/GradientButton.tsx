import React from "react";

export type GradientButtonColor = "primary" | "success" | "warning" | "error";

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: GradientButtonColor;
  children: React.ReactNode;
  className?: string;
}

// Mapping des gradients pour chaque couleur
const gradientStyles: Record<GradientButtonColor, string> = {
  primary:
    "bg-gradient-to-r from-primary via-primary-dark to-primary-dark hover:from-primary-dark hover:via-primary hover:to-primary focus:ring-primary",
  success:
    "bg-gradient-to-r from-success via-success-dark to-success-dark hover:from-success-dark hover:via-success hover:to-success focus:ring-success",
  warning:
    "bg-gradient-to-r from-warning via-warning-dark to-warning-dark hover:from-warning-dark hover:via-warning hover:to-warning focus:ring-warning",
  error:
    "bg-gradient-to-r from-error via-error-dark to-error-dark hover:from-error-dark hover:via-error hover:to-error focus:ring-error",
};

export const GradientButton = React.forwardRef<
  HTMLButtonElement,
  GradientButtonProps
>(({ color = "primary", children, className = "", ...props }, ref) => {
  const baseStyles =
    "font-medium rounded-lg text-sm px-5 py-2.5 text-center text-background transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const gradientClass = gradientStyles[color];

  return (
    <button
      ref={ref}
      type="button"
      className={`${baseStyles} ${gradientClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

GradientButton.displayName = "GradientButton";
