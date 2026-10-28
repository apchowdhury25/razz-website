import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F4FAFB",
          color: "#173447",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 6, textTransform: "uppercase", color: "#1C7C90" }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, lineHeight: 1.05, fontFamily: "Georgia" }}>
            {siteConfig.tagline}
          </div>
          <div style={{ marginTop: 24, fontSize: 28, color: "#5A7380", maxWidth: 860 }}>
            {siteConfig.description}
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#1C7C90" }}>{siteConfig.legalName}</div>
      </div>
    ),
    { ...size },
  );
}
