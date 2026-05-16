"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Star } from "lucide-react"

const plans = [
  {
    duration: "30 minutos",
    price: "$50.000",
    featured: false,
    features: [
      "Estudio completo",
      "Audio profesional",
      "Cámara Full HD",
      "Iluminación",
      "Operador técnico",
    ],
  },
  {
    duration: "1 hora",
    price: "$75.000",
    featured: false,
    features: [
      "Estudio completo",
      "Audio profesional",
      "Cámara Full HD",
      "Iluminación",
      "Operador técnico",
    ],
  },
  {
    duration: "1 hora y media",
    price: "$100.000",
    featured: true,
    badge: "MÁS ELEGIDO",
    features: [
      "Estudio completo",
      "Audio profesional",
      "Cámara Full HD",
      "Iluminación",
      "Operador técnico",
    ],
  },
  {
    duration: "2 horas",
    price: "$120.000",
    featured: false,
    features: [
      "Estudio completo",
      "Audio profesional",
      "Cámara Full HD",
      "Iluminación",
      "Operador técnico",
    ],
  },
]

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="planes" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-radial from-[#00D9FF]/5 via-[#C85CFF]/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-[#F5F5F5]">Planes </span>
            <span className="gradient-text">mensuales</span>
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            Todos los planes incluyen uso completo del estudio y se realizan semanalmente.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.duration}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8, scale: plan.featured ? 1.02 : 1.02 }}
              className={`relative rounded-3xl p-6 lg:p-8 transition-all duration-300 ${
                plan.featured
                  ? "bg-gradient-to-b from-[#111111] to-[#0A0A0A] border-2 border-transparent lg:scale-105 lg:-my-4"
                  : "glass border border-[#222222] hover:border-[#00D9FF]/30"
              }`}
              style={
                plan.featured
                  ? {
                      backgroundImage: `linear-gradient(to bottom, #111111, #0A0A0A), linear-gradient(135deg, #00D9FF, #C85CFF)`,
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                    }
                  : {}
              }
            >
              {/* Featured Badge */}
              {plan.featured && plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00D9FF] to-[#C85CFF] text-[#050505] font-bold text-xs"
                  >
                    <Star className="w-3 h-3 fill-current" />
                    {plan.badge}
                  </motion.div>
                </div>
              )}

              {/* Glow for featured */}
              {plan.featured && (
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#00D9FF]/10 to-[#C85CFF]/5 pointer-events-none" />
              )}

              <div className="relative">
                {/* Duration */}
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#F5F5F5] mb-2">
                  {plan.duration}
                </h3>

                {/* Price */}
                <div className="mb-6 flex items-baseline gap-1 flex-wrap">
                  <span
                    className={`font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-bold ${
                      plan.featured ? "gradient-text" : "text-[#00D9FF]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-[#A1A1AA] text-sm">/mes</span>
                </div>

                {/* Subtext */}
                <p className="text-sm text-[#A1A1AA] mb-6 pb-6 border-b border-[#222222]">
                  4 programas mensuales
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.featured
                            ? "bg-gradient-to-br from-[#00D9FF] to-[#C85CFF]"
                            : "bg-[#00D9FF]/20"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.featured ? "text-[#050505]" : "text-[#00D9FF]"
                          }`}
                        />
                      </div>
                      <span className="text-sm text-[#A1A1AA]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href="#reservas"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full py-3.5 rounded-xl font-semibold text-center transition-all duration-300 ${
                    plan.featured
                      ? "bg-gradient-to-r from-[#00D9FF] to-[#C85CFF] text-[#050505] hover:shadow-[0_0_30px_rgba(0,217,255,0.4)]"
                      : "bg-[#111111] border border-[#222222] text-[#F5F5F5] hover:border-[#00D9FF]/50 hover:bg-[#00D9FF]/5"
                  }`}
                >
                  Elegir plan
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-[#A1A1AA]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full" />
              Los programas son semanales.
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C85CFF] rounded-full" />
              Todos los planes incluyen operador de cámaras y sonido.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
