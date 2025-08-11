"use client"

import { useState, useEffect } from "react"
import Image from "next/image" // Importar o componente Image
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Palette,
  Search,
  Smartphone,
  Bot,
  Code,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Target,
  Zap,
  Brain,
  Database,
  Cpu,
  Network,
  ArrowDown,
  Quote,
} from "lucide-react"

export default function SemeiaLabs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Criação de Logos",
      description: "Identidades visuais únicas que capturam a essência da sua marca",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Google Ads",
      description: "Campanhas otimizadas que geram resultados mensuráveis",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Meta Ads",
      description: "Estratégias criativas para dominar as redes sociais",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Automações",
      description: "Fluxos inteligentes que otimizam seus processos",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Sites & Landing Pages",
      description: "Páginas de alta conversão e experiência excepcional",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  // Floating tech elements
  const techElements = [
    { icon: <Brain className="w-6 h-6" />, delay: "0s", duration: "20s" },
    { icon: <Database className="w-5 h-5" />, delay: "2s", duration: "25s" },
    { icon: <Cpu className="w-7 h-7" />, delay: "4s", duration: "18s" },
    { icon: <Network className="w-6 h-6" />, delay: "6s", duration: "22s" },
    { icon: <Code className="w-5 h-5" />, delay: "8s", duration: "24s" },
    { icon: <Bot className="w-6 h-6" />, delay: "10s", duration: "19s" },
  ]

  const partnerLogos = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%281%29-aDwPXMVQS0pOCqZopMIc20oZxE7lpk.png",
      alt: "Mercado Panorama Logo",
      width: 300,
      height: 150,
      bgColor: "bg-red-700", // Fundo vermelho para este logo
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3a89d916f_logo.png-puCqMgiB0mOvg8x2yAgUnbG0wY3CTv.jpeg",
      alt: "GestaoPro Logo",
      width: 200,
      height: 100,
      bgColor: "bg-white", // Fundo branco para este logo
    },
  ]

  const testimonials = [
    {
      quote:
        "A Semeia Labs transformou nossa presença digital. O aumento no engajamento e nas vendas foi impressionante!",
      name: "Ana Paula",
      title: "CEO, Startup Inovadora",
      avatar: "https://picsum.photos/id/1005/64/64", // Imagem de pessoa
    },
    {
      quote:
        "Profissionalismo e resultados! As automações criadas otimizaram nossos processos e economizaram um tempo valioso.",
      name: "Carlos Eduardo",
      title: "Diretor de Operações, Empresa de Logística",
      avatar: "https://picsum.photos/id/1011/64/64", // Imagem de pessoa
    },
    {
      quote: "Nossa nova landing page é um sucesso! Design impecável e conversão acima das expectativas. Recomendo!",
      name: "Mariana Silva",
      title: "Gerente de Marketing, E-commerce de Moda",
      avatar: "https://picsum.photos/id/1027/64/64", // Imagem de pessoa
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Tech Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-teal-800/90 to-blue-900/90"></div>

        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        </div>

        {/* Code Rain Effect */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-emerald-400 text-xs font-mono animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              >
                {["01", "10", "11", "00", "AI", "ML", "API", "SQL", "JS", "CSS"][Math.floor(Math.random() * 10)]}
              </div>
            ))}
          </div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0">
          {techElements.map((element, index) => (
            <div
              key={index}
              className="absolute text-emerald-400/30 animate-float"
              style={{
                left: `${10 + index * 15}%`,
                top: `${20 + index * 10}%`,
                animationDelay: element.delay,
                animationDuration: element.duration,
              }}
            >
              {element.icon}
            </div>
          ))}
        </div>

        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="20" cy="20" r="3" fill="currentColor" />
                <circle cx="80" cy="80" r="3" fill="currentColor" />
                <path d="M50,20 L50,50 L80,50" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" className="text-emerald-400" />
          </svg>
        </div>

        {/* Floating Data Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/40 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Content */}
        <div
          className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Badge className="mb-6 bg-emerald-500/20 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/30 transition-all duration-300 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Agência Digital Inovadora
          </Badge>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Semeia Labs
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-emerald-200 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            Plantando ideias, colhendo inovação
          </p>

          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Transformamos visões em realidade digital através de estratégias criativas, inteligência artificial e
            tecnologia de ponta
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-6 text-lg group shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
            >
              Nossos Projetos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-400/30 text-emerald-300 hover:bg-emerald-500/10 font-semibold px-8 py-6 text-lg bg-transparent backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Fale Conosco
            </Button>
          </div>

          {/* Tech Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-1">AI</div>
              <div className="text-sm text-white/60">Powered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">24/7</div>
              <div className="text-sm text-white/60">Automação</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">100+</div>
              <div className="text-sm text-white/60">Projetos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400 mb-1">∞</div>
              <div className="text-sm text-white/60">Inovação</div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator for Mobile */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden z-20">
          <a href="#about" className="flex flex-col items-center text-white/70 animate-bounce">
            <ArrowDown className="w-8 h-8" />
            <span className="text-sm mt-2">Rolar para baixo</span>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-50 relative">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(16,185,129,0.3)_1px,transparent_0)] bg-[size:20px_20px]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
            <Target className="w-4 h-4 mr-2" />
            Sobre Nós
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
            Inovação que <span className="text-emerald-600">transforma</span>
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            A Semeia Labs é uma agência que une propósito e inovação para ajudar empresas a crescerem de forma
            estratégica e sustentável. Utilizamos inteligência artificial, automação e tecnologias emergentes para criar
            soluções que realmente fazem a diferença.
          </p>

          {/* Tech Icons */}
          <div className="flex justify-center gap-8 mt-12">
            {[Brain, Database, Cpu, Network, Bot, Code].map((Icon, index) => (
              <div
                key={index}
                className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 hover:bg-emerald-200 transition-colors duration-300"
              >
                <Icon className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-white relative">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(16,185,129,0.1)_25%,transparent_25%),linear-gradient(-45deg,rgba(16,185,129,0.1)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,rgba(16,185,129,0.1)_75%),linear-gradient(-45deg,transparent_75%,rgba(16,185,129,0.1)_75%)] bg-[size:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0px] animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
              <Zap className="w-4 h-4 mr-2" />
              Nossos Serviços
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Soluções que <span className="text-blue-600">impulsionam</span> seu negócio
            </h2>

            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Oferecemos um ecossistema completo de serviços digitais potencializados por IA e automação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardContent className="p-8 relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">{service.description}</p>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-100 to-white relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,46,93,0.1)_1px,transparent_0)] bg-[size:20px_20px]"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200">
            <Quote className="w-4 h-4 mr-2" />O que dizem nossos clientes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-16">
            Histórias de <span className="text-purple-600">Sucesso</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <Quote className="w-10 h-10 text-slate-400 mb-4" />
                <p className="text-lg text-slate-700 mb-6 italic leading-relaxed">{`"${testimonial.quote}"`}</p>
                <div className="flex items-center justify-center mt-auto">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full mr-4 border-2 border-emerald-500"
                  />
                  <div>
                    <p className="font-bold text-slate-800">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-6 bg-slate-50 relative">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(16,185,129,0.3)_1px,transparent_0)] bg-[size:20px_20px]"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200">
            <Sparkles className="w-4 h-4 mr-2" />
            Nossos Parceiros
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-16">
            Empresas que <span className="text-purple-600">confiam</span> em nós
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className={`flex items-center justify-center p-0 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 max-w-xs w-full mx-auto overflow-hidden ${logo.bgColor}`}
                style={{ height: "150px" }} // Altura fixa para o card
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-full w-full object-contain p-4" // Padding para a imagem dentro do card
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 px-6 relative">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Semeia Labs
            </h3>
            <p className="text-slate-400">Plantando ideias, colhendo inovação</p>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500">© 2025 Semeia Labs - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/11930772498?text=Ol%C3%A1,%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20Semeia%20Labs"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 z-50 group"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        <span className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
      </a>
    </div>
  )
}
