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
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com", // Adicionado para o logo do Mercado Panorama e GestaoPro
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
    unoptimized: false, // Alterado para false para habilitar a otimização de imagens
  },
}

export default nextConfig
