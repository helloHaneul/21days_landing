import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/terms", destination: "/terms/index.html" },
      { source: "/terms/", destination: "/terms/index.html" },
      { source: "/privacy", destination: "/privacy/index.html" },
      { source: "/privacy/", destination: "/privacy/index.html" },
      { source: "/auth/callback", destination: "/auth/callback/index.html" },
      { source: "/auth/callback/", destination: "/auth/callback/index.html" },
    ];
  },
};

export default withNextIntl(nextConfig);
