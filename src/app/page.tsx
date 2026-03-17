import React from "react";
import { HeroSection } from "@/app/home/HeroSection";
import { PrimaryFeaturesSection } from "@/app/home/PrimaryFeaturesSection";
import { FeaturesSection } from "@/app/home/FeaturesSection";
import { HowItWorksSection } from "@/app/home/HowItWorksSection";
import { TestimonialsSection } from "@/app/home/TestimonialsSection";
import { ResourcesSection } from "@/app/home/ResourcesSection";
import { ContactSection } from "@/app/home/ContactSection";
import { TechStackSection } from "@/app/home/TechStackSection";
import { FAQSection } from "@/app/home/FAQSection";
import { HomePageStructuredData } from "@/components/seo/StructuredData";

export default function Home() {
  return (
    <>
      <HomePageStructuredData />
      <HeroSection />
      <TechStackSection />
      
      <div id="features">
        <PrimaryFeaturesSection />
      </div>

      <div id="how-it-works">
        <HowItWorksSection />
      </div>

      <div id="technical-details">
        <FeaturesSection />
      </div>

      <div id="testimonials">
        <TestimonialsSection />
      </div>
      
      <ResourcesSection />
      
      <div id="faq">
        <FAQSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
}
