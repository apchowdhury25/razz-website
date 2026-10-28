if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "file:./dev.db";
}
if (!process.env.SESSION_SECRET) {
  process.env.SESSION_SECRET = "matribhumi-hostinger-session-secret-32ch";
}
if (!process.env.NEXT_PUBLIC_SITE_URL) {
  process.env.NEXT_PUBLIC_SITE_URL = "https://razzcnpl.me";
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // The dev server is opened at 127.0.0.1 while Next treats localhost as the
  // host. Without this, the dev client bundle and HMR are blocked and the
  // header menu never hydrates.
  allowedDevOrigins: ["127.0.0.1"],
  devIndicators: false,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.razzcnpl.me" }],
        destination: "https://razzcnpl.me/:path*",
        permanent: true,
      },
      {
        source: "/locations/uae",
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/locations/uae/",
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/locations/malaysia",
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/locations/malaysia/",
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/locations/bashundhara",
        destination: "/locations/dhaka/bashundhara",
        permanent: true,
      },
      {
        source: "/locations/bashundhara/",
        destination: "/locations/dhaka/bashundhara",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
