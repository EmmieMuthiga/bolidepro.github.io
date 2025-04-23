
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { ChatInterface } from "@/components/Chat/ChatInterface";

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

      <main>
        <HeroSection />
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Talk to Our Tax Assistant</h2>
            <ChatInterface />
          </div>
        </section>
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
