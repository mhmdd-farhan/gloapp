import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SlideUp } from "@/components/motion/motion-primitives";
import type { FaqItem } from "@/lib/content/types";

export function Faq({
  items,
  eyebrow = "FAQ",
  title = "Frequently asked questions",
  description = "Everything you need to know. Can't find the answer? Reach out and we'll get back to you.",
}: {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <Section id="faq">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        className="mx-auto mb-14"
      />

      <SlideUp className="mx-auto max-w-2xl">
        <Accordion>
          {items.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="py-4 text-base font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 text-sm leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SlideUp>
    </Section>
  );
}
