import { cn } from "@/lib/utils";

export function Marquee({
  items,
  reverse = false,
}: {
  items: readonly string[];
  reverse?: boolean;
}) {
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-shell relative flex overflow-hidden border-y border-white/10 py-5 light-border">
      <div
        className={cn(
          "marquee-track flex min-w-max gap-4",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        {repeatedItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-slate-200 light-border light-card light-text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
