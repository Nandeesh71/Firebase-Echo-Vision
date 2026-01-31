import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard } from './TestimonialCard';
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  avatar: string;
}
interface InfiniteTestimonialTickerProps {
  testimonials: Testimonial[];
}

// @component: InfiniteTestimonialTicker
export const InfiniteTestimonialTicker = ({
  testimonials
}: InfiniteTestimonialTickerProps) => {
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // @return
  return <div className="relative w-full overflow-hidden">
    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

    <motion.div className="flex gap-6 py-4" animate={{
      x: [0, -1920]
    }} transition={{
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40,
        ease: "linear"
      }
    }} style={{
      width: 'max-content'
    }}>
      {duplicatedTestimonials.map((testimonial, index) => <div key={`${testimonial.id}-${index}`} className="flex-shrink-0">
        <TestimonialCard quote={testimonial.quote} author={testimonial.author} title={testimonial.title} avatar={testimonial.avatar} />
      </div>)}
    </motion.div>
  </div>;
};
