import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Row, SectionLabel, Segmented, SliderRow, Toggle } from "@/components/settings-ui";

export const Route = createFileRoute("/settings/sound")({
  head: () => ({
    meta: [
      { title: "Sound Settings — Ultra Game Space" },
      {
        name: "description",
        content:
          "Control tap sound, game start sound, app opening sound, master volume and audio output mode.",
      },
      { property: "og:title", content: "Sound Settings — Ultra Game Space" },
      {
        property: "og:description",
        content: "Tune UI sounds, alerts and audio output for your gaming space.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SoundSettings,
});

function SoundSettings() {
  const [master, setMaster] = useState(true);
  const [volume, setVolume] = useState(80);
  const [ui, setUi] = useState(60);
  const [tap, setTap] = useState(true);
  const [start, setStart] = useState(true);
  const [open, setOpen] = useState(true);
  const [boost, setBoost] = useState(true);
  const [warn, setWarn] = useState(true);
  const [output, setOutput] = useState("AUTO");

  return (
    <div>
      <SectionLabel>Master</SectionLabel>
      <Row label="Sound" hint>
        <Toggle value={master} onChange={setMaster} />
      </Row>
      <SliderRow label="Master Volume" value={volume} min={0} max={100} step={5} onChange={setVolume} />
      <SliderRow label="Interface Volume" value={ui} min={0} max={100} step={5} onChange={setUi} />
      <Row label="Audio Output">
        <Segmented options={["AUTO", "SPEAKER", "HEADSET"]} value={output} onChange={setOutput} />
      </Row>

      <SectionLabel>App Events</SectionLabel>
      <Row label="Tap Sound">
        <Toggle value={tap} onChange={setTap} />
      </Row>
      <Row label="Game Start Sound">
        <Toggle value={start} onChange={setStart} />
      </Row>
      <Row label="App Opening Sound">
        <Toggle value={open} onChange={setOpen} />
      </Row>
      <Row label="Boost Complete Sound">
        <Toggle value={boost} onChange={setBoost} />
      </Row>
      <Row label="Overheat Warning Sound" hint>
        <Toggle value={warn} onChange={setWarn} />
      </Row>
    </div>
  );
}
