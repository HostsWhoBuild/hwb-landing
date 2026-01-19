import { Home, Building2, Palmtree, Rocket } from "lucide-react";

const audiences = [
  {
    icon: Home,
    title: "Airbnb Hosts",
    description: "Managing one or multiple Airbnb properties looking to optimize and scale",
  },
  {
    icon: Building2,
    title: "Holiday Home Hosts",
    description: "Running vacation rentals and seeking operational excellence",
  },
  {
    icon: Palmtree,
    title: "Resort Operators",
    description: "Managing boutique resorts and hospitality businesses",
  },
  {
    icon: Rocket,
    title: "Aspiring Hosts",
    description: "Planning your first property and want to start right",
  },
];

const WhoIsThisFor = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Who This Is For
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4">
            Join Your Tribe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're just starting or scaling to a portfolio, this community is for you
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground">
                <audience.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
