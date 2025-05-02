import Link from 'next/link';
import { Coffee, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8" />
              <span className="text-2xl font-bold">Harmeko Coffee</span>
            </Link>
            <p className="text-sm text-center md:text-left text-secondary-foreground/80">
              Experience the finest coffee crafted with passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><Link href="/menu" className="hover:text-accent transition-default">Menu</Link></li>
              <li><Link href="/gallery" className="hover:text-accent transition-default">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-default">Contact Us</Link></li>
              {/* Add more links if needed, e.g., About Us, Blog */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
             <h3 className="text-lg font-semibold mb-4 text-center md:text-left">Visit Us</h3>
             <ul className="space-y-3 text-center md:text-left text-sm">
               <li className="flex items-center justify-center md:justify-start space-x-2">
                 <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                 <span>123 Coffee Bean Lane, Brewville, CA 90210</span>
               </li>
               <li className="flex items-center justify-center md:justify-start space-x-2">
                 <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                 <a href="tel:+15551234567" className="hover:text-accent transition-default">(555) 123-4567</a>
               </li>
               <li className="flex items-center justify-center md:justify-start space-x-2">
                 <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                 <a href="mailto:info@harmeko.com" className="hover:text-accent transition-default">info@harmeko.com</a>
               </li>
             </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-secondary-foreground/10 text-center text-sm text-secondary-foreground/60">
          © {currentYear} Harmeko Coffee. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
