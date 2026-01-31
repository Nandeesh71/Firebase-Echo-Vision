import React from 'react';
import { motion } from 'framer-motion';
interface BillingCycleToggleProps {
  isYearly: boolean;
  onToggle: (isYearly: boolean) => void;
}

// @component: BillingCycleToggle
export const BillingCycleToggle = ({
  isYearly,
  onToggle
}: BillingCycleToggleProps) => {
  // @return
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.8,
    delay: 0.2,
    ease: "easeOut"
  }} className="inline-flex items-center bg-muted rounded-lg p-1">
      <button onClick={() => onToggle(false)} className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${!isYearly ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>
        <span>Monthly</span>
      </button>
      <button onClick={() => onToggle(true)} className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 relative ${isYearly ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>
        <span>Yearly</span>
        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
          <span>Save 20%</span>
        </span>
      </button>
    </motion.div>;
};
