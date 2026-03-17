"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GlowingEffect } from "@/components/ui/glowing-effect";

// Using placeholder high-profile reviews to demonstrate the layout.
// You can replace these with your actual CEO reviews later!
const testimonials = [
  {
    quote:
      "CHKware has completely transformed how we handle configuration changes. Our deployment failure rate dropped to near zero within the first month. It's an absolute game-changer for infrastructure as code validation at our incredible scale.",
    author: "Sarah Jenkins",
    role: "CEO",
    company: "CloudScale Inc.",
    initials: "SJ",
    size: "large", // Spans 2 columns
  },
  {
    quote:
      "The intuitive YAML syntax means our engineers can write complex assertions in seconds. It's elegant, fast, and perfectly reliable.",
    author: "David Chen",
    role: "Co-Founder & CEO",
    company: "DevFlow",
    initials: "DC",
    size: "small", // Spans 1 column
  },
  {
    quote:
      "A must-have tool for any modern DevOps team. The native CI/CD integrations saved us countless hours of custom scripting.",
    author: "Elena Rodriguez",
    role: "CEO",
    company: "DataStack",
    initials: "ER",
    size: "small",
  },
  {
    quote:
      "We evaluated several validation tools, but CHKware's Rust-powered engine blew the competition out of the water in terms of sheer speed.",
    author: "Marcus Thorne",
    role: "VP Engineering",
    company: "NexAI",
    initials: "MT",
    size: "small",
  },
  {
    quote:
      "Adopting CHKware was the highest ROI decision our engineering organization made this year. It caught critical API regressions before they ever reached our production users.",
    author: "Emily Tran",
    role: "CEO",
    company: "FinEdge Solutions",
    initials: "ET",
    size: "medium", // Spans 2 columns on tablet, 1 on desktop
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-[#0a0a0a] -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-blue-50/50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-blue-900/10 opacity-60 -z-10 blur-3xl"></div>

      <Container size="large">
        <motion.div
          className="mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
            Trusted by Engineering <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            See why CEOs and CTOs from renowned software companies are making CHKware their standard for API testing and configuration management.
          </p>
        </motion.div>

        {/* Bento Grid Layout for 5 Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`h-full group ${
                testimonial.size === "large"
                  ? "md:col-span-2 lg:col-span-2"
                  : testimonial.size === "medium"
                  ? "md:col-span-2 lg:col-span-1"
                  : "col-span-1"
              }`}
            >
              <div className="relative h-full rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-2 border-solid">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                
                <div className="relative h-full bg-white/30 dark:bg-gray-900/30 backdrop-blur-md rounded-xl border border-white/40 dark:border-gray-700/40 hover:bg-white/40 dark:hover:bg-gray-900/40 transition-all duration-300">
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex items-center gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                
                <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-500/10 dark:text-blue-500/20 rotate-12 group-hover:rotate-0 transition-transform duration-500" />

                <blockquote className={`text-gray-800 dark:text-gray-200 mb-8 flex-grow ${testimonial.size === 'large' ? 'text-xl md:text-2xl font-medium leading-relaxed' : 'text-lg leading-relaxed'}`}>
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                <div className="flex items-center gap-4 mt-auto">
                  {/* Generic Initials Avatar since we don't have all photos */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 border border-gray-300 dark:border-gray-600 flex items-center justify-center font-bold text-gray-700 dark:text-gray-300 shadow-inner">
                    {testimonial.initials}
                  </div>
                  
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600 dark:text-gray-400 font-medium">{testimonial.role}</span>
                      <span className="text-gray-400 dark:text-gray-600 mx-1">at</span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
