import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Row, SectionLabel, Segmented, Toggle } from "@/components/settings-ui";

export const Route = createFileRoute("/settings/display")({
  head: () => ({
    meta: [
      { title: "Display Settings — Ultra Game Space" },
      {
        name: "description",
        content:
          "Tune graphics quality from Smooth to Extreme, lock FPS up to Extreme and enable auto touch debugging in Ultra Game Space.",
      },
      { property: "og:title", content: "Display Settings — Ultra Game Space" },
      {
        property: "og:description",
        content: "Graphics presets, FPS lock and touch debugging for your game booster.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DisplaySettings,
});

function DisplaySettings() {
  const [graphics, setGraphics] = useState("HD");
  const [fps, setFps] = useState("60");
  const [touch, setTouch] = useState(false);
  const [antiAlias, setAntiAlias] = useState(true);
  const [hdrBoost, setHdrBoost] = useState(false);

  return (
    <div>
      <SectionLabel>Display</SectionLabel>
      <Row label="Graphics" hint>
        <Segmented
          options={["SMOOTH", "STANDARD", "HD", "FHD", "HDR", "ULTRA HDR", "EXTREME"]}
          value={graphics}
          onChange={setGraphics}
        />
      </Row>
      <Row label="HDR Color Boost" sub>
        <Toggle value={hdrBoost} onChange={setHdrBoost} />
      </Row>

      <SectionLabel>Frame Rate</SectionLabel>
      <Row label="FPS Settings" hint>
        <Segmented options={["AUTO", "60", "90", "120", "EXTREME"]} value={fps} onChange={setFps} />
      </Row>
      <Row label="Anti-Aliasing" sub>
        <Toggle value={antiAlias} onChange={setAntiAlias} />
      </Row>

      <SectionLabel>Developer</SectionLabel>
      <Row label="Auto Touch Debugging" hint>
        <Toggle value={touch} onChange={setTouch} />
      </Row>
    </div>
  );
}
