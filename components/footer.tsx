"use client"

import { motion } from "framer-motion"
import { Instagram, MapPin } from "lucide-react"

// TikTok icon as a custom component
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/mzth.estudio?igsh=MXRlZ3RmbWpsbzlkOQ%3D%3D&utm_source=qr", label: "Instagram" }
]

export function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Top Glow Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D9FF]/50 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="text-2xl font-bold font-[family-name:var(--font-heading)] tracking-tight mb-2">
              <span className="text-[#00D9FF]">MZTH</span>
              <span className="text-[#F5F5F5]"> Estudio</span>
            </div>
            <p className="text-sm text-[#A1A1AA]">
              Estudio profesional de streaming y podcast
            </p>
            <p className="text-sm text-[#A1A1AA] mt-2 flex items-center gap-1.5 justify-center md:justify-start">
              <MapPin className="w-4 h-4 text-[#00D9FF] shrink-0" />
              Saavedra 3135, Santa Fe
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-xl glass border border-[#222222] hover:border-[#00D9FF]/50 flex items-center justify-center text-[#A1A1AA] hover:text-[#00D9FF] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,217,255,0.2)]"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-sm text-[#A1A1AA]">
              © {new Date().getFullYear()} MZTH Estudio.
            </p>
            <p className="text-xs text-[#555555] mt-1">
              Todos los derechos reservados.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
