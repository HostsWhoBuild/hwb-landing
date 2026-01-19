import { Users, Shield, TrendingUp, Award } from "lucide-react";

const trustHighlights = [
  {
    icon: Users,
    title: "Built by Hosts",
    description: "Real operators sharing real experiences",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Phone numbers hidden until you join discussions",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "From first listing to Superhost strategies",
  },
  {
    icon: Award,
    title: "Best Practices",
    description: "Proven frameworks from successful hosts",
  },
];

const SocialProof = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4">
            Built by Hosts, for Hosts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn pricing, operations, guest experience, and growth from real operators
          </p>
        </div>

        {/* Trust Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustHighlights.map((item, index) => (
            <div
              key={index}
              className="card-elevated p-6 text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <item.icon size={28} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
