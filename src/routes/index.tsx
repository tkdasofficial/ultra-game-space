import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Settings,
  Cpu,
  MonitorCog,
  MemoryStick,
  HardDrive,
  Thermometer,
  ChevronLeft,
  ChevronRight,
  Gauge,
  Gamepad2,
} from "lucide-react";

import cod from "@/assets/game-cod.jpg";
import pubg from "@/assets/game-pubg.jpg";
import asphalt from "@/assets/game-asphalt.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ultra Game Space — Mobile Game Booster UI" },
      {
        name: "description",
        content:
          "Ultra Game Space: a landscape gaming booster interface with live CPU, GPU, RAM, storage and temperature stats, game carousel and one-tap boost.",
      },
      { property: "og:title", content: "Ultra Game Space — Mobile Game Booster UI" },
      {
        property: "og:description",
        content:
          "Landscape game booster dashboard with performance stats, game carousel and one-tap boost.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { icon: Cpu, label: "CPU", value: "68%", pct: 68 },
  { icon: MonitorCog, label: "GPU", value: "72%", pct: 72 },
  { icon: MemoryStick, label: "RAM", value: "65%", pct: 65 },
  { icon: HardDrive, label: "STORAGE", value: "56%", pct: 56 },
  { icon: Thermometer, label: "TEMPERATURE", value: "38°C", pct: 46 },
];

const games = [
  { name: "Call of Duty", img: cod },
  { name: "PUBG MOBILE", img: pubg },
  { name: "Asphalt 9", img: asphalt },
];

const modes = ["ECONOMY", "BALANCE", "ULTRA", "EXTREME"] as const;

