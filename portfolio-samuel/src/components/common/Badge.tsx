import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-slate-200",
        "light-border light-card light-text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
