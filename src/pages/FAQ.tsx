import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: '1',
    question: 'What tools do I need to start building?',
    answer: 'Essential tools include nippers for cutting parts from runners and you can start from there but there plenty of other tools that are useful like a hobby knife for cleaning nubs, sandpaper for smoothing, and panel line markers for detail.',
    category: 'Tools'
  },
  {
    id: '2',
    question: 'How do I apply decals to my Gunpla?',
    answer: 'There are two main types of decals: water slide and dry transfer. Water slide decals need to be soaked in water before application, while dry transfer decals are rubbed onto the surface of the model.',
    category: 'Building Tips'
  },
  {
    id: '3',
    question: 'Why do you offer free shipping?',
    answer: 'Yes, we offer free shipping on all orders to encourage new builders to try out the hobby without worrying about additional costs.',
    category: 'Shipping'
  },
  {
    id: '4',
    question: 'How do I paint my Gunpla?',
    answer: 'To paint your Gunpla, you will need model paints, brushes, or an airbrush. Start by priming the parts, then apply base colors, and finish with detailing and topcoat for protection.',
    category: 'Painting'
  },
  {
    id: '5',
    question: 'What is the best way to remove nubs?',
    answer: 'The best way to remove nubs is to use a pair of nippers to cut the part from the runner, then use a hobby knife or sandpaper to carefully remove any remaining nub marks.',
    category: 'Building Tips'
  }
];

export function FAQ() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}