import * as React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        `rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur-md
        dark:border-zinc-800 dark:bg-zinc-900/70`,
        className,
      )}
      {...props}
    />
  );
});
Card.displayName = "Card";

type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("mb-4 space-y-1", className)} {...props} />;
  },
);
CardHeader.displayName = "CardHeader";

type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          "text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50",
          className,
        )}
        {...props}
      />
    );
  },
);
CardTitle.displayName = "CardTitle";

type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-sm text-zinc-600 dark:text-zinc-400", className)}
        {...props}
      />
    );
  },
);
CardDescription.displayName = "CardDescription";

type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("space-y-3", className)} {...props} />;
  },
);
CardContent.displayName = "CardContent";

type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("mt-4 flex flex-wrap gap-2", className)} {...props} />;
  },
);
CardFooter.displayName = "CardFooter";

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
