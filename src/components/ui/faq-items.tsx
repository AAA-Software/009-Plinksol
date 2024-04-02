import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqItems() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-5xl mt-20 mb-20"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>What is PlinkoSol?</AccordionTrigger>
        <AccordionContent>
          PlinkoSol is a blockchain-based gaming platform that allows users to
          play the classic casino game, Plinko, online. It offers a secure and
          transparent gaming experience backed by blockchain technology.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How does PlinkoSol work?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          What is the purpose of the PlinkoSol coin?
        </AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          How can I participate in the PlinkoSol presale?
        </AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
