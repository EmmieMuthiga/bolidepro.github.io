
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "254712345678"; // Replace with your WhatsApp number if desired
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20MamboKRA%2C%20I%20need%20help%20with%20taxes`;

const Index = () => {
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

      {/* WhatsApp Floating Button for Desktop/Mobile */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg cta-button transition-all"
        style={{ minWidth: 56 }}
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="font-semibold hidden sm:inline">WhatsApp Us</span>
      </a>

      {/* Optional: In-hero WhatsApp CTA for higher visibility */}
      <main>
        <div className="pt-2 pb-2 flex justify-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-full font-semibold shadow cta-button"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with our team on WhatsApp
          </a>
        </div>
        <HeroSection />
        <HowItWorks />
        <Features />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
