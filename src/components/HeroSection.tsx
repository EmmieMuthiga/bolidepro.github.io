
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
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
              <Button size="lg" className="bg-kenya-green hover:bg-kenya-green/90 text-white">
                Try the Bot <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-kenya-green text-kenya-green hover:bg-kenya-green/10">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-kenya-red rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-kenya-green rounded-full opacity-20"></div>
              <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 relative z-10">
                <div className="w-full aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl font-bold text-kenya-green">KRA</div>
                </div>
                <div className="space-y-3">
                  <div className="w-full h-4 bg-gray-100 rounded"></div>
                  <div className="w-2/3 h-4 bg-gray-100 rounded"></div>
                  <div className="flex justify-between items-center mt-6">
                    <div className="w-1/3 h-8 bg-kenya-green rounded"></div>
                    <ArrowRight className="text-kenya-green" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
