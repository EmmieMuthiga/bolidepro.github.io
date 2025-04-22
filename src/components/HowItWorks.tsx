
import { ArrowRight, MessageSquare, Check, Shield } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-kenya-green" />,
      title: "Ask Any Tax Question",
      description: "Chat with Mambo KRA in simple language about any tax concerns you have."
    },
    {
      icon: <Check className="h-8 w-8 text-kenya-green" />,
      title: "Get Clear Guidance",
      description: "Receive straightforward answers and step-by-step instructions."
    },
    {
      icon: <Shield className="h-8 w-8 text-kenya-green" />,
      title: "File and Pay Correctly",
      description: "Complete your tax obligations confidently and on time."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Mambo KRA Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Getting help with your taxes has never been this simple. Our digital assistant guides you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-kenya-green" />
                </div>
              )}
              <div className="mb-4 p-3 bg-primary/5 inline-block rounded-lg">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
