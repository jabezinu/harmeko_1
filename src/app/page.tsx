import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee, Image as ImageIcon, Mail } from 'lucide-react'; // Using appropriate icons

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center bg-secondary text-primary-foreground px-4 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          data-ai-hint="coffee shop interior cozy"
          style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?random=1)' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4 drop-shadow-md">
            Harmeko Coffee
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-xl mx-auto drop-shadow-sm">
            Indulge in the art of coffee. Perfectly brewed, just for you.
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground transition-default shadow-md">
              <Link href="/menu">View Our Menu</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-4 border-white text-white hover:bg-primary-foreground/10 transition-default shadow-md">
              <Link href="/contact" >Find Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Why Choose Harmeko?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center transition-default hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
                  <Coffee className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">Exquisite Menu</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Explore a curated selection of premium coffee beans, expertly roasted and brewed to perfection. From classic espresso to unique signature drinks.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center transition-default hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
                  <ImageIcon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">Inviting Ambiance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Relax and unwind in our modern and cozy space. Perfect for catching up with friends, working, or simply enjoying a quiet moment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center transition-default hover:shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">Connect With Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Visit our cafe, explore our gallery, or get in touch. We're here to share our passion for coffee with you. Find our location and contact details easily.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-secondary-foreground">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready for Your Coffee Moment?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-secondary-foreground/90">
            Visit us today or explore our menu online to discover your new favorite brew.
          </p>
          <Button size="lg" variant="accent" asChild className="transition-default shadow-md">
            <Link href="/gallery">Explore Our Gallery</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
