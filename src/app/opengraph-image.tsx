import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/content/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const font = await readFile(
    join(
      process.cwd(),
      "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf"
    )
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "72px 80px",
          background: "#0e0e1a",
          fontFamily: "Geist",
        }}
      >
        {/* gradient accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
          }}
        />

        {/* logo mark */}
        <div
          style={{
            position: "absolute",
            top: 64,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          <span
            style={{
              fontSize: "22px",
              fontWeight: 600,
              color: "#f0f0ff",
              letterSpacing: "-0.02em",
            }}
          >
            {siteConfig.name}
          </span>
        </div>

        {/* main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#f0f0ff",
              maxWidth: "900px",
            }}
          >
            {siteConfig.tagline}
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#8888aa",
              maxWidth: "760px",
              lineHeight: 1.4,
            }}
          >
            {siteConfig.description}
          </div>
        </div>

        {/* domain */}
        <div
          style={{
            position: "absolute",
            bottom: "64px",
            right: "80px",
            fontSize: "20px",
            color: "#6366f1",
            letterSpacing: "0.01em",
          }}
        >
          {siteConfig.domain}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Geist", data: font, style: "normal", weight: 400 }],
    }
  );
}
