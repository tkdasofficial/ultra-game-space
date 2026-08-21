import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Row, SectionLabel, Segmented, SliderRow, Toggle } from "@/components/settings-ui";

export const Route = createFileRoute("/settings/vibration")({
  head: () => ({
    meta: [
      { title: "Vibration Settings — Ultra Game Space" },
      {
        name: "description",
        content:
          "Set master haptics, game start vibration, tap feedback, boost pulse and vibration intensity.",
      },
      { property: "og:title", content: "Vibration Settings — Ultra Game Space" },
      {
        property: "og:description",
        content: "Haptic feedback controls for launches, taps and boost events.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VibrationSettings,
});

function VibrationSettings() {
  const [master, setMaster] = useState(true);
  const [start, setStart] = useState(true);
  const [tap, setTap] = useState(true);
  const [boost, setBoost] = useState(true);
  const [warn, setWarn] = useState(false);
  const [intensity, setIntensity] = useState(70);
  const [pattern, setPattern] = useState("SHARP");

  return (
    <div>
      <SectionLabel>Master</SectionLabel>
      <Row label="Vibration" hint>
        <Toggle value={master} onChange={setMaster} />
      </Row>
      <SliderRow label="Vibration Intensity" value={intensity} min={0} max={100} step={5} onChange={setIntensity} />
      <Row label="Haptic Pattern">
        <Segmented options={["SOFT", "SHARP", "HEAVY"]} value={pattern} onChange={setPattern} />
      </Row>

      <SectionLabel>App Events</SectionLabel>
      <Row label="Game Start Vibration">
        <Toggle value={start} onChange={setStart} />
      </Row>
      <Row label="Tap Vibration">
        <Toggle value={tap} onChange={setTap} />
      </Row>
      <Row label="Boost Complete Vibration">
        <Toggle value={boost} onChange={setBoost} />
      </Row>
      <Row label="Overheat Pulse Vibration" hint>
        <Toggle value={warn} onChange={setWarn} />
      </Row>
    </div>
  );
}
