import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Row, SectionLabel, Toggle } from "@/components/settings-ui";

export const Route = createFileRoute("/settings/system")({
  head: () => ({
    meta: [
      { title: "System Settings — Ultra Game Space" },
      {
        name: "description",
        content:
          "High-tech system toggles: force stop background activities and data, GPU/CPU/RAM debugging and force FPS lock.",
      },
      { property: "og:title", content: "System Settings — Ultra Game Space" },
      {
        property: "og:description",
        content: "Deep system controls for background processes, debugging and FPS locking.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SystemSettings,
});

function SystemSettings() {
  const [bgAct, setBgAct] = useState(true);
  const [bgData, setBgData] = useState(false);
  const [gpu, setGpu] = useState(false);
  const [cpu, setCpu] = useState(false);
  const [ram, setRam] = useState(false);
  const [fpsLock, setFpsLock] = useState(true);

  return (
    <div>
      <SectionLabel>Process Control</SectionLabel>
      <Row label="Force Stop Background Activities" hint>
        <Toggle value={bgAct} onChange={setBgAct} />
      </Row>
      <Row label="Force Stop Background Data" hint>
        <Toggle value={bgData} onChange={setBgData} />
      </Row>

      <SectionLabel>Debugging</SectionLabel>
      <Row label="GPU Debugging">
        <Toggle value={gpu} onChange={setGpu} />
      </Row>
      <Row label="CPU Debugging">
        <Toggle value={cpu} onChange={setCpu} />
      </Row>
      <Row label="RAM Debugging">
        <Toggle value={ram} onChange={setRam} />
      </Row>

      <SectionLabel>Frame Control</SectionLabel>
      <Row label="Force FPS Lock" hint>
        <Toggle value={fpsLock} onChange={setFpsLock} />
      </Row>
    </div>
  );
}
