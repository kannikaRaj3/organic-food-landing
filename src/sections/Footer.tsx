import React from "react";
import { Mail, Phone, MapPin, Compass } from "lucide-react";
import Image from "next/image";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-organic-darkGreen text-organic-cream pt-20 pb-12 px-6 md:px-12 relative overflow-hidden">
      
      {/* Decorative Leaf in Corner */}
      <div className="absolute bottom-0 right-[-5%] w-64 h-64 opacity-5 text-organic-yellow pointer-events-none rotate-90">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
          <path d="M17 8C8 10 5.9 16.12 5.9 16.12S3 14 3 10c0-3.3 2.7-6 6-6 4 0 7 2.5 8 4zm3.92 5.08c-.08-.08-.2-.11-.3-.07-2.3.93-3.8 2.3-4.5 4.14-.04.1.01.21.1.25.1.04.21-.01.25-.1.64-1.7 2-3 4.13-3.85.11-.05.15-.17.1-.28-.02-.03-.04-.06-.08-.09z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-organic-cream/10">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <Image
                src="/favicon.ico"
                alt="Kannu Logo"
                width={28}
                height={28}
              />
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Kannu
              </span>
            </a>
            <p className="text-xs text-organic-cream/70 leading-relaxed max-w-sm">
              An award-winning boutique marketplace dedicated to pure organic dry fruits, nutrient-dense seeds, and ethical farming practices.
            </p>
            
            {/* Socials */}
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-organic-yellow hover:text-organic-darkGreen hover:border-organic-yellow transition-all"
                aria-label="Instagram"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-organic-yellow hover:text-organic-darkGreen hover:border-organic-yellow transition-all"
                aria-label="Pinterest"
              >
                <Compass className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-organic-yellow hover:text-organic-darkGreen hover:border-organic-yellow transition-all"
                aria-label="Facebook"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Market Pantry</h4>
            <ul className="space-y-2 text-xs text-organic-cream/65">
              <li><a href="#products" className="hover:text-organic-yellow transition-colors">Roasted Nuts</a></li>
              <li><a href="#products" className="hover:text-organic-yellow transition-colors">Sun-Dried Fruits</a></li>
              <li><a href="#products" className="hover:text-organic-yellow transition-colors">Organic Seeds</a></li>
              <li><a href="#products" className="hover:text-organic-yellow transition-colors">Trail Mixes</a></li>
              <li><a href="#products" className="hover:text-organic-yellow transition-colors">Nut Butters</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs text-organic-cream/65">
              <li><a href="#story" className="hover:text-organic-yellow transition-colors">Our Farm Partners</a></li>
              <li><a href="#why-us" className="hover:text-organic-yellow transition-colors">Sustainability Code</a></li>
              <li><a href="#" className="hover:text-organic-yellow transition-colors">Editorial Journal</a></li>
              <li><a href="#" className="hover:text-organic-yellow transition-colors">B Corp Impact</a></li>
              <li><a href="#" className="hover:text-organic-yellow transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Contact & Support</h4>
            <ul className="space-y-3.5 text-xs text-organic-cream/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-organic-yellow flex-shrink-0 mt-0.5" />
                <span>120 Organic Way, Ste 300, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4.5 w-4.5 text-organic-yellow flex-shrink-0" />
                <span>+1 (800) 555-KANNU</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4.5 w-4.5 text-organic-yellow flex-shrink-0" />
                <span>concierge@kannu-market.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] text-organic-cream/45 space-y-4 sm:space-y-0">
          <div>
            <span>© {currentYear} Kannu Inc. All rights reserved. Crafted for health.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-organic-yellow transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-organic-yellow transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-organic-yellow transition-colors">Do Not Sell My Info</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
