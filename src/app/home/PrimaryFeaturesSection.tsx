"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

function BenchmarkCounter() {
  const [count, setCount] = useState(45.0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered) {
      interval = setInterval(() => {
        setCount((prev) => {
          if (prev <= 1.2) return 1.2;
          return parseFloat((prev - 1.1).toFixed(1));
        });
      }, 20);
    } else {
      setCount(45.0);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full cursor-pointer transition-all hover:bg-blue-500/20"
    >
      <span className="text-xs font-mono font-bold text-blue-500 uppercase tracking-tighter">Live Benchmark</span>
      <div className="flex items-baseline gap-1 min-w-[3.5rem] justify-end">
        <motion.span className="text-lg font-mono font-bold tabular-nums text-gray-900 dark:text-white">
          {count.toFixed(1)}
        </motion.span>
        <span className="text-[10px] text-gray-500 font-mono">sec</span>
      </div>
    </div>
  );
}

export function PrimaryFeaturesSection() {
  const features = [
    {
      label: "AUTOMATION",
      title: "4x Faster API Testing",
      description: "Achieve unprecedented speed in your testing pipeline. CHKware automates the complex validation tasks that usually slow down release cycles.",
      image: "/images/speed-automation-demo.svg",
      imageAlt: "High-speed automation dashboard",
      showBenchmark: true
    },
    {
      label: "VELOCITY",
      title: "Rapid Development",
      description: "Designed for speed and precision. Get from specification to a fully tested API in significantly less time than traditional tools.",
      image: "/images/fast-development-demo.svg",
      imageAlt: "Streamlined development workflow"
    },
    {
      label: "LOW-CODE",
      title: "Human-Centric Specs",
      description: "Define your expectations in clean YAML. Let CHKware handle the technical heavy lifting, deep structural assertions, and error handling.",
      image: "/images/low-code-demo.svg",
      imageAlt: "Low-code interface"
    }
  ];

  return (
    <section id="features" className="py-32 relative bg-white dark:bg-[#060606] overflow-hidden transition-colors duration-1000">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full" />

      <Container size="large" className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] text-blue-500 border border-blue-500/20 rounded-full bg-blue-500/5 uppercase"
          >
            Capabilities
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9] max-w-4xl mx-auto">
            Everything you need for API testing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mx-auto max-w-3xl leading-relaxed">
            CHKware provides a complete toolkit for modern API development and testing,
            designed to streamline your workflow and catch baggage before it hits production.
          </p>
        </motion.div>

        {/* Features Minimalist Rows */}
        <div className="space-y-48">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`flex flex-col ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-16 lg:gap-32`}
            >
              {/* Typography Column */}
              <div className="lg:w-1/2 flex flex-col group">
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-xs text-blue-600 dark:text-blue-500 font-bold tracking-widest px-1">
                    {feature.label}
                  </span>
                  <div className="h-px flex-grow bg-gradient-to-r from-gray-200 dark:from-white/10 to-transparent" />
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 tracking-tighter leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
                  {feature.description}
                </p>

                {feature.showBenchmark && <BenchmarkCounter />}
              </div>

              {/* Minimalist Image Column */}
              <div className="lg:w-1/2 w-full relative">
                <motion.div 
                   whileHover={{ y: -10 }}
                   className="relative aspect-[16/10] w-full bg-white dark:bg-white/[0.01] rounded-[2.5rem] border border-gray-100 dark:border-white/[0.05] shadow-2xl overflow-hidden group transition-all duration-700 hover:shadow-blue-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/[0.03] to-purple-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    className="object-contain p-12 sm:p-16 transition-transform duration-1000 group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
                
                {/* Decorative floating glass element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-3xl rounded-3xl border border-white/10 -z-10 group-hover:rotate-12 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}