import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#08090b",
          backgroundImage:
            "linear-gradient(rgba(237,240,244,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(237,240,244,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "#edf0f4",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", color: "#f2a33d", fontSize: 22, letterSpacing: 4 }}>
          &gt; ENGINEERING LOG
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 72, fontWeight: 700 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 30, color: "#9aa3ad" }}>
          {site.role}
        </div>
      </div>
    ),
    { ...size }
  );
}
