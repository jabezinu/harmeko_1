import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ImageIcon } from 'lucide-react';

// Sample Gallery Data (Replace with actual image URLs and descriptions)
const galleryImages = [
  { id: 1, src: 'https://picsum.photos/seed/gallery1/600/400', alt: 'Cozy seating area', aiHint: 'coffee shop cozy interior seating' },
  { id: 2, src: 'https://picsum.photos/seed/gallery2/600/400', alt: 'Barista preparing coffee', aiHint: 'barista making coffee espresso machine' },
  { id: 3, src: 'https://picsum.photos/seed/gallery3/600/400', alt: 'Close up of latte art', aiHint: 'latte art close up heart' },
  { id: 4, src: 'https://picsum.photos/seed/gallery4/600/400', alt: 'Exterior view of Harmeko Coffee', aiHint: 'coffee shop exterior storefront' },
  { id: 5, src: 'https://picsum.photos/seed/gallery5/600/400', alt: 'Selection of pastries', aiHint: 'coffee shop pastry display croissant' },
  { id: 6, src: 'https://picsum.photos/seed/gallery6/600/400', alt: 'Customers enjoying coffee', aiHint: 'people talking coffee shop friends' },
  { id: 7, src: 'https://picsum.photos/seed/gallery7/600/400', alt: 'Coffee beans display', aiHint: 'coffee beans sack rustic' },
  { id: 8, src: 'https://picsum.photos/seed/gallery8/600/400', alt: 'Modern interior design detail', aiHint: 'cafe interior design modern lighting' },
  { id: 9, src: 'https://picsum.photos/seed/gallery9/600/400', alt: 'Pour over coffee setup', aiHint: 'pour over coffee station setup' },
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
           <ImageIcon className="h-8 w-8" /> Gallery
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Step inside Harmeko Coffee. Explore the ambiance, the craft, and the moments that make our space special.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <Card key={image.id} className="overflow-hidden group transition-default hover:shadow-xl">
            <CardContent className="p-0">
              <div className="aspect-w-3 aspect-h-2"> {/* Maintain aspect ratio */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={image.aiHint}
                />
              </div>
               {/* Optional: Add overlay caption on hover if desired */}
               {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end p-4">
                 <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{image.alt}</p>
               </div> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
