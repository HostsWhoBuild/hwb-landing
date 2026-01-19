import { Instagram, MessageCircle } from "lucide-react";

const WHATSAPP_COMMUNITY_LINK = "https://chat.whatsapp.com/HiQh3q5HY2F4r4nPuzIiFP";
const INSTAGRAM_LINK = "https://instagram.com/hostswhobuild";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-cream">
      <div className="container-tight section-padding py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold mb-2">
              Hosts Who Build
            </h3>
            <p className="text-cream/70 text-sm">
              Building profitable, well-run stays together
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream/80 hover:bg-cream/20 hover:text-cream transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={WHATSAPP_COMMUNITY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream/80 hover:bg-cream/20 hover:text-cream transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-cream/10" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-cream/60">
          <p>© {currentYear} Hosts Who Build. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-cream transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cream transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
