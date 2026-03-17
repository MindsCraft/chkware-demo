"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/Container";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { FileCode, Play, HardDrive, Box, ArrowRight } from "lucide-react";
import Link from "next/link";

export function HowItWorksSection() {
  const steps = [
    {
      icon: <FileCode className="h-6 w-6 text-blue-600" />,
      title: "Write Configuration",
      description:
        "Create YAML configuration files defining your API tests, endpoints, and validations.",
    },
    {
      icon: <Play className="h-6 w-6 text-green-600" />,
      title: "Run Tests",
      description:
        "Execute your API tests locally or in CI/CD pipelines with a single command.",
    },
    {
      icon: <HardDrive className="h-6 w-6 text-purple-600" />,
      title: "View Results",
      description:
        "Analyze detailed test results, response times, and validation outcomes.",
    },
    {
      icon: <Box className="h-6 w-6 text-orange-600" />,
      title: "Automate & Integrate",
      description:
        "Schedule periodic tests and integrate with your workflow tools.",
    },
  ];

  return (
    <section className="section-spacing bg-white dark:bg-black">
      <Container size="large">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How CHKware Works
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A simple workflow to streamline your API testing process
          </motion.p>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full group"
            >
              <div className="relative h-full rounded-2xl border p-2">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                
                <div className="relative h-full bg-white/30 dark:bg-gray-900/30 backdrop-blur-md rounded-xl border border-white/40 dark:border-gray-700/40 hover:bg-white/40 dark:hover:bg-gray-900/40 transition-all duration-300 shadow-lg dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                  <div className="p-6 h-full flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Demo Examples Section */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 mb-12">
          {/* YAML Configuration Example */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-full">
              <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 h-full flex flex-col">
                <div className="bg-gray-800 text-white p-2 text-sm font-mono flex items-center">
                  <FileCode className="h-4 w-4 mr-2" />
                  Workflow-User-Post-Create.chk
                </div>
                <div className="bg-gray-950 p-6 flex-grow">
                  <pre className="text-blue-400 text-sm font-mono">
                    {`# API Workflow configuration
---
version: default:workflow:0.8.0

tasks:
  - name: Login with user's credential
    uses: fetch
    file: "./req-login.chk"

  - name: Get user's me
    uses: fetch
    file: "./req-user-me.chk"
    variables:
      AccessToken: <% _steps.0._response.body.accessToken %>

  - name: Create a post
    uses: fetch
    file: "./req-post-create.chk"
    variables:
      AccessToken: <% _steps.0._response.body.accessToken %>

expose:
  - <% _steps %>`}
                  </pre>
                </div>
              </div>
              <div className="absolute -z-10 inset-0 -m-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 blur-2xl opacity-50 rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Terminal Results */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-full">
              <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 h-full flex flex-col">
                <div className="bg-gray-800 text-white p-2 text-sm font-mono flex items-center">
                  <Play className="h-4 w-4 mr-2" />
                  Terminal
                </div>
                <motion.div
                  className="bg-black p-6 flex-grow"
                  initial={{ opacity: 1 }}
                  whileInView={{ opacity: [1, 0.95, 1] }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                  }}
                >
                  <pre className="text-sm font-mono leading-relaxed">
                    <span className="text-blue-400">$ chk run workflow.chk</span>{'\n\n'}

                    <span className="text-yellow-400">🚀 CHKware API Testing Suite</span>{'\n'}
                    <span className="text-gray-400">Running workflow: API Testing Pipeline</span>{'\n\n'}

                    <span className="text-green-400">✓ [PASS]</span> <span className="text-white">Login with credentials</span>{'\n'}
                    <span className="text-gray-400">  → POST /api/auth/login</span> <span className="text-green-400">(200ms)</span>{'\n'}
                    <span className="text-gray-400">  → Token validated successfully</span>{'\n\n'}

                    <span className="text-green-400">✓ [PASS]</span> <span className="text-white">Get user profile</span>{'\n'}
                    <span className="text-gray-400">  → GET /api/user/profile</span> <span className="text-green-400">(150ms)</span>{'\n'}
                    <span className="text-gray-400">  → Response schema validated</span>{'\n\n'}

                    <span className="text-green-400">✓ [PASS]</span> <span className="text-white">Create new post</span>{'\n'}
                    <span className="text-gray-400">  → POST /api/posts</span> <span className="text-green-400">(300ms)</span>{'\n'}
                    <span className="text-gray-400">  → Post created with ID: 12345</span>{'\n\n'}

                    <span className="text-green-400">🎉 All tests passed!</span> <span className="text-white">3/3 steps completed</span>{'\n'}
                    <span className="text-gray-400">Total time: 650ms</span>
                  </pre>
                </motion.div>
              </div>
              <div className="absolute -z-10 inset-0 -m-4 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 blur-2xl opacity-50 rounded-2xl"></div>
            </div>
          </motion.div>
        </div>

        {/* Bento Bento Grid Layout */}
        <div className="mt-24 pt-16 border-t border-gray-100 dark:border-gray-800/50">
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-auto">
            
            {/* Bento Item 1: Title, Description & Button */}
            <motion.div
              className="lg:col-span-8 md:col-span-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-full rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-2 border-solid">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative h-full bg-white/30 dark:bg-gray-900/30 backdrop-blur-md rounded-xl border border-white/40 dark:border-gray-700/40 hover:bg-white/40 dark:hover:bg-gray-900/40 transition-all duration-300">
                  <div className="p-10 h-full flex flex-col justify-center items-start">
                    <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
                      Simple, Powerful, Flexible
                    </h3>
                    <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-10">
                      CHKware streamlines API testing with human-readable YAML specs and deep validation. Built for teams who prioritize speed without sacrificing safety.
                    </p>
                    <Button asChild className="px-6 py-2 h-12 text-base border border-gray-700 dark:border-gray-300 bg-black/90 dark:bg-white text-white dark:text-black backdrop-filter backdrop-blur-sm hover:bg-black dark:hover:bg-gray-100 group">
                      <Link href="/docs">
                        Explore Documentation <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bento Item 2: Low-code card */}
            <motion.div
              className="lg:col-span-4 md:col-span-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative h-full rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-2 border-solid">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative h-full bg-white/30 dark:bg-gray-900/30 backdrop-blur-md rounded-xl border border-white/40 dark:border-gray-700/40 hover:bg-white/40 dark:hover:bg-gray-900/40 transition-all duration-300">
                  <div className="p-8 h-full flex flex-col group">
                    <div className="h-12 w-12 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center mb-6 border border-gray-100 dark:border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <FileCode className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Low-code Flow
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                      Bridge the gap between QA and dev. Anyone can write resilient tests using simple YAML configuration instead of complex code.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bento Item 3: Deep Validation */}
            <motion.div
              className="lg:col-span-6 md:col-span-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-full rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-2 border-solid">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative h-full bg-white/30 dark:bg-gray-900/30 backdrop-blur-md rounded-xl border border-white/40 dark:border-gray-700/40 hover:bg-white/40 dark:hover:bg-gray-900/40 transition-all duration-300">
                  <div className="p-8 h-full flex flex-col group">
                    <div className="h-12 w-12 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center mb-6 border border-gray-100 dark:border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <Box className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Deep Validation
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                      Assert against complex nested JSON structures with industry-leading precision and speed. Native support for regex and schema matching.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bento Item 4: CI/CD */}
            <motion.div
              className="lg:col-span-6 md:col-span-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative h-full rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-2 border-solid">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative h-full bg-white/30 dark:bg-gray-900/30 backdrop-blur-md rounded-xl border border-white/40 dark:border-gray-700/40 hover:bg-white/40 dark:hover:bg-gray-900/40 transition-all duration-300">
                  <div className="p-8 h-full flex flex-col group">
                    <div className="h-12 w-12 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center mb-6 border border-gray-100 dark:border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <HardDrive className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      CI/CD Native
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                      Built to run instantly in any pipeline. Standardized testing from local dev to production. Perfect for GitHub Actions or GitLab CI.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
}
