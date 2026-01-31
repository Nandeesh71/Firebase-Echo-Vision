"use client"

import { motion } from "framer-motion"
import { Brain, Target, Sparkles } from "lucide-react"
type PhilosophySectionProps = {
  className?: string
}
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.6,
  },
}
const fadeInRight = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: 0.6,
    delay: 0.2,
  },
}
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// @component: PhilosophySection
export const PhilosophySection = ({ className = "" }: PhilosophySectionProps) => {
  // @return
  return (
    <section className={`w-full flex items-center py-24 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-6">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/30 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Philosophy</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-foreground leading-tight">
              Rethinking Productivity
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-4">
              <h3 className="text-foreground">The Problem with Traditional Methods</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Most tools are built on the wrong premise — that doing more means achieving more. But endless lists and
                rigid systems create the illusion of progress while draining your energy and focus. Traditional methods
                treat your time as a resource to exploit, not a space to create, grow, or breathe.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground mb-1">Mindful by Design</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Echo Vision helps you bring focus and calm back to your workflow. Work with intention, not impulse.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="text-foreground mb-1">Sustainable Productivity</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    A system that adapts to you, not the other way around. Make meaningful progress without losing
                    balance.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.button
              variants={fadeInUp}
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="mt-6 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-200"
            >
              Learn More About Echo Vision
            </motion.button>
          </motion.div>

          <motion.div initial="initial" animate="animate" variants={fadeInRight} className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-3xl" />

              <div className="relative bg-card rounded-2xl shadow-2xl p-8 sm:p-12 border border-border overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/30 rounded-full -translate-y-16 translate-x-16 blur-2xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/20 rounded-full translate-y-20 -translate-x-20 blur-2xl" />

                <div className="relative space-y-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-xl mx-auto">
                    <Brain className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <h3 className="text-center text-foreground">Echo Vision</h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-4 bg-muted rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm font-medium text-foreground">Intentional Focus</span>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-muted rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-sm font-medium text-foreground">Energy Management</span>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-muted rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm font-medium text-foreground">Sustainable Growth</span>
                    </div>
                  </div>

                  <div className="pt-4 text-center">
                    <p className="text-sm text-muted-foreground italic">"Intentional Work. Balanced Life."</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
