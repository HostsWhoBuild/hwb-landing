import { MessageCircle, ArrowRight } from "lucide-react";
const WHATSAPP_COMMUNITY_LINK = "https://chat.whatsapp.com/HiQh3q5HY2F4r4nPuzIiFP";
const WHATSAPP_CONTACT_LINK = "https://wa.me/message";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: "2s"
      }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cream/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: ""
    }} />

      <div className="container-tight relative z-10 px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/10 border border-cream/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-cream/90 text-sm font-medium">Join 100+ Hosts Building Together</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-cream leading-tight mb-6 animate-slide-up">
            Hosts Who{" "}
            <span className="text-gradient-gold">Build</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{
          animationDelay: "0.1s"
        }}>
            Airbnb & Holiday Homes Community for Hosts Who Want to Build{" "}
            <span className="text-gold font-semibold">Profitable, Well-Run Stays</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{
          animationDelay: "0.2s"
        }}>
            <a href={WHATSAPP_COMMUNITY_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 text-lg group w-full sm:w-auto justify-center">
              <MessageCircle size={20} />
              Join WhatsApp Community
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href={WHATSAPP_CONTACT_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center">
              Contact via WhatsApp
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-cream/10 animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            <p className="text-cream/50 text-sm mb-4">Trusted by hosts nationwide</p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-cream/40">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-cream">100+</span>
                <span className="text-sm">Active Hosts</span>
              </div>
              <div className="w-px h-8 bg-cream/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-cream">20+</span>
                <span className="text-sm">Cities</span>
              </div>
              <div className="w-px h-8 bg-cream/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-cream">250+</span>
                <span className="text-sm">Properties</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default Hero;