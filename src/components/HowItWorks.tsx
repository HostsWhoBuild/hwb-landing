import { UserPlus, MessageSquare, Lightbulb, Trophy } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: UserPlus,
    title: "Join the Community",
    description: "Click the WhatsApp link and join our private community of hosts",
  },
  {
    step: 2,
    icon: MessageSquare,
    title: "Learn from Real Hosts",
    description: "Read discussions, ask questions, and absorb knowledge from experienced operators",
  },
  {
    step: 3,
    icon: Lightbulb,
    title: "Apply Proven Frameworks",
    description: "Implement strategies that successful hosts are using right now",
  },
  {
    step: 4,
    icon: Trophy,
    title: "Scale to Superhost",
    description: "Grow your hosting business with confidence and community support",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding gradient-hero">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-cream mb-4">
            Your Path to Superhost
          </h2>
          <p className="text-lg text-cream/70 max-w-2xl mx-auto">
            Four simple steps to transform your hosting business
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gold/20" />
              )}
              
              <div className="text-center">
                {/* Step Number */}
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-full bg-cream/10 border-2 border-gold/30 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                    <item.icon size={32} className="text-gold" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold text-primary font-bold text-sm flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-cream mb-3">
                  {item.title}
                </h3>
                <p className="text-cream/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
