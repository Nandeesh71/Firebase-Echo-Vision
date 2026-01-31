"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Heart, Sparkles } from "lucide-react"

// @component: InnovateAIHero
export const InnovateAIHero: React.FC = () => {
  // @return
  return (
    <section aria-label="InnovateAI Hero" className="relative w-full overflow-hidden bg-background text-foreground">
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Copy */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[calc(var(--text-sm))] shadow-sm">
              <span className="inline-flex size-2 rounded-full bg-primary"></span>
              <span className="text-muted-foreground">Mindful Productivity</span>
            </div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="text-balance tracking-tight"
            >
              Work with clarity, not chaos
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 0.5,
              }}
              className="max-w-prose text-xl text-muted-foreground leading-relaxed"
            >
              Echo Vision is a mindful productivity platform that helps you focus on what truly matters — balancing deep work
              with genuine rest, so you can do more by doing less.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.5,
              }}
              className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#request-demo"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-primary-foreground shadow-md hover:shadow-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Get started with Echo Vision"
              >
                Start Your Journey
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="size-5 text-ring" aria-hidden="true" />
                <span className="text-[calc(var(--text-sm))]">Free 14-day trial</span>
              </div>
            </motion.div>
          </div>

          {/* Visual - Simplified to minimal mindful productivity interface */}
          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 0.6,
            }}
            className="relative"
            aria-hidden="true"
          >
            <div className="relative rounded-2xl border border-border bg-card p-8 shadow-xl">
              {/* Header */}
              <div className="mb-8 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary/60" />
                  <span className="text-sm text-muted-foreground">Today's Intentions</span>
                </div>
                <h3 className="text-2xl font-normal text-foreground">Focus on what matters</h3>
              </div>

              {/* Intention Cards */}
              <div className="space-y-4 mb-8">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 rounded-xl bg-primary/5 p-4 border border-primary/10"
                >
                  <div className="mt-1 size-5 rounded-full border-2 border-primary/40" />
                  <div className="flex-1 space-y-1">
                    <p className="text-base text-foreground">Complete project proposal</p>
                    <p className="text-sm text-muted-foreground">Deep work • 2 hours</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 rounded-xl bg-primary/5 p-4 border border-primary/10"
                >
                  <div className="mt-1 size-5 rounded-full border-2 border-primary/40" />
                  <div className="flex-1 space-y-1">
                    <p className="text-base text-foreground">Review team feedback</p>
                    <p className="text-sm text-muted-foreground">Collaboration • 1 hour</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 rounded-xl bg-accent/10 p-4 border border-accent/20"
                >
                  <Heart className="mt-1 size-5 text-accent" />
                  <div className="flex-1 space-y-1">
                    <p className="text-base text-foreground">Afternoon walk</p>
                    <p className="text-sm text-muted-foreground">Rest • 30 minutes</p>
                  </div>
                </motion.div>
              </div>

              {/* Energy Indicator */}
              <div className="rounded-xl bg-muted/30 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Energy Level</span>
                  <Sparkles className="size-4 text-primary" />
                </div>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-2 flex-1 rounded-full"
                      style={{
                        background: i <= 4 ? "var(--primary)" : "var(--muted)",
                        opacity: i <= 4 ? 0.8 : 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating accent element */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              className="pointer-events-none absolute -right-4 -top-4 size-20 rounded-full bg-primary/5 border border-primary/20"
            />
          </motion.div>
        </div>

        {/* Logos/Trust (optional subtle) */}
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 opacity-80">
          <span className="text-[calc(var(--text-xs))] text-muted-foreground">Trusted by mindful professionals</span>
          <div className="h-4 w-16 rounded bg-muted" />
          <div className="h-4 w-20 rounded bg-muted" />
          <div className="h-4 w-14 rounded bg-muted" />
          <div className="h-4 w-24 rounded bg-muted" />
        </div>
      </div>
    </section>
  )
}
