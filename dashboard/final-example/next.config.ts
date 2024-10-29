import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        'unhallowed-specter-wrg46rrxv6qjhv9w9-3000.app.github.dev','*.unhallowed-specter-wrg46rrxv6qjhv9w9-3000.app.github.dev','localhost:3000'
      ]
    }
  }  
};

export default nextConfig;
