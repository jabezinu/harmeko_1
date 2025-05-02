import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Coffee } from 'lucide-react';

// Sample Menu Data (Replace with actual data source if available)
const menuItems = [
  {
    id: 1,
    name: 'Classic Espresso',
    description: 'A rich and intense shot of pure coffee goodness. The foundation of many coffee drinks.',
    ingredients: 'Premium Espresso Beans, Hot Water',
    price: 3.50,
    category: 'Espresso',
    imageUrl: 'https://picsum.photos/seed/espresso/400/300',
    aiHint: 'espresso shot coffee'
  },
  {
    id: 2,
    name: 'Creamy Cappuccino',
    description: 'Perfectly balanced espresso, steamed milk, and a velvety layer of microfoam.',
    ingredients: 'Espresso, Steamed Milk, Milk Foam',
    price: 4.50,
    category: 'Espresso',
    imageUrl: 'https://picsum.photos/seed/cappuccino/400/300',
    aiHint: 'cappuccino coffee art'
  },
  {
    id: 3,
    name: 'Smooth Latte',
    description: 'Espresso combined with a generous amount of steamed milk, topped with a light layer of foam.',
    ingredients: 'Espresso, Steamed Milk',
    price: 4.75,
    category: 'Espresso',
    imageUrl: 'https://picsum.photos/seed/latte/400/300',
    aiHint: 'latte art coffee'
  },
  {
    id: 4,
    name: 'Harmeko Signature Brew',
    description: 'Our special house blend, drip-brewed for a clean and flavorful cup.',
    ingredients: 'Harmeko House Blend Beans, Filtered Water',
    price: 3.00,
    category: 'Brewed Coffee',
    imageUrl: 'https://picsum.photos/seed/brew/400/300',
    aiHint: 'drip coffee pour over'
  },
  {
    id: 5,
    name: 'Iced Caramel Macchiato',
    description: 'A refreshing blend of cold milk, vanilla syrup, espresso, and caramel drizzle.',
    ingredients: 'Espresso, Milk, Ice, Vanilla Syrup, Caramel Sauce',
    price: 5.25,
    category: 'Iced Coffee',
    imageUrl: 'https://picsum.photos/seed/icedcoffee/400/300',
    aiHint: 'iced caramel macchiato'
  },
  {
    id: 6,
    name: 'Artisanal Pour Over',
    description: 'Single-origin beans meticulously brewed using the pour-over method for nuanced flavors.',
    ingredients: 'Single-Origin Beans, Filtered Water',
    price: 5.50,
    category: 'Brewed Coffee',
    imageUrl: 'https://picsum.photos/seed/pourover/400/300',
    aiHint: 'pour over coffee making'
  },
];

// Get unique categories
const categories = [...new Set(menuItems.map(item => item.category))];

export default function MenuPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
           <Coffee className="h-8 w-8" /> Our Menu
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover our selection of handcrafted coffee beverages, made with the finest beans and brewed with care.
        </p>
      </div>

      {categories.map(category => (
        <div key={category} className="mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-8 border-b-2 border-accent pb-2 inline-block">
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.filter(item => item.category === category).map(item => (
              <Card key={item.id} className="overflow-hidden transition-default hover:shadow-xl flex flex-col">
                <div className="relative w-full h-48">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={item.aiHint}
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-primary">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div>
                    <CardDescription className="mb-3 text-foreground/80">{item.description}</CardDescription>
                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="font-semibold">Ingredients:</span> {item.ingredients}
                    </p>
                  </div>
                  <p className="text-lg font-semibold text-accent mt-auto">
                    ${item.price.toFixed(2)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
