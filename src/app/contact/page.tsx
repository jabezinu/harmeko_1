import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image'; // Import Image for map placeholder

export default function ContactPage() {
  const location = { lat: 34.0522, lng: -118.2437 }; // Example coordinates for LA - replace with actual

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
          <Mail className="h-8 w-8" /> Get In Touch
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We'd love to hear from you! Visit us, give us a call, or send a message using the form below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info & Map */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary flex items-center gap-2">
                <MapPin className="h-6 w-6 text-accent" /> Visit Our Cafe
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                123 Coffee Bean Lane, <br />
                Brewville, CA 90210
              </p>
              <div>
                 {/* Map Placeholder */}
                 <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden border">
                    {/* Replace with actual map component later if needed */}
                    <Image
                      src={`https://picsum.photos/seed/map/600/337`} // Static map image placeholder
                      alt="Map showing Harmeko Coffee location"
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint="map city street cafe"
                    />
                    {/* Placeholder for future interactive map:
                    <MapComponent location={location} />
                    */}
                 </div>
              </div>
              <p className="text-sm text-muted-foreground">Opening Hours: Mon - Fri: 7 AM - 6 PM, Sat - Sun: 8 AM - 5 PM</p>
            </CardContent>
          </Card>

          <Card>
             <CardHeader>
               <CardTitle className="text-2xl font-semibold text-primary flex items-center gap-2">
                 <Phone className="h-6 w-6 text-accent" /> Contact Details
               </CardTitle>
             </CardHeader>
             <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <a href="tel:+15551234567" className="text-foreground hover:text-accent transition-default">(555) 123-4567</a>
                </div>
               <div className="flex items-center space-x-3">
                 <Mail className="h-5 w-5 text-muted-foreground" />
                 <a href="mailto:info@harmeko.com" className="text-foreground hover:text-accent transition-default">info@harmeko.com</a>
               </div>
             </CardContent>
           </Card>
        </div>

        {/* Contact Form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
