import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import RecentProjects from "@/components/RecentProjects";
import TestimonialSection from "@/components/Testimonials";
import VendorSection from "@/components/VendorSection";
import WorkProcess from "@/components/WorkProcess";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VendorSection />
      <AboutSection />
      <WorkProcess />
      <RecentProjects />
      <TestimonialSection />
    </>
  );
}
