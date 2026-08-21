import { createFileRoute, Link } from "@tanstack/react-router";
import { X, Play, Plus, Gauge, Clock } from "lucide-react";

import cod from "@/assets/game-cod.jpg";
import pubg from "@/assets/game-pubg.jpg";
import asphalt from "@/assets/game-asphalt.jpg";

export const Route = createFileRoute("/lobby")({
  head: () => ({
    meta: [
      { title: "Game Lobby — Ultra Game Space" },
      {
        name: "description",
        content:
          "Ultra Game Space game lobby: launch boosted games, review playtime and per-game performance mode in a landscape gaming interface.",
      },
      { property: "og:title", content: "Game Lobby — Ultra Game Space" },
      {
        property: "og:description",
        content: "Launch boosted games and review playtime from the Ultra Game Space lobby.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Lobby,
});

const library = [
  { name: "CALL OF DUTY", img: cod, mode: "ULTRA", hours: "42h 10m", fps: "120 FPS" },
  { name: "PUBG MOBILE", img: pubg, mode: "EXTREME", hours: "78h 55m", fps: "90 FPS" },
  { name: "ASPHALT 9", img: asphalt, mode: "BALANCE", hours: "12h 30m", fps: "60 FPS" },
];

function Lobby() {
  return (
    <div className="force-landscape relative bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 60%)",
        }}
      />

      <main className="relative flex h-full flex-col px-[3.5cqh] py-[2.6cqh]">
        <header className="flex shrink-0 items-center justify-between">
          <div className="flex items-center gap-[1.6cqh]">
            <span
              aria-hidden
              className="block h-[3cqh] w-[3cqh] bg-primary"
              style={{
                clipPath: "polygon(0 42%, 62% 0, 100% 20%, 24% 100%, 0 100%)",
                boxShadow: "var(--glow-red)",
              }}
            />
            <h1
              className="text-[2.9cqh] font-bold tracking-[0.12em] text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              GAME LOBBY
            </h1>
          </div>
          <Link
            to="/"
            aria-label="Close lobby"
            className="clip-notch flex h-[5cqh] w-[5cqh] items-center justify-center border border-border bg-panel-2 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <X className="h-[2.6cqh] w-[2.6cqh]" />
          </Link>
        </header>

        <section className="mt-[2.4cqh] grid min-h-0 flex-1 grid-cols-4 gap-[2.4cqh]">
          {library.map((g) => (
            <article
              key={g.name}
              className="clip-notch flex flex-col border border-border bg-panel p-[1.6cqh]"
            >
              <div className="relative min-h-0 flex-1 overflow-hidden">
                <img
                  src={g.img}
                  alt={`${g.name} cover art`}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-full w-full object-cover"
                />
                <span
                  className="absolute left-0 top-0 bg-primary px-[1.2cqh] py-[0.4cqh] text-[1.6cqh] font-semibold tracking-[0.08em] text-primary-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {g.mode}
                </span>
              </div>
              <h2
                className="mt-[1.4cqh] truncate text-[2.2cqh] font-bold tracking-[0.06em] text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {g.name}
              </h2>
              <div className="mt-[0.8cqh] flex items-center justify-between text-[1.7cqh] text-muted-foreground">
                <span className="flex items-center gap-[0.6cqh]">
                  <Clock className="h-[1.8cqh] w-[1.8cqh]" /> {g.hours}
                </span>
                <span className="flex items-center gap-[0.6cqh]">
                  <Gauge className="h-[1.8cqh] w-[1.8cqh] text-primary" /> {g.fps}
                </span>
              </div>
              <button
                type="button"
                className="clip-tab-l mt-[1.4cqh] flex h-[5.4cqh] items-center justify-center gap-[1cqh] text-primary-foreground"
                style={{ background: "var(--gradient-red)", boxShadow: "var(--glow-red)" }}
              >
                <Play className="h-[2.2cqh] w-[2.2cqh]" />
                <span
                  className="text-[2cqh] font-bold tracking-[0.08em]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  LAUNCH
                </span>
              </button>
            </article>
          ))}

          <button
            type="button"
            className="clip-notch flex flex-col items-center justify-center gap-[1.4cqh] border border-dashed border-border bg-panel/60 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Plus className="h-[4cqh] w-[4cqh]" />
            <span
              className="text-[2cqh] font-semibold tracking-[0.1em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ADD GAME
            </span>
          </button>
        </section>
      </main>
    </div>
  );
}
