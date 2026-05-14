import { Badge } from "@/components/common/Badge";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <Badge className="accent-border accent-soft mb-5">{eyebrow}</Badge>
      <h2 className="text-3xl font-black leading-tight text-white md:text-5xl light-text">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg light-text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
