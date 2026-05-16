"use client"

import { Mic2, Camera, Lightbulb, Armchair } from "lucide-react"

const features = [
  {
    icon: Mic2,
    title: "Micrófonos profesionales",
  },
  {
    icon: Camera,
    title: "Cámara 4K",
  },
  {
    icon: Lightbulb,
    title: "Iluminación profesional",
  },
  {
    icon: Armchair,
    title: "Sillas Profesionales",
  },
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#050505]">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00D9FF]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#C85CFF]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#00D9FF]/5 to-transparent rounded-full" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#00D9FF 1px, transparent 1px), linear-gradient(90deg, #00D9FF 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00D9FF]/30 rounded-full"
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div
            className="text-center lg:text-left"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#00D9FF]/20 mb-8"
            >
              <span className="w-2 h-2 bg-[#00D9FF] rounded-full animate-pulse" />
              <span className="text-sm text-[#A1A1AA]">Estudio profesional de streaming</span>
            </div>

            <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-balance">
              <span className="text-[#F5F5F5]">Creamos el espacio.</span>
              <br />
              <span className="gradient-text">Vos creás el contenido.</span>
            </h1>

            <p
              className="text-lg sm:text-xl text-[#A1A1AA] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty"
            >
              Estudio equipado para podcasts, streaming y creación de contenido profesional.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                className="px-8 py-4 bg-[#00D9FF] text-[#050505] rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all duration-300 cursor-pointer"
              >
                Reservar ahora
              </a>
              <a
                className="px-8 py-4 glass border border-[#222222] hover:border-[#00D9FF]/50 text-[#F5F5F5] rounded-2xl font-bold text-lg transition-all duration-300 cursor-pointer"
              >
                Ver planes
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className="relative"
          >
            <div className="relative">
              {/* Glow Effect Behind */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF]/20 to-[#C85CFF]/20 rounded-3xl blur-3xl" />
              
              {/* Main Card */}
              <div className="relative glass rounded-3xl p-2 border border-[#222222]">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#111111] to-[#0A0A0A]">
                  {/* Studio Mockup */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Studio Elements */}
                      <div className="absolute inset-4 rounded-xl border border-[#222222] bg-[#0A0A0A]/50 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-4 p-6">
                          <div className="aspect-square rounded-xl bg-gradient-to-br from-[#00D9FF]/20 to-transparent border border-[#00D9FF]/30 flex items-center justify-center">
                            <Mic2 className="w-10 h-8.5 text-[#00D9FF]" />
                          </div>
                          <div className="aspect-square rounded-xl bg-gradient-to-br from-[#C85CFF]/20 to-transparent border border-[#C85CFF]/30 flex items-center justify-center">
                            <Camera className="w-10 h-8.5 text-[#C85CFF]" />
                          </div>
                          <div className="aspect-square rounded-xl bg-gradient-to-br from-[#C85CFF]/20 to-transparent border border-[#C85CFF]/30 flex items-center justify-center">
                            <Lightbulb className="w-10 h-8.5 text-[#C85CFF]" />
                          </div>
                          <div className="aspect-square rounded-xl bg-gradient-to-br from-[#00D9FF]/20 to-transparent border border-[#00D9FF]/30 flex items-center justify-center">
                            <Armchair className="w-10 h-8.5 text-[#00D9FF]" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Live Indicator */}
                      <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/20 border border-red-500/50">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-xs font-semibold text-red-500">LIVE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div
                className="absolute -top-4 -right-4 glass rounded-2xl p-4 border border-[#00D9FF]/30 shadow-[0_0_20px_rgba(0,217,255,0.2)]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00D9FF]/20 flex items-center justify-center">
                    <Mic2 className="w-5 h-5 text-[#00D9FF]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#F5F5F5]">Audio Pro</p>
                    <p className="text-xs text-[#A1A1AA]">Calidad broadcast</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 border border-[#C85CFF]/30 shadow-[0_0_20px_rgba(200,92,255,0.2)]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C85CFF]/20 flex items-center justify-center">
                    <Camera className="w-5 h-5 text-[#C85CFF]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#F5F5F5]">Full HD</p>
                    <p className="text-xs text-[#A1A1AA]">1080p streaming</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass rounded-2xl p-6 border border-[#222222] hover:border-[#00D9FF]/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D9FF]/20 to-[#C85CFF]/10 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] transition-all duration-300">
                <feature.icon className="w-6 h-6 text-[#00D9FF]" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[#F5F5F5] text-sm sm:text-base">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
