"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Send, MessageCircle, User, Tv, Clock, Phone, Instagram, MessageSquare } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    nombre: "",
    programa: "",
    duracion: "",
    whatsapp: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    const message = `Hola! Me interesa reservar el estudio.\n\nNombre: ${formData.nombre}\nPrograma: ${formData.programa}\nDuración: ${formData.duracion}\nWhatsApp: ${formData.whatsapp}\nMensaje: ${formData.mensaje}`
    const whatsappUrl = `https://wa.me/5493424676085?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="reservas" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-radial from-[#00D9FF]/8 via-[#C85CFF]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#F5F5F5]">Reservá tu </span>
              <span className="gradient-text">espacio</span>
            </h2>
            <p className="text-lg text-[#A1A1AA] mb-10 leading-relaxed text-pretty">
              Coordiná tu horario y comenzá tu programa en un estudio profesional listo para transmitir.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="glass rounded-2xl p-5 border border-[#222222] flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#00D9FF]" />
                </div>
                <div>
                  <p className="font-semibold text-[#F5F5F5]">Respuesta rápida</p>
                  <p className="text-sm text-[#A1A1AA]">Te contactamos en menos de 24hs</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="glass rounded-2xl p-5 border border-[#222222] flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C85CFF]/20 flex items-center justify-center">
                  <Tv className="w-6 h-6 text-[#C85CFF]" />
                </div>
                <div>
                  <p className="font-semibold text-[#F5F5F5]">Estudio disponible</p>
                  <p className="text-sm text-[#A1A1AA]">Múltiples horarios flexibles</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 border border-[#222222]">
              <div className="space-y-5">
                {/* Nombre */}
                <div>
                  <label className="block text-sm font-medium text-[#A1A1AA] mb-2">
                    Nombre
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A1A1AA]" />
                    <input
                      type="text"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full pl-12 pr-4 py-3.5 bg-[#0A0A0A] border border-[#222222] rounded-xl text-[#F5F5F5] placeholder-[#555555] focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] focus:outline-none transition-all"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                </div>

                {/* Programa */}
                <div>
                  <label className="block text-sm font-medium text-[#A1A1AA] mb-2">
                    Nombre del programa
                  </label>
                  <div className="relative">
                    <Tv className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A1A1AA]" />
                    <input
                      type="text"
                      value={formData.programa}
                      onChange={(e) => setFormData({ ...formData, programa: e.target.value })}
                      className="w-full pl-12 pr-4 py-3.5 bg-[#0A0A0A] border border-[#222222] rounded-xl text-[#F5F5F5] placeholder-[#555555] focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] focus:outline-none transition-all"
                      placeholder="Nombre de tu programa"
                      required
                    />
                  </div>
                </div>

                {/* Duración */}
                <div>
                  <label className="block text-sm font-medium text-[#A1A1AA] mb-2">
                    Duración deseada
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A1A1AA]" />
                    <select
                      value={formData.duracion}
                      onChange={(e) => setFormData({ ...formData, duracion: e.target.value })}
                      className="w-full pl-12 pr-4 py-3.5 bg-[#0A0A0A] border border-[#222222] rounded-xl text-[#F5F5F5] focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] focus:outline-none transition-all appearance-none cursor-pointer"
                      required
                    >
                      <option value="" disabled>Seleccionar duración</option>
                      <option value="30 min">30 minutos</option>
                      <option value="1 hora">1 hora</option>
                      <option value="1 hora y 30 min">1 hora y 30 minutos</option>
                      <option value="2 horas">2 horas</option>
                    </select>
                  </div>
                </div>

                {/* WhatsApp & Instagram */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#A1A1AA] mb-2">
                      WhatsApp
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A1A1AA]" />
                      <input
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full pl-12 pr-4 py-3.5 bg-[#0A0A0A] border border-[#222222] rounded-xl text-[#F5F5F5] placeholder-[#555555] focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] focus:outline-none transition-all"
                        placeholder="+54 11..."
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-sm font-medium text-[#A1A1AA] mb-2">
                    Mensaje
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#A1A1AA]" />
                    <textarea
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      rows={4}
                      className="w-full pl-12 pr-4 py-3.5 bg-[#0A0A0A] border border-[#222222] rounded-xl text-[#F5F5F5] placeholder-[#555555] focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] focus:outline-none transition-all resize-none"
                      placeholder="Contanos sobre tu proyecto..."
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 glass border border-[#222222] hover:border-[#25D366]/50 text-[#F5F5F5] rounded-xl font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.2)]"
                  >
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    Enviar por WhatsApp
                  </motion.button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
