import Link from 'next/link';
import { Coffee } from 'lucide-react'; // Using Coffee icon
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  // Basic navigation items
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* Logo/Brand Name */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Coffee className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block text-primary">
            Harmeko Coffee
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-foreground/60 transition-colors hover:text-foreground/80'
                // Add active state styling if needed using usePathname hook
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Placeholder/Trigger (Optional) */}
        {/* <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" /> // Need Menu icon if implementing mobile nav
          </Button>
        </div> */}

        {/* Optional: Right side actions e.g., Order Online Button */}
        {/* <div className="flex items-center space-x-4">
          <Button variant="accent">Order Online</Button>
        </div> */}
      </div>
    </header>
  );
}
