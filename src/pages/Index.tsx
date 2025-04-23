
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-2xl flex items-center">
          <span className="text-kenya-green">Mambo</span>
          <span className="text-kenya-red ml-1">KRA</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#" className="hover:text-kenya-green transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-kenya-green transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-kenya-green transition-colors">Testimonials</a></li>
            <li><a href="#" className="hover:text-kenya-green transition-colors">FAQ</a></li>
          </ul>
        </nav>
        <div>
          <button className="px-4 py-2 text-kenya-green border border-kenya-green rounded-lg hover:bg-kenya-green hover:text-white transition-colors">
            Login
          </button>
        </div>
      </header>

      <main>
        <HeroSection onTryBot={() => setIsChatOpen(true)} />
        <HowItWorks />
        <Features />
        <Testimonials />
        <FAQ />
      </main>

      <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
        <DialogContent className="max-w-3xl h-[80vh]">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/z-JzSjET5WwD_-SxyLwRl"
            width="100%"
            style={{ height: "100%", minHeight: "700px" }}
            frameBorder="0"
          />
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Index;
