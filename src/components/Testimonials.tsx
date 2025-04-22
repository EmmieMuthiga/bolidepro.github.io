
export function Testimonials() {
  const testimonials = [
    {
      quote: "Mambo KRA helped me understand my tax obligations as a small business owner. Now I file my returns with confidence!",
      author: "James Wanjiku",
      role: "Business Owner, Nairobi",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The reminders feature ensures I never miss a deadline. This tool has saved me from penalties more than once!",
      author: "Mary Akinyi",
      role: "Freelance Designer, Mombasa",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "As someone new to filing taxes, Mambo KRA explained everything in simple terms I could understand.",
      author: "Daniel Otieno",
      role: "Recent Graduate, Kisumu",
      image: "https://randomuser.me/api/portraits/men/56.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Kenyans Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied Kenyans who've simplified their tax experience with Mambo KRA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="mb-4">
                <svg 
                  className="h-8 w-8 text-kenya-green opacity-50" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 flex-grow">{testimonial.quote}</p>
              <div className="flex items-center mt-4">
                <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
