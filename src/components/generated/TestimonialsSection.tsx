"use client"

import { motion } from "framer-motion"
import { InfiniteTestimonialTicker } from "./InfiniteTestimonialTicker"

type Testimonial = { id: string; quote: string; author: string; title: string; avatar: string };
const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Nebra helped me break free from the endless task list trap. I'm finally working with intention instead of anxiety.",
    author: "Sarah Chen",
    title: "Creative Director",
    avatar: "SC",
  },
  {
    id: "2",
    quote:
      "For the first time in years, I feel like I have control over my time. Nebra taught me that doing less can mean achieving more.",
    author: "Marcus Rodriguez",
    title: "Startup Founder",
    avatar: "MR",
  },
  {
    id: "3",
    quote: "The daily reflection feature changed everything. I end each day feeling accomplished, not exhausted.",
    author: "Emily Watson",
    title: "Product Designer",
    avatar: "EW",
  },
  {
    id: "4",
    quote: "Nebra's calm interface is exactly what I needed. No more overwhelming dashboards — just clarity and focus.",
    author: "David Kim",
    title: "Software Engineer",
    avatar: "DK",
  },
  {
    id: "5",
    quote: "I've tried every productivity app out there. Nebra is the only one that actually helped me find balance.",
    author: "Lisa Thompson",
    title: "Freelance Writer",
    avatar: "LT",
  },
] 
// @component: TestimonialsSection
export const TestimonialsSection = () => {
  // @return
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-medium text-foreground mb-6 font-sans">
            <span className="font-sans">Loved by Mindful Professionals</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span>See how Nebra is helping people reclaim their time and find balance</span>
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="relative"
        >
          <InfiniteTestimonialTicker testimonials={testimonials} />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--accent)_0%,_transparent_70%)] opacity-10 pointer-events-none" />
    </section>
  )
}
