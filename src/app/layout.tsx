import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Changed font
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster'; // Import Toaster

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Harmeko Coffee - Premium Coffee Experience',
  description: 'Discover the rich taste and inviting ambiance of Harmeko Coffee.',
  icons: {
    icon: '/favicon.ico', // Assume favicon might be added later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased flex flex-col', // Ensure flex column layout
          inter.variable
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main> {/* Ensure main content takes available space */}
        <Footer />
        <Toaster /> {/* Add Toaster component */}
      </body>
    </html>
  );
}
