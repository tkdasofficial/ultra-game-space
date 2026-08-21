import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Row, SectionLabel, Segmented, SliderRow, Toggle } from "@/components/settings-ui";

export const Route = createFileRoute("/settings/recording")({
  head: () => ({
    meta: [
      { title: "Recording Settings — Ultra Game Space" },
      {
        name: "description",
        content:
          "Set screen recording resolution up to 4K, frame rate, bitrate from 1 to 64 Mbps and audio source.",
      },
      { property: "og:title", content: "Recording Settings — Ultra Game Space" },
      {
        property: "og:description",
        content: "Resolution, FPS, bitrate slider and internal/mic/dual audio capture.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RecordingSettings,
});

function RecordingSettings() {
  const [res, setRes] = useState("1080P");
  const [fps, setFps] = useState("60");
  const [bitrate, setBitrate] = useState(24);
  const [audio, setAudio] = useState("INTERNAL");
  const [hud, setHud] = useState(false);
  const [cam, setCam] = useState(false);
  const [auto, setAuto] = useState(true);

  return (
    <div>
      <SectionLabel>Video</SectionLabel>
      <Row label="Resolution" hint>
        <Segmented options={["720P", "1080P", "2K", "4K"]} value={res} onChange={setRes} />
      </Row>
      <Row label="Frame Rate">
        <Segmented options={["30", "60", "90", "120"]} value={fps} onChange={setFps} />
      </Row>
      <SliderRow
        label="Bitrate"
        value={bitrate}
        min={1}
        max={64}
        step={1}
        unit=" MBPS"
        onChange={setBitrate}
      />

      <SectionLabel>Audio</SectionLabel>
      <Row label="Audio Source" hint>
        <Segmented options={["INTERNAL", "MIC", "DUAL"]} value={audio} onChange={setAudio} />
      </Row>

      <SectionLabel>Capture</SectionLabel>
      <Row label="Auto Record On Game Start">
        <Toggle value={auto} onChange={setAuto} />
      </Row>
      <Row label="Show Performance HUD">
        <Toggle value={hud} onChange={setHud} />
      </Row>
      <Row label="Front Camera Overlay">
        <Toggle value={cam} onChange={setCam} />
      </Row>
    </div>
  );
}
