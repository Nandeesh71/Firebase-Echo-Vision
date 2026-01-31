import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { NavigationLinks } from './NavigationLinks';
import { SocialMediaLinks } from './SocialMediaLinks';
import { CopyrightText } from './CopyrightText';

// @component: Footer
export const Footer = () => {
  // @return
  return <footer className="w-full bg-background py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        ease: "easeOut"
      }} className="flex flex-col items-center space-y-12">
        <Logo />

        <div className="text-center text-muted-foreground font-semibold">&quot; {"\t"}Empowering Vision Beyond Sight {"\t"} &quot;</div>

        <SocialMediaLinks />

        <CopyrightText />
      </motion.div>
    </div>
  </footer>;
};

