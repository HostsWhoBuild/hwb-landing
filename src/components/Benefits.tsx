import { MessageSquare, BookOpen, Users2, GraduationCap, PiggyBank, Lock } from "lucide-react";

const benefits = [
  {
    icon: MessageSquare,
    title: "Real Experiences Shared",
    description: "Hosts openly share wins, losses, and lessons learned from their hosting journey",
  },
  {
    icon: BookOpen,
    title: "Best Practices & Frameworks",
    description: "Proven systems for pricing, guest communication, and operations",
  },
  {
    icon: Users2,
    title: "Community of Builders",
    description: "Connect with ambitious hosts who are actively growing their businesses",
  },
  {
    icon: GraduationCap,
    title: "Learning Content",
    description: "Curated resources and discussions to level up your hosting game",
  },
  {
    icon: PiggyBank,
    title: "Investment Opportunities",
    description: "Invest in or raise capital for Airbnb businesses within the community",
  },
  {
    icon: Lock,
    title: "Privacy-First Community",
    description: "Your phone number stays hidden unless you choose to join discussion groups",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-background">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4">
            Why Hosts Love This Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to go from host to Superhost operator
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-border/50 bg-card hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
