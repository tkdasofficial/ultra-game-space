import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Row, SectionLabel, Segmented, Toggle } from "@/components/settings-ui";

export const Route = createFileRoute("/settings/notification")({
  head: () => ({
    meta: [
      { title: "Notification Settings — Ultra Game Space" },
      {
        name: "description",
        content:
          "Control boost alerts, overheat warnings, game invites and do-not-disturb behaviour while gaming.",
      },
      { property: "og:title", content: "Notification Settings — Ultra Game Space" },
      {
        property: "og:description",
        content: "Boost alerts, overheat warnings and in-game do-not-disturb controls.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NotificationSettings,
});

function NotificationSettings() {
  const [boost, setBoost] = useState(true);
  const [overheat, setOverheat] = useState(true);
  const [lowRam, setLowRam] = useState(false);
  const [dnd, setDnd] = useState(true);
  const [calls, setCalls] = useState(false);
  const [banner, setBanner] = useState("MINI");
  const [chat, setChat] = useState(false);

  return (
    <div>
      <SectionLabel>Booster Alerts</SectionLabel>
      <Row label="Boost Completed Alert">
        <Toggle value={boost} onChange={setBoost} />
      </Row>
      <Row label="Overheat Warning" hint>
        <Toggle value={overheat} onChange={setOverheat} />
      </Row>
      <Row label="Low RAM Warning">
        <Toggle value={lowRam} onChange={setLowRam} />
      </Row>

      <SectionLabel>In-Game</SectionLabel>
      <Row label="Do Not Disturb In Match" hint>
        <Toggle value={dnd} onChange={setDnd} />
      </Row>
      <Row label="Allow Incoming Calls" sub>
        <Toggle value={calls} onChange={setCalls} />
      </Row>
      <Row label="Chat & Social Popups" sub>
        <Toggle value={chat} onChange={setChat} />
      </Row>
      <Row label="Banner Style">
        <Segmented options={["OFF", "MINI", "FULL"]} value={banner} onChange={setBanner} />
      </Row>
    </div>
  );
}
