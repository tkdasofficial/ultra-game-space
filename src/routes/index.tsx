import { createFileRoute } from "@tanstack/react-router";
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

function Index() {
  const [active, setActive] = useState(1);
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

      <main className="relative flex h-full flex-col px-[3.5vh] py-[2.6vh]">
        {/* Header */}
        <header className="flex shrink-0 items-center justify-between">
          <div className="flex items-center gap-[1.8vh]">
            <span
              aria-hidden
              className="block h-[3.4vh] w-[3.4vh] bg-primary"
              style={{
                clipPath: "polygon(0 42%, 62% 0, 100% 20%, 24% 100%, 0 100%)",
                boxShadow: "var(--glow-red)",
              }}
            />
            <h1
              className="font-display text-[3.1vh] font-bold tracking-[0.06em] text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ULTRA GAME SPACE
            </h1>
          </div>
          <button
            type="button"
            aria-label="Settings"
            className="clip-notch flex h-[5.4vh] w-[5.4vh] items-center justify-center border border-border bg-panel-2 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Settings className="h-[2.6vh] w-[2.6vh]" />
          </button>
        </header>

        {/* Body */}
        <section className="mt-[2.4vh] flex min-h-0 flex-1 gap-[3vh]">
          {/* Stats panel */}
          <div className="clip-notch flex w-[34%] flex-col justify-between border border-border bg-panel px-[2.2vh] py-[2vh]">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-[1.8vh]">
                <span className="clip-notch flex h-[5.2vh] w-[5.2vh] shrink-0 items-center justify-center border border-primary/60 bg-panel-2 text-primary">
                  <s.icon className="h-[2.4vh] w-[2.4vh]" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between">
                    <span
                      className="text-[1.9vh] font-semibold tracking-[0.08em] text-foreground"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {s.label}
                    </span>
                    <span className="text-[1.8vh] font-semibold text-foreground/90">
                      {s.value}
                    </span>
                  </div>
                  <div className="mt-[0.9vh] h-[0.9vh] w-full rounded-full bg-track">
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
            <div className="flex w-full items-center justify-between gap-[1vh]">
              <button
                type="button"
                aria-label="Previous game"
                onClick={() => setActive(prev)}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <ChevronLeft className="h-[3.4vh] w-[3.4vh]" />
              </button>

              {[prev, active, next].map((i, pos) => {
                const isActive = pos === 1;
                const g = games[i];
                return (
                  <button
                    type="button"
                    key={`${g.name}-${pos}`}
                    onClick={() => setActive(i)}
                    className="flex flex-col items-center gap-[1.4vh]"
                  >
                    <span
                      className="relative flex items-center justify-center rounded-full"
                      style={{
                        width: isActive ? "26vh" : "18vh",
                        height: isActive ? "26vh" : "18vh",
                        border: `2px solid ${isActive ? "var(--primary)" : "color-mix(in oklab, var(--primary) 45%, transparent)"}`,
                        boxShadow: isActive ? "var(--glow-red-lg)" : "var(--glow-red)",
                        padding: isActive ? "1.4vh" : "0.9vh",
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
                      <span className="text-[1.9vh] text-muted-foreground">{g.name}</span>
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
                <ChevronRight className="h-[3.4vh] w-[3.4vh]" />
              </button>
            </div>

            <h2
              className="mt-[2.4vh] text-[3.6vh] font-bold uppercase tracking-[0.05em] text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {games[active].name}
            </h2>
            <span
              className="mt-[1vh] block h-[0.5vh] w-[9vh] rounded-full bg-primary"
              style={{ boxShadow: "var(--glow-red)" }}
            />
          </div>
        </section>

        {/* Footer actions */}
        <footer className="mt-[2.4vh] flex shrink-0 items-center gap-[2.4vh]">
          <button
            type="button"
            className="clip-tab-l flex h-[8vh] w-[30%] items-center justify-center gap-[1.6vh] border border-border bg-panel text-foreground transition-colors hover:border-primary"
          >
            <Gauge className="h-[3vh] w-[3vh] text-primary" />
            <span
              className="text-[2vh] font-semibold tracking-[0.08em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              PERFORMANCE MODE
            </span>
          </button>

          <button
            type="button"
            className="clip-hex flex h-[9.4vh] flex-1 items-center justify-center text-primary-foreground"
            style={{ background: "var(--gradient-red)", boxShadow: "var(--glow-red-lg)" }}
          >
            <span
              className="text-[3.2vh] font-bold tracking-[0.06em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              BOOST NOW
            </span>
          </button>

          <button
            type="button"
            className="clip-tab-r flex h-[8vh] w-[30%] items-center justify-center gap-[1.6vh] border border-border bg-panel text-foreground transition-colors hover:border-primary"
          >
            <Gamepad2 className="h-[3vh] w-[3vh] text-primary" />
            <span
              className="text-[2vh] font-semibold tracking-[0.08em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              GAME LOBBY
            </span>
          </button>
        </footer>
      </main>
    </div>
  );
}
