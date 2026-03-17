"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Do I need to know how to code to use CHKware?",
    answer: "Not necessarily. CHKware uses a YAML-based configuration that is designed to be human-readable. If you understand basic API concepts (headers, body, status codes), you can write tests. For advanced logic, there are low-code hooks available."
  },
  {
    question: "How does it integrate with my CI/CD pipeline?",
    answer: "CHKware is built to be CI-native. It provides a standardized CLI that can be triggered in GitHub Actions, GitLab CI, Jenkins, or any other automation server with a single command. It outputs standard JUnit reports."
  },
  {
    question: "Can I test internal APIs behind a firewall?",
    answer: "Yes. CHKware can be run locally within your private network or as part of your internal build process. It doesn't require an external connection to our servers to execute your test suites."
  },
  {
    question: "What formats does CHKware support?",
    answer: "Currently, we have full first-class support for REST (JSON/XML), GraphQL, and gRPC. Our validation engine is built to handle complex nested structures across all these protocols."
  },
  {
    question: "Is there a limit to how many tests I can run?",
    answer: "There are no limits on the number of tests you can run locally or in your own CI environment. Our cloud-hosted execution (if used) has tier-based quotas, but the core engine is designed for unlimited local velocity."
  }
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white dark:bg-black border-t border-gray-100 dark:border-white/5">
      <Container size="large">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              Commonly Asked <br className="hidden lg:block" /> Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Everything you need to know about CHKware. Can&apos;t find the answer you&apos;re looking for? Reach out to our team.
            </p>
          </div>

          {/* Right Column: Refined Accordion */}
          <div className="lg:w-2/3">
            <div className="divide-y divide-gray-100 dark:divide-white/5">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="group first:pt-0"
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full py-8 flex items-center justify-between text-left transition-colors"
                    aria-expanded={activeIndex === index}
                  >
                    <span className="text-xl font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pr-8">
                      {faq.question}
                    </span>
                    <div className={`shrink-0 p-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-blue-600 rotate-90' : 'bg-gray-100 dark:bg-white/5 group-hover:bg-gray-200 dark:group-hover:bg-white/10'}`}>
                       {activeIndex === index ? (
                          <Plus className="w-5 h-5 text-white rotate-45" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        )}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