function Index() {
  const [active, setActive] = useState(1);
  const [mode, setMode] = useState<(typeof modes)[number]>("ECONOMY");
  const [modeOpen, setModeOpen] = useState(false);
  const boosted = mode !== "ECONOMY";
  const prev = (active + games.length - 1) % games.length;
  const next = (active + 1) % games.length;

  return (
    <div className="force-landscape relative bg-background">
      {/* ambient red streaks */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 60%), radial-gradient(80% 60% at 0% 100%, color-mix(in oklab, var(--primary) 10%, transparent), transparent 60%)",
        }}
      />

      <main className="relative flex h-full flex-col px-[3.5cqh] py-[2.6cqh]">
        {/* Header */}
        <header className="flex shrink-0 items-center justify-between">
          <div className="flex items-center gap-[1.8cqh]">
            <span
              aria-hidden
              className="block h-[3.4cqh] w-[3.4cqh] bg-primary"
              style={{
                clipPath: "polygon(0 42%, 62% 0, 100% 20%, 24% 100%, 0 100%)",
                boxShadow: "var(--glow-red)",
              }}
            />
            <h1
              className="font-display text-[3.1cqh] font-bold tracking-[0.06em] text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ULTRA GAME SPACE
            </h1>
          </div>
          <Link
            to="/settings/display"
            aria-label="Settings"
            className="clip-notch flex h-[5.4cqh] w-[5.4cqh] items-center justify-center border border-border bg-panel-2 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Settings className="h-[2.6cqh] w-[2.6cqh]" />
          </Link>

        </header>

        {/* Body */}
        <section className="mt-[2.4cqh] flex min-h-0 flex-1 gap-[3cqh]">
          {/* Stats panel */}
          <div className="clip-notch flex w-[34%] flex-col justify-between border border-border bg-panel px-[2.2cqh] py-[2cqh]">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-[1.8cqh]">
                <span className="clip-notch flex h-[7cqh] w-[7cqh] shrink-0 items-center justify-center border border-primary/60 bg-panel-2 text-primary">
                  <s.icon className="h-[3.4cqh] w-[3.4cqh]" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between">
                    <span
                      className="text-[2.4cqh] font-semibold tracking-[0.08em] text-foreground"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {s.label}
                    </span>
                    <span className="text-[2.3cqh] font-semibold text-foreground/90">
                      {s.value}
                    </span>
                  </div>
                  <div className="mt-[0.9cqh] h-[0.9cqh] w-full rounded-full bg-track">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${s.pct}%`,
                        background: "var(--gradient-bar)",
                        boxShadow: "var(--glow-red)",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel */}
          <div className="relative flex flex-1 flex-col items-center justify-center">
            <div className="flex w-full items-center justify-between gap-[1cqh]">
              <button
                type="button"
                aria-label="Previous game"
                onClick={() => setActive(prev)}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <ChevronLeft className="h-[3.4cqh] w-[3.4cqh]" />
              </button>

              {[prev, active, next].map((i, pos) => {
                const isActive = pos === 1;
                const g = games[i]!;
                return (
                  <button
                    type="button"
                    key={`${g.name}-${pos}`}
                    onClick={() => setActive(i)}
                    className="flex flex-col items-center gap-[1.4cqh]"
                  >
                    <span
                      className="relative flex items-center justify-center rounded-full"
                      style={{
                        width: isActive ? "26cqh" : "18cqh",
                        height: isActive ? "26cqh" : "18cqh",
                        border: `2px solid ${isActive ? "var(--primary)" : "color-mix(in oklab, var(--primary) 45%, transparent)"}`,
                        boxShadow: isActive ? "var(--glow-red-lg)" : "var(--glow-red)",
                        padding: isActive ? "1.4cqh" : "0.9cqh",
                      }}
                    >
                      <img
                        src={g.img}
                        alt={`${g.name} cover art`}
                        loading="lazy"
                        width={512}
                        height={512}
                        className="h-full w-full rounded-full object-cover"
                        style={{ opacity: isActive ? 1 : 0.65 }}
                      />
                    </span>
                    {!isActive && (
                      <span className="text-[1.9cqh] text-muted-foreground">{g.name}</span>
                    )}
                  </button>
                );
              })}

              <button
                type="button"
                aria-label="Next game"
                onClick={() => setActive(next)}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <ChevronRight className="h-[3.4cqh] w-[3.4cqh]" />
              </button>
            </div>

            <h2
              className="mt-[2.4cqh] text-[3.6cqh] font-bold uppercase tracking-[0.05em] text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {games[active]!.name}
            </h2>
            <span
              className="mt-[1cqh] block h-[0.5cqh] w-[9cqh] rounded-full bg-primary"
              style={{ boxShadow: "var(--glow-red)" }}
            />
          </div>
        </section>

        {/* Footer actions */}
        <footer className="mt-[2.4cqh] flex shrink-0 items-center gap-[2.4cqh]">
          <div className="relative w-[30%]">
            {modeOpen && (
              <div className="absolute bottom-[9.4cqh] left-0 z-10 w-full border border-border bg-panel p-[0.8cqh]">
                {modes.map((m) => {
                  const on = m === mode;
                  return (
                    <button
                      key={m}
                      type="button"
                      onClick={() => {
                        setMode(m);
                        setModeOpen(false);
                      }}
                      className={`mb-[0.5cqh] flex w-full items-center justify-between px-[1.6cqh] py-[1.1cqh] text-[2cqh] font-semibold tracking-[0.08em] transition-colors last:mb-0 ${
                        on
                          ? "bg-primary text-primary-foreground"
                          : "bg-panel-2 text-muted-foreground hover:text-foreground"
                      }`}
                      style={{
                        fontFamily: "var(--font-display)",
                        ...(on ? { boxShadow: "var(--glow-red)" } : {}),
                      }}
                    >
                      {m}
                    </button>
                  );
                })}
              </div>
            )}
            <button
              type="button"
              aria-expanded={modeOpen}
              onClick={() => setModeOpen((o) => !o)}
              className={`clip-tab-l flex h-[8cqh] w-full items-center justify-center gap-[1.6cqh] transition-colors ${
                boosted
                  ? "text-primary-foreground"
                  : "border border-border bg-panel text-foreground hover:border-primary"
              }`}
              style={
                boosted
                  ? { background: "var(--gradient-red)", boxShadow: "var(--glow-red-lg)" }
                  : undefined
              }
            >
              <Gauge
                className={`h-[3cqh] w-[3cqh] ${boosted ? "text-primary-foreground" : "text-primary"}`}
              />
              <span
                className="text-[2cqh] font-semibold tracking-[0.08em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {boosted ? mode : "PERFORMANCE MODE"}
              </span>
            </button>
          </div>

          <button
            type="button"
            className="clip-hex flex h-[9.4cqh] flex-1 items-center justify-center text-primary-foreground"
            style={{ background: "var(--gradient-red)", boxShadow: "var(--glow-red-lg)" }}
          >
            <span
              className="text-[3.2cqh] font-bold tracking-[0.06em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              BOOST NOW
            </span>
          </button>

          <Link
            to="/lobby"
            className="clip-tab-r flex h-[8cqh] w-[30%] items-center justify-center gap-[1.6cqh] border border-border bg-panel text-foreground transition-colors hover:border-primary"
          >
            <Gamepad2 className="h-[3cqh] w-[3cqh] text-primary" />
            <span
              className="text-[2cqh] font-semibold tracking-[0.08em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              GAME LOBBY
            </span>
          </Link>
        </footer>
      </main>
    </div>
  );
}
