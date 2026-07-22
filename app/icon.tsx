import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08090b",
          border: "3px solid #f2a33d",
          borderRadius: 10,
          color: "#f2a33d",
          fontSize: 34,
          fontWeight: 700,
          fontFamily: "monospace",
        }}
      >
        VC
      </div>
    ),
    { ...size }
  );
}
