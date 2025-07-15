
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface HeroSectionProps {
  onTryBot: () => void;
}

export function HeroSection({ onTryBot }: HeroSectionProps) {
  useEffect(() => {
    // Embed chatbot script
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...arguments: any[]) => {
        if (!window.chatbase.q) {
          window.chatbase.q = [];
        }
        window.chatbase.q.push(arguments);
      };
      
      window.chatbase = new Proxy(window.chatbase, {
        get(target: any, prop: string) {
          if (prop === "q") {
            return target.q;
          }
          return (...args: any[]) => target(prop, ...args);
        }
      });
    }

    const onLoad = function() {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "N6l0beGftPMfPD-7XZ3ST";
      script.setAttribute('domain', "www.chatbase.co");
      document.body.appendChild(script);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    // Cleanup function
    return () => {
      const existingScript = document.getElementById("N6l0beGftPMfPD-7XZ3ST");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const handleTryBot = () => {
    // Try to open the chatbot if it's loaded
    if (window.chatbase) {
      try {
        window.chatbase('open');
      } catch (error) {
        console.log('Chatbot not ready yet, falling back to dialog');
        onTryBot();
      }
    } else {
      // Fallback to the existing dialog
      onTryBot();
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Abstract pattern background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#006b3d_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-secondary text-kenya-dark">
              #SimplifyingTaxes
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Taxes Made <span className="text-kenya-green">Simple</span> for All Kenyans
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Mambo KRA is your friendly digital assistant that helps you understand, calculate, and pay your taxes with ease.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-kenya-green hover:bg-kenya-green/90 text-white"
                onClick={handleTryBot}
              >
                Try the Bot <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-kenya-green text-kenya-green hover:bg-kenya-green/10">
                Learn More
              </Button>
            </div>
          </div>
          {/* Add the robot/assistant illustration */}
          <div className="flex-1 relative flex justify-center items-center">
            <div className="relative max-w-[360px] w-full aspect-square flex items-center justify-center">
              <img
                src="/lovable-uploads/6fb33564-c7ca-4307-8c78-f245707cf084.png"
                alt="Mambo KRA Digital Assistant"
                className="rounded-2xl shadow-lg border-4 border-kenya-green object-cover w-full h-full bg-white"
                style={{ backgroundColor: "#ffffff" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
