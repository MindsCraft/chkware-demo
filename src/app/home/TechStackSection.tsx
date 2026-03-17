"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Github, Cloud, Shield, Zap, Terminal, Code2 } from "lucide-react";

const partners = [
  { name: "GitHub", icon: Github },
  { name: "Docker", icon: Cloud },
  { name: "Jenkins", icon: Shield },
  { name: "Postman", icon: Zap },
  { name: "GitLab", icon: Terminal },
  { name: "Slack", icon: Code2 },
];

export function TechStackSection() {
  return (
    <section className="py-16 bg-white dark:bg-black border-y border-gray-100 dark:border-white/5">
      <Container size="large">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-xs font-mono font-semibold text-gray-400 dark:text-gray-500 tracking-[0.2em] uppercase shrink-0">
            Trusted by modern teams
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
            {partners.map((partner) => (
              <div 
                key={partner.name}
                className="group flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
              >
                <partner.icon className="w-5 h-5 text-gray-900 dark:text-white" />
                <span className="text-sm font-semibold text-gray-900 dark:text-white tracking-tight">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
