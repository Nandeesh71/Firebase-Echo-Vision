import React from 'react';
import { motion } from 'framer-motion';
type NavigationItem = { label: string; href: string };
const navigationItems: NavigationItem[] = [];

// @component: NavigationLinks
export const NavigationLinks = () => {
  // @return
  return <nav className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
      {navigationItems.map(item => <motion.a key={item.label} href={item.href} whileHover={{
      scale: 1.05
    }} whileTap={{
      scale: 0.95
    }} transition={{
      duration: 0.2
    }} className="text-base font-medium text-foreground hover:text-primary transition-colors duration-200 cursor-pointer">
          <span>{item.label}</span>
        </motion.a>)}
    </nav>;
};
