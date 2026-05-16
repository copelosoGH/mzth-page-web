"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "¿Cómo se realizan los pagos?",
    answer:
      "El pago se realiza por adelantado y en un único monto por cada ciclo de 4 programas.",
  },
  {
    question: "¿Qué pasa si cancelo?",
    answer:
      "Si el programa se cancela durante el ciclo contratado, no se reintegrará el dinero correspondiente a los programas restantes.",
  },
  {
    question: "¿Dónde se transmite el programa?",
    answer:
      "La emisión en vivo o subida del contenido se realiza desde el canal propio del programa.",
  },
  {
    question: "¿Puedo suspender programas?",
    answer:
      "Se permite suspender avisando con 24 horas de anticipación.",
  },
  {
    question: "¿Quién se encarga de la producción?",
    answer:
      "La idea, producción, organización y comunicación del programa son responsabilidad del cliente.",
  },
  {
    question: "¿Hay tiempo entre programas?",
    answer:
      "Existe un intervalo de 30 minutos entre grabaciones para preparación del estudio.",
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass rounded-2xl border border-[#222222] overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#111111]/50 transition-colors"
      >
        <span className="font-[family-name:var(--font-heading)] font-semibold text-[#F5F5F5] pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
            isOpen
              ? "bg-gradient-to-br from-[#00D9FF] to-[#C85CFF]"
              : "bg-[#111111] border border-[#222222]"
          }`}
        >
          <ChevronDown
            className={`w-4 h-4 ${isOpen ? "text-[#050505]" : "text-[#00D9FF]"}`}
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 pt-0">
              <div className="pt-2 border-t border-[#222222]">
                <p className="text-[#A1A1AA] leading-relaxed pt-4">{answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="condiciones"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#C85CFF]/5 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[#00D9FF]/5 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-[#F5F5F5]">Información </span>
            <span className="gradient-text">importante</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
