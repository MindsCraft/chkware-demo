"use client";
import React, { useState, useEffect } from "react";
// import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Copy, Check, ChevronRight } from "lucide-react";
import { GlowCard, GlowButton } from "@/components/ui/glowing-effect";

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText('pipx install chk');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Terminal Animation State
  const yamlCode = `version: default:http

request:
  url: "https://api.example.com/health"
  method: GET

assert:
  - status == 200
  - body.status == "healthy"`;

  const [displayedCode, setDisplayedCode] = useState("");
  const [phase, setPhase] = useState<"typing" | "running" | "done">("typing");

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedCode(yamlCode.slice(0, index));
      index++;
      if (index > yamlCode.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setPhase("running");
          setTimeout(() => setPhase("done"), 1500); // Simulate command running time
        }, 800);
      }
    }, 45); // Typing speed

    return () => clearInterval(typingInterval);
  }, [yamlCode]);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center z-0 bg-white dark:bg-[#0a0a0a]">
      {/* Clean, soothing background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 dark:opacity-100"></div>
      
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30 dark:opacity-20 pointer-events-none blur-[100px] bg-blue-500/20 rounded-full"></div>

      <Container size="large" className="relative z-10 py-20 lg:py-0">
        <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left side hero content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Version badge */}
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800 px-3 py-1 text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm mb-6">
              <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
              New: CHKware v0.5.0 Released
            </span>

            {/* Clean, high-contrast headline */}
            <h1 className="font-semibold text-5xl md:text-6xl lg:text-7xl tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
              Reduce API{" "}
              <span className="text-blue-600 dark:text-blue-500">
                regression cost
              </span>
              <br className="hidden lg:block" />{" "}
              and release quickly.
            </h1>

            {/* Simplified Subheadline */}
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Streamline your testing with readable YAML specs. Built for modern teams who want safety without the heavy lifting.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button asChild className="px-6 py-2 h-12 text-base border border-gray-700 dark:border-gray-300 bg-black/90 dark:bg-white text-white dark:text-black backdrop-filter backdrop-blur-sm hover:bg-black dark:hover:bg-gray-100">
                <Link href="https://www.chkware.com/docs/quick-start/">
                  Quick Start <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <GlowButton
                className="font-mono"
                onClick={handleCopyCommand}
              >
                <span className="text-blue-400">$</span>
                <span className="ml-2">pipx install chk</span>
                {copied ? (
                  <Check className="h-4 w-4 ml-2 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4 ml-2" />
                )}
                {copied && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                    Copied!
                  </span>
                )}
              </GlowButton>
            </div>
          </motion.div>

          {/* Right side hero image/demo */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[#0d1117] border border-gray-800">
                {/* MacOS style Terminal Header */}
                <div className="bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-gray-800">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="text-xs font-mono text-gray-400 tracking-wider">health-check.chk</div>
                  <div className="w-12"></div>
                </div>

                {/* Terminal Body */}
                <div className="p-5 font-mono text-sm sm:text-base leading-relaxed h-[420px] sm:h-[450px] flex flex-col">
                  {/* Typed YAML Code */}
                  <div className="text-[#c9d1d9] whitespace-pre-wrap flex-none">
                    {displayedCode}
                    {phase === "typing" && (
                      <span className="ml-[2px] inline-block w-2 bg-[#c9d1d9] animate-pulse h-5 align-middle"></span>
                    )}
                  </div>

                  {/* Running Command Phase */}
                  {phase === "running" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 border-t border-gray-800/60 pt-4"
                    >
                      <span className="text-blue-400">$</span> <span className="text-[#c9d1d9]">chk run health-check.chk</span>
                      <span className="ml-[2px] inline-block w-2 bg-[#c9d1d9] animate-pulse h-5 align-middle"></span>
                    </motion.div>
                  )}

                  {/* Test Results Phase */}
                  {phase === "done" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-6 border-t border-gray-800/60 pt-4"
                    >
                      <div className="text-[#c9d1d9] mb-3">
                        <span className="text-blue-400">$</span> chk run health-check.chk
                      </div>

                      <div className="space-y-2 mt-2">
                        <motion.div
                          initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
                          className="flex items-start text-[#3fb950] whitespace-normal"
                        >
                          <Check className="h-5 w-5 mr-2 shrink-0 mt-[2px]" />
                          <span className="break-all sm:break-normal">GET /health <span className="text-gray-500">(200 OK)</span> <span className="text-yellow-500/80">- 84ms</span></span>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                          className="flex items-start text-[#3fb950] pl-7"
                        >
                          <Check className="h-4 w-4 mr-2 shrink-0 mt-[2px]" />
                          <span>status == 200</span>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}
                          className="flex items-start text-[#3fb950] pl-7"
                        >
                          <Check className="h-4 w-4 mr-2 shrink-0 mt-[2px]" />
                          <span>body.status == "healthy"</span>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
                        className="mt-6 text-blue-400 font-bold bg-blue-900/20 py-2 px-3 rounded inline-block"
                      >
                        ✓ 2/2 assertions passed in 0.2s
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
