
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What is Mambo KRA?",
      answer: "Mambo KRA is a digital assistant that helps Kenyans understand, calculate, and pay their taxes easily. It uses simple language to explain complex tax concepts and provides step-by-step guidance."
    },
    {
      question: "Is Mambo KRA affiliated with the Kenya Revenue Authority?",
      answer: "Mambo KRA is an independent service that integrates with KRA systems to provide accurate information. However, it is not officially affiliated with or endorsed by the Kenya Revenue Authority."
    },
    {
      question: "How accurate is the tax information provided?",
      answer: "Mambo KRA strives to provide the most accurate and up-to-date information based on current tax laws. Our system is regularly updated to reflect changes in tax regulations."
    },
    {
      question: "Is my tax information secure with Mambo KRA?",
      answer: "Yes, we take security seriously. All your data is encrypted and we follow strict privacy protocols to ensure your information remains confidential."
    },
    {
      question: "How much does it cost to use Mambo KRA?",
      answer: "We offer both free and premium services. Basic tax guidance is available for free, while advanced features like personalized tax planning and dedicated support require a subscription."
    },
    {
      question: "Can Mambo KRA file my returns for me?",
      answer: "Currently, Mambo KRA guides you through the process of filing your returns but doesn't automatically file them on your behalf. You'll still need to submit your returns through the official KRA portal."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Got questions about Mambo KRA? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <a 
              href="mailto:support@mambokra.co.ke" 
              className="text-kenya-green hover:underline font-medium"
            >
              Contact our support team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
