import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { X } from "lucide-react";

export const Route = createFileRoute("/settings")({
  component: SettingsLayout,
});

const nav = [
  { label: "DISPLAY", to: "/settings/display" },
  { label: "NOTIFICATION", to: "/settings/notification" },
  { label: "VIBRATION", to: "/settings/vibration" },
  { label: "SOUND", to: "/settings/sound" },
  { label: "RECORDING", to: "/settings/recording" },
  { label: "SYSTEM", to: "/settings/system" },
] as const;

function SettingsLayout() {
  return (
    <div className="force-landscape relative bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 80% 0%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 60%)",
        }}
      />
      <div className="relative flex h-full">
        {/* Left nav */}
        <aside className="flex w-[20%] shrink-0 flex-col bg-panel py-[3cqh]">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative block px-[3cqh] py-[2cqh] text-[2.2cqh] font-semibold tracking-[0.08em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{
                className:
                  "relative block px-[3cqh] py-[2cqh] text-[2.2cqh] font-semibold tracking-[0.08em] clip-tab-l bg-primary text-primary-foreground",
              }}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {n.label}
            </Link>
          ))}
          <div className="mt-auto px-[3cqh] text-[1.8cqh] text-muted-foreground">
            ULTRA GAME SPACE v1.0
          </div>
        </aside>

        {/* Content */}
        <main className="flex min-w-0 flex-1 flex-col px-[3cqh] py-[2.4cqh]">
          <header className="flex shrink-0 items-center justify-end gap-[2cqh]">
            <h1
              className="text-[2.8cqh] font-bold tracking-[0.14em] text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              SETTINGS
            </h1>
            <Link
              to="/"
              aria-label="Close settings"
              className="clip-notch flex h-[5cqh] w-[5cqh] items-center justify-center border border-border bg-panel-2 text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <X className="h-[2.6cqh] w-[2.6cqh]" />
            </Link>
          </header>

          <div className="mt-[1.6cqh] min-h-0 flex-1 overflow-y-auto pr-[1cqh]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
