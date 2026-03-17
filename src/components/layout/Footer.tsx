"use client";
import Link from "next/link";
import { IconBrandLinkedin, IconBrandGithub, IconBrandX, IconBrandInstagram } from "@tabler/icons-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/logo";

// Social media links
const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: IconBrandLinkedin },
  { name: "GitHub", href: "https://github.com", icon: IconBrandGithub },
  { name: "Instagram", href: "https://instagram.com", icon: IconBrandInstagram },
  { name: "X", href: "https://x.com", icon: IconBrandX },
];

// Footer navigation structure
const navigation = {
  solutions: [
    { name: "API Testing", href: "/solutions/api-testing" },
    { name: "Test Automation", href: "/solutions/automation" },
    { name: "Documentation", href: "/solutions/docs" },
  ],
  resources: [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Blog", href: "/blog" },
    { name: "Support", href: "/support" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "/careers" },
    { name: "Privacy", href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800 overflow-hidden pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02] dark:opacity-[0.05] pointer-events-none"></div>

      {/* Subtle Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

      <Container size="large" className="relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-16">
            {/* Company Info - Takes up more space */}
            <div className="lg:col-span-2 flex flex-col">
              <div className="mb-6">
                <Link href="/" className="inline-block">
                  <Logo className="h-8 w-auto mb-6 hover:scale-105 transition-transform duration-300" />
                </Link>
                <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs mb-8 leading-relaxed">
                  Streamlining API development and testing with easy-to-use, reusable YAML configuration specs for modern DevOps teams.
                </p>

                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  {socialLinks.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-2.5 rounded-xl bg-gray-50 hover:bg-white dark:bg-gray-900 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                      >
                        <span className="sr-only">{item.name}</span>
                        <IconComponent className="h-5 w-5 transform group-hover:scale-110 transition-transform duration-300" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-6 tracking-wide uppercase">
                Solutions
              </h3>
              <ul className="space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200 relative group inline-block"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-6 tracking-wide uppercase">
                Resources
              </h3>
              <ul className="space-y-4">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200 relative group inline-block"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-6 tracking-wide uppercase">
                    Company
                  </h3>
                  <ul className="space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200 relative group inline-block"
                        >
                          {item.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Status Card */}
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 flex flex-col justify-center mt-4 sm:mt-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="relative flex h-3 w-3 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">All Systems Operational</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    Our API and dashboard services are currently running smoothly with 99.99% uptime.
                  </p>
                  <Link href="#" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                    View Status Page →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Copyright - Left */}
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
                Copyright © 2021 - 2025 CHKware. Licensed under Mozilla Public License 2.0.
              </div>

              {/* Legal Links - Right */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
                <Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/cookies" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Cookie Settings
                </Link>
                <Link href="/sitemap" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
