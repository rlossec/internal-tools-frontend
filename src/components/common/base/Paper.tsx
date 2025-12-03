import React from "react";

export type PaperElevation = "none" | "sm" | "md" | "lg";
export type PaperPadding = "none" | "sm" | "md" | "lg";

interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  elevation?: PaperElevation;
  padding?: PaperPadding;
  className?: string;
}

const elevationStyles: Record<PaperElevation, string> = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
};

const paddingStyles: Record<PaperPadding, string> = {
  none: "",
  sm: "p-2",
  md: "p-4",
  lg: "p-6",
};

export const Paper = React.forwardRef<HTMLDivElement, PaperProps>(
  (
    { children, elevation = "md", padding = "md", className = "", ...props },
    ref
  ) => {
    const baseClasses =
      "bg-background border border-border rounded-lg transition-shadow";
    const elevationClass = elevationStyles[elevation];
    const paddingClass = paddingStyles[padding];

    return (
      <div
        ref={ref}
        className={`${baseClasses} ${elevationClass} ${paddingClass} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Paper.displayName = "Paper";
