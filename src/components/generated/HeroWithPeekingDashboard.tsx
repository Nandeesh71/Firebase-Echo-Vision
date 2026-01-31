import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { DashboardPreview } from './DashboardPreview';

// @component: HeroWithPeekingDashboard
export const HeroWithPeekingDashboard = () => {
  // @return
  return <section className="relative min-h-[120vh] overflow-hidden bg-gradient-to-b from-background via-background to-muted">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} className="text-center max-w-4xl mx-auto -mt-52">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            <span>Transform Your Business</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent" style={{
            color: "#6d28d9"
          }}>
              With Intelligent Analytics
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            <span>Unlock powerful insights and drive growth with our comprehensive dashboard platform. 
            Make data-driven decisions that propel your business forward.</span>
          </p>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut"
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <span>Get Started Free</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-foreground bg-card border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-200 shadow-sm hover:shadow-md">
              <Play className="mr-2 h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div initial={{
      opacity: 0,
      y: 100
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 1,
      delay: 0.5,
      ease: "easeOut"
    }} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <DashboardPreview />
        </div>
      </motion.div>
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--accent)_0%,_transparent_50%)] opacity-20" />
    </section>;
};
