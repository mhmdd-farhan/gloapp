import { Hero } from "@/components/sections/hero";
import { Solutions } from "@/components/sections/solutions";
import { CareerServices } from "@/components/sections/career-services";
import { BusinessSolutions } from "@/components/sections/business-solutions";
import { AffiliateProgram } from "@/components/sections/affiliate-program";
import { WhyGloApp } from "@/components/sections/why-gloapp";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { faqs } from "@/lib/content/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <CareerServices />
      <BusinessSolutions />
      <AffiliateProgram />
      <WhyGloApp />
      <Testimonials />
      <Faq items={faqs} />
      <Cta />
    </>
  );
}
