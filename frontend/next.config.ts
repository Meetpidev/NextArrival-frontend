<<<<<<< HEAD
import "dotenv/config";
import type { NextConfig } from "next";

console.log("[Next.js config] Loading configuration. process.env.BACKEND_ORIGIN is:", process.env.BACKEND_ORIGIN);
const backendOrigin = (process.env.BACKEND_ORIGIN || "https://nextarrival-backend-1.onrender.com").replace(/\/$/, "");
=======

import type { NextConfig } from "next";

console.log("[Next.js config] Loading configuration. process.env.BACKEND_ORIGIN is:", process.env.BACKEND_ORIGIN);
const backendOrigin = (process.env.BACKEND_ORIGIN || "http://localhost:5000").replace(/\/$/, "");
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
console.log("[Next.js config] Directing API rewrites to backend origin:", backendOrigin);

const nextConfig: NextConfig = {
  reactCompiler: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "recharts"],
  },
  
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${backendOrigin}/api/:path*`,
      },
      {
        source: "/uploads/:path*",
        destination: `${backendOrigin}/uploads/:path*`,
      },
    ];
  },
};

export default nextConfig;