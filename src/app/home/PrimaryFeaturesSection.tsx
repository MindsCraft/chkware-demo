"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";

export function PrimaryFeaturesSection() {
  const features = [
    {
      label: "AUTOMATION",
      title: "4x Faster API Testing",
      description: "Achieve unprecedented speed in your testing pipeline. CHKware automates the complex validation tasks that usually slow down release cycles.",
      image: "/images/speed-automation-demo.svg",
      imageAlt: "High-speed automation dashboard"
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
    <section className="py-32 relative bg-white dark:bg-[#0a0a0a]">
      <Container size="large" className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
            Everything you need for API testing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mx-auto max-w-3xl">
            CHKware provides a complete toolkit for modern API development and testing,
            designed to streamline your workflow and catch issues before they impact users.
          </p>
        </motion.div>

        {/* Features Minimalist Rows */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-16 lg:gap-24`}
            >
              {/* Typography Column */}
              <div className="lg:w-1/2 flex flex-col group">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-xs text-blue-600 dark:text-blue-500 font-medium tracking-widest bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                    {feature.label}
                  </span>
                  <div className="h-[1px] flex-grow bg-gray-100 dark:bg-white/5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              {/* Minimalist Image Column */}
              <div className="lg:w-1/2 w-full">
                <div className="relative aspect-[16/10] w-full bg-gray-50/50 dark:bg-white/[0.02] rounded-[2rem] border border-gray-100 dark:border-white/[0.05] overflow-hidden group-hover:border-blue-500/20 transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    className="object-contain p-10 sm:p-12 transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}