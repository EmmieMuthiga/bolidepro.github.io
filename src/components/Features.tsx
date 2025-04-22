
import { Bell, MessageSquare, Shield } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Bell className="h-10 w-10 p-2 bg-kenya-red/10 rounded-lg text-kenya-red" />,
      title: "Tax Reminders",
      description: "Never miss a deadline again. Get timely notifications about your tax obligations.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 p-2 bg-kenya-green/10 rounded-lg text-kenya-green" />,
      title: "Simple Language",
      description: "Complex tax terms explained in clear, easy-to-understand language.",
    },
    {
      icon: <Shield className="h-10 w-10 p-2 bg-kenya-black/10 rounded-lg text-kenya-black" />,
      title: "KRA Integration",
      description: "Securely connected to KRA systems for accurate and up-to-date information.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mambo KRA comes packed with everything you need to handle your taxes confidently and correctly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-kenya-green/10 to-kenya-red/10 p-8 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to simplify your taxes?</h3>
              <p className="text-muted-foreground">Join thousands of Kenyans who are already using Mambo KRA.</p>
            </div>
            <button className="px-6 py-3 bg-kenya-green text-white font-medium rounded-lg hover:bg-kenya-green/90 transition-colors">
              Start Using Mambo KRA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
