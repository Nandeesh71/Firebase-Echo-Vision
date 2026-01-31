"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

type FAQ = { id: string; question: string; answer: string };
const faqData: FAQ[] = [
  {
    id: "what-is-echo-vision",
    question: "What makes Echo Vision different?",
    answer:
      "Echo Vision isn't another task manager or time tracker. It's a mindful productivity platform that helps you focus on what truly matters by balancing deep work with genuine rest. We believe in doing what matters most, not just doing more.",
  },
  {
    id: "how-it-works",
    question: "How does Echo Vision work?",
    answer:
      "Start each day by setting a simple intention. Plan your work around your energy levels, not just your schedule. Get gentle reminders that nudge you toward balance. End your day with reflection and gratitude. It's sustainable productivity that adapts to you.",
  },
  {
    id: "who-for",
    question: "Who is Echo Vision for?",
    answer:
      "Echo Vision is for anyone who wants to feel present while being productive — creators balancing inspiration and structure, founders managing priorities without burnout, students seeking focus and calm, or anyone tired of the endless hustle.",
  },
  {
    // Pricing FAQ removed
    answer:
      "We offer three plans: Starter ($12/month) for individuals, Mindful ($24/month) with advanced features, and Teams ($49/month) for collaborative productivity. All plans include a 14-day free trial with no credit card required.",
  },
  {
    id: "mobile",
    question: "Is there a mobile app?",
    answer:
      "Yes! Echo Vision is available on iOS, Android, and web. Your intentions, reflections, and progress sync seamlessly across all devices so you can stay mindful wherever you are.",
  },
  {
    id: "data-privacy",
    question: "How is my data protected?",
    answer:
      "Your privacy is sacred to us. All data is encrypted end-to-end, stored securely, and never shared with third parties. You own your data and can export or delete it anytime.",
  },
  {
    id: "integrations",
    question: "Does Echo Vision integrate with other tools?",
    answer:
      "Yes, Echo Vision integrates with popular tools like Google Calendar, Notion, and Slack. We believe in working with your existing workflow, not replacing it entirely.",
  },
  {
    id: "support",
    question: "What kind of support do you offer?",
    answer:
      "We provide email support for all users, with priority support for Mindful and Teams plans. We also have a comprehensive help center, video tutorials, and a community forum for peer support.",
  },
]
// @component: FAQSection
export const FAQSection = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }
  const handleKeyDown = (event: React.KeyboardEvent, id: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      toggleAccordion(id)
    }
  }

  // @return
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            <span>Support</span>
          </p>
          <h2 className="text-5xl font-medium text-foreground mb-6 font-sans">
            <span>Frequently Asked Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <span>Find answers to common questions about Echo Vision and its services.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:bg-accent/50 transition-all duration-200"
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                onKeyDown={(e) => handleKeyDown(e, faq.id)}
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset transition-colors duration-200"
                aria-expanded={openAccordion === faq.id}
                aria-controls={`faq-content-${faq.id}`}
              >
                <div className="flex items-start justify-between">
                  <h6 className="text-xl font-semibold text-foreground pr-4 leading-tight font-sans">
                    <span>{faq.question}</span>
                  </h6>
                  <motion.div
                    animate={{
                      rotate: openAccordion === faq.id ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                    }}
                    className="flex-shrink-0 mt-1"
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openAccordion === faq.id && (
                  <motion.div
                    id={`faq-content-${faq.id}`}
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-base text-muted-foreground leading-relaxed">
                        <span>{faq.answer}</span>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
