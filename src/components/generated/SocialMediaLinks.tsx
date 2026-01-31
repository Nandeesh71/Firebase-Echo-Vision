import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Facebook, Youtube, Linkedin, Mail } from 'lucide-react';
import type { SVGProps } from 'react';
type SocialMediaItem = {
  icon: React.FC<SVGProps<SVGSVGElement>>;
  label: string;
  href: string
};
const socialMediaItems: SocialMediaItem[] = [
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/__nandeez.h5__/' },
  { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@TEAMELITES-71' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { icon: Twitter, label: 'X', href: 'https://x.com/Nandeesh71?t=i9CsTw0HXKF3N9B3twXXZQ&s=08' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nandeesh71' },
  { icon: Mail, label: 'Mail', href: 'mailto:echovision.helpdesk.in@gmail.com' }
];

// @component: SocialMediaLinks
export const SocialMediaLinks = () => {
  // @return
  return <div className="flex flex-col items-center justify-center gap-4">

    <div className="flex items-center justify-center space-x-6">
      {socialMediaItems.map(item => <motion.a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" whileHover={{
        scale: 1.1,
        y: -2
      }} whileTap={{
        scale: 0.95
      }} transition={{
        duration: 0.2
      }} className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer" aria-label={item.label}>
        <item.icon className="w-6 h-6" />
      </motion.a>)}
    </div>
  </div>;
};
