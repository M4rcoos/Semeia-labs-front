/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.primi.com.br",
        port: "",
        pathname: "/_next/image/**",
      },
      {
        protocol: "https",
        hostname: "timeware.com.br",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.newtesc.com",
        port: "",
        pathname: "/images/home/**",
      },
      {
        protocol: "https",
        hostname: "blob.v0.dev", // Adicionado para o logo do Mercado Panorama e GestaoPro
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com", // Adicionado para o logo do Newtesc (se ainda for usado)
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos", // Adicionado para as imagens de depoimento
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
}

export default nextConfig
