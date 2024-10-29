import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        'broken-bat-r4px944w7vwvc59q7-3000.app.github.dev','*.broken-bat-r4px944w7vwvc59q7-3000.app.github.dev','localhost:3000'
      ]
    }
  }  
};

export default nextConfig;
