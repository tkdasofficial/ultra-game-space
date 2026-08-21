import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mt-[2.2cqh] mb-[1.1cqh] flex items-center gap-[1.1cqh] first:mt-0">
      <span className="block h-[2.1cqh] w-[0.5cqh] bg-primary" />
      <span
        className="text-[2.1cqh] font-semibold uppercase tracking-[0.1em] text-foreground"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {children}
      </span>
    </div>
  );
}

export function Row({
  label,
  hint,
  children,
  sub,
}: {
  label: string;
  hint?: boolean;
  children: ReactNode;
  sub?: boolean;
}) {
  return (
    <div
      className={`mb-[0.8cqh] flex min-h-[6.4cqh] items-center gap-[1.6cqh] bg-panel px-[2cqh] py-[1cqh] ${
        sub ? "ml-[2.4cqh] border-l-[0.4cqh] border-primary/60" : ""
      }`}
    >
      <span className="flex-1 truncate text-[2.1cqh] text-foreground/90">{label}</span>
      {hint && (
        <span className="flex h-[2.4cqh] w-[2.4cqh] shrink-0 items-center justify-center bg-panel-2 text-[1.6cqh] text-muted-foreground">
          ?
        </span>
      )}
      {children}
    </div>
  );
}

export function Segmented({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex shrink-0 overflow-hidden border border-border">
      {options.map((o) => {
        const on = o === value;
        return (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            className={`min-w-[9cqh] px-[1.8cqh] py-[0.9cqh] text-[1.9cqh] font-semibold tracking-[0.04em] transition-colors ${
              on
                ? "bg-primary text-primary-foreground"
                : "bg-panel-2 text-muted-foreground hover:text-foreground"
            }`}
            style={on ? { boxShadow: "var(--glow-red)" } : undefined}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

export function Toggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex shrink-0 overflow-hidden border border-border">
      {[false, true].map((v) => {
        const on = v === value;
        return (
          <button
            key={String(v)}
            type="button"
            onClick={() => onChange(v)}
            className={`w-[10cqh] py-[0.9cqh] text-[1.9cqh] font-semibold transition-colors ${
              on
                ? v
                  ? "bg-primary text-primary-foreground"
                  : "bg-panel-2 text-foreground"
                : "bg-panel-2 text-muted-foreground hover:text-foreground"
            }`}
            style={on && v ? { boxShadow: "var(--glow-red)" } : undefined}
          >
            {v ? "On" : "Off"}
          </button>
        );
      })}
    </div>
  );
}

export function SliderRow({
  label,
  value,
  min,
  max,
  step = 1,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <Row label={label}>
      <span className="w-[10cqh] shrink-0 text-right text-[2.1cqh] font-semibold text-foreground">
        {value}
        {unit}
      </span>
      <button
        type="button"
        aria-label={`Decrease ${label}`}
        onClick={() => onChange(Math.max(min, value - step))}
        className="flex h-[2.8cqh] w-[2.8cqh] shrink-0 items-center justify-center bg-panel-2 text-[2cqh] text-foreground"
      >
        −
      </button>
      <div className="relative h-[2.8cqh] w-[40%] shrink-0">
        <div className="absolute top-1/2 h-[0.7cqh] w-full -translate-y-1/2 bg-track" />
        <div
          className="absolute top-1/2 h-[0.7cqh] -translate-y-1/2"
          style={{ width: `${pct}%`, background: "var(--gradient-bar)", boxShadow: "var(--glow-red)" }}
        />
        <div
          className="pointer-events-none absolute top-1/2 h-[2.4cqh] w-[0.9cqh] -translate-x-1/2 -translate-y-1/2 bg-foreground"
          style={{ left: `${pct}%` }}
        />
        <input
          type="range"
          aria-label={label}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />
      </div>
      <button
        type="button"
        aria-label={`Increase ${label}`}
        onClick={() => onChange(Math.min(max, value + step))}
        className="flex h-[2.8cqh] w-[2.8cqh] shrink-0 items-center justify-center bg-panel-2 text-[2cqh] text-foreground"
      >
        +
      </button>
    </Row>
  );
}
