import { MessageCircle, Shield, ArrowRight } from "lucide-react";

const WHATSAPP_COMMUNITY_LINK = "https://chat.whatsapp.com/HiQh3q5HY2F4r4nPuzIiFP";

const CommunityCTA = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 sm:p-12 lg:p-16">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cream/5 rounded-full blur-2xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/20 text-gold mb-6">
              <MessageCircle size={32} />
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-cream mb-4">
              Ready to Build Your Hosting Empire?
            </h2>
            
            <p className="text-lg sm:text-xl text-cream/80 mb-8 max-w-2xl mx-auto">
              Join our WhatsApp community today and connect with hosts who are actively building profitable stays
            </p>

            {/* Privacy Note */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/10 border border-cream/20 text-cream/90 text-sm mb-8">
              <Shield size={16} className="text-gold" />
              <span>Your phone number stays private until you join discussions</span>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href={WHATSAPP_COMMUNITY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-lg group"
              >
                <MessageCircle size={22} />
                Join WhatsApp Community
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityCTA;
