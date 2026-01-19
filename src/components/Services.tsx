import { Building, Headphones, TrendingUp, MessageCircle } from "lucide-react";

const WHATSAPP_CONTACT_LINK = "https://wa.me/message";

const services = [
  {
    icon: Building,
    title: "Property Management",
    description: "Full-service management for your Airbnb and vacation rental properties. We handle everything from guest communication to maintenance.",
  },
  {
    icon: Headphones,
    title: "Co-hosting Virtual Assistant",
    description: "Dedicated VA support for guest inquiries, booking management, and day-to-day operations of your rental business.",
  },
  {
    icon: TrendingUp,
    title: "Investment Partnerships",
    description: "Explore investment opportunities in Airbnb businesses or find capital partners for your hosting venture.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4">
            Need Extra Support?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond the community, we offer hands-on services to help you succeed
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-elevated p-8 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <a
            href={WHATSAPP_CONTACT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 group"
          >
            <MessageCircle size={20} />
            Contact Me via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
