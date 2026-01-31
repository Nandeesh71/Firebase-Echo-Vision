import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  avatar: string;
}

// @component: TestimonialCard
export const TestimonialCard = ({
  quote,
  author,
  title,
  avatar
}: TestimonialCardProps) => {
  // @return
  return <motion.div whileHover={{
    y: -4
  }} transition={{
    duration: 0.2
  }} className="relative bg-card border border-border rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 w-96 h-64 flex flex-col justify-between">
      <div className="absolute top-6 right-6 opacity-10">
        <Quote className="w-8 h-8 text-primary" />
      </div>
      
      <div className="flex-1">
        <blockquote className="text-foreground text-base leading-relaxed font-medium">
          <span>"{quote}"</span>
        </blockquote>
      </div>
      
      <div className="flex items-center space-x-4 mt-6">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-primary-foreground font-semibold text-sm">{avatar}</span>
        </div>
        <div className="min-w-0">
          <h4 className="text-foreground font-semibold text-base font-sans">
            <span>{author}</span>
          </h4>
          <p className="text-muted-foreground text-sm truncate">
            <span>{title}</span>
          </p>
        </div>
      </div>
    </motion.div>;
};
