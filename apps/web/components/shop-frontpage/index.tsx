import Link from "next/link";
import Image from "next/image";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Badge } from "@workspace/ui/components/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { ArrowRight, ChevronRight, Heart, Instagram, X } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ShopFrontpage() {
  const t = useTranslations("Homepage");
  return (
    <div className="flex min-h-screen flex-col pt-16">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 order-2 md:order-1 ">
              <div className="max-w-md">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 ">
                  Minimal Summer Collection
                </h1>
                <p className="text-lg text-muted-foreground mb-8 ">
                  Effortless style for the modern wardrobe. Timeless pieces
                  designed to last.
                </p>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="rounded-none"
                    variant={"default"}
                  >
                    Shop Women
                  </Button>
                  <Button size="lg" variant="ghost" className="rounded-none">
                    Shop Men
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative h-[50vh] md:h-auto order-1 md:order-2">
              <Image
                src="https://shadcnblocks.com/images/block/placeholder-dark-2.svg?height=800&width=600"
                alt="Minimal fashion collection"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
        {/* Featured Categories */}
        <section className="py-16 container">
          <h2 className="text-3xl font-bold mb-8 text-center ">
            <span className="border-b-0 border-primary">
              {t("shop-by-category")}
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCategories.map((category) => (
              <Link
                key={category.name}
                href="#"
                className="group relative overflow-hidden"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={
                      category.image ||
                      "https://shadcnblocks.com/images/block/placeholder-dark-2.svg"
                    }
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white font-medium text-xl mb-2">
                      {category.name}
                    </h3>
                    <span className="text-white/80 text-sm flex items-center group-hover:translate-x-2 transition-transform">
                      Shop now <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        {/* New Arrivals Tabs */}
        <section className="py-16 bg-primary-foreground/80 px-16">
          <div className="container w-full">
            <h2 className="text-3xl font-bold mb-8 text-center">
              New Arrivals
            </h2>
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="women">Women</TabsTrigger>
                  <TabsTrigger value="men">Men</TabsTrigger>
                  <TabsTrigger value="accessories">Accessories</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {newArrivals.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="women" className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {newArrivals
                    .filter((p) => p.category === "Women")
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="men" className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {newArrivals
                    .filter((p) => p.category === "Men")
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="accessories" className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {newArrivals
                    .filter((p) => p.category === "Accessories")
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center mt-10">
              <Button variant="outline" className="rounded-none">
                View All Products <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Split Content Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-square">
                <Image
                  src="https://shadcnblocks.com/images/block/placeholder-dark-2.svg?height=600&width=600"
                  alt="Sustainable fashion"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="max-w-md mx-auto md:mx-0">
                <h2 className="text-3xl font-bold mb-4">Sustainable Fashion</h2>
                <p className="text-muted-foreground mb-6">
                  Our commitment to sustainability goes beyond just using
                  eco-friendly materials. We ensure ethical manufacturing
                  processes and fair wages for all workers involved in creating
                  our products.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Badge
                      variant="outline"
                      className="mr-2 rounded-full h-6 w-6 p-0 flex items-center justify-center"
                    >
                      ✓
                    </Badge>
                    Organic and recycled materials
                  </li>
                  <li className="flex items-center">
                    <Badge
                      variant="outline"
                      className="mr-2 rounded-full h-6 w-6 p-0 flex items-center justify-center"
                    >
                      ✓
                    </Badge>
                    Ethical manufacturing
                  </li>
                  <li className="flex items-center">
                    <Badge
                      variant="outline"
                      className="mr-2 rounded-full h-6 w-6 p-0 flex items-center justify-center"
                    >
                      ✓
                    </Badge>
                    Reduced carbon footprint
                  </li>
                </ul>
                <Button className="rounded-none">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        <section className="py-16 bg-primary-foreground/80 px-16">
          <div className="container">
            <div className="flex flex-col items-center mb-8">
              <h2 className="text-3xl font-bold mb-2 text-center">
                Follow Us on Instagram
              </h2>
              <p className="text-muted-foreground text-center max-w-md">
                Tag your photos with #MinimalStyle for a chance to be featured
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {instagramPosts.map((post, index) => (
                <Link
                  key={index}
                  href="#"
                  className="group relative aspect-square overflow-hidden"
                >
                  <Image
                    src={
                      post.image ||
                      "https://shadcnblocks.com/images/block/placeholder-dark-2.svg"
                    }
                    alt={`Instagram post ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Instagram className="text-white h-6 w-6" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="mb-6">
                Subscribe to our newsletter for exclusive offers, style tips,
                and new arrivals.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-primary-foreground text-primary rounded-none"
                />
                <Button variant="secondary" className="rounded-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quick View Modal (simplified) */}
      <div className="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <div className="bg-background p-6 max-w-4xl w-full max-h-[90vh] overflow-auto">
          <div className="flex justify-end mb-4">
            <Button variant="ghost" size="icon">
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product images would go here */}
            {/* Product details would go here */}
          </div>
        </div>
      </div>
    </div>
  );
}

// Product Card Component
// @ts-ignore
function ProductCard({ product }) {
  return (
    <div className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-3">
        <Image
          src={
            product.image ||
            "https://shadcnblocks.com/images/block/placeholder-dark-2.svg"
          }
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <Badge className="absolute top-2 left-2 rounded-none">
            {product.badge}
          </Badge>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="secondary" size="sm" className="w-full rounded-none">
            Quick View
          </Button>
        </div>
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{product.category}</p>
        <h3 className="font-medium">{product.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-medium">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// Sample data
const featuredCategories = [
  {
    name: "Flowers",
    image:
      "https://shadcnblocks.com/images/block/placeholder-dark-2.svg?height=600&width=400",
  },
  {
    name: "Gifts",
    image:
      "https://shadcnblocks.com/images/block/placeholder-dark-2.svg?height=600&width=400",
  },
  {
    name: "Ornaments",
    image:
      "https://shadcnblocks.com/images/block/placeholder-dark-2.svg?height=600&width=400",
  },
];

const newArrivals = [
  {
    id: 1,
    name: "Oversized Cotton Shirt",
    category: "Women",
    price: 89.99,
    image:
      "https://shadcnblocks.com/images/block/placeholder-dark-2.svg?height=600&width=450",
    badge: "New",
  },
  {
    id: 2,
    name: "Linen Blend Trousers",
    category: "Men",
    price: 119.99,
    image:
      "https://shadcnblocks.com/images/block/placeholder-dark-2.svg?height=600&width=450",
  },
  {
    id: 3,
    name: "Relaxed Fit T-Shirt",
    category: "Men",
    price: 49.99,
    originalPrice: 69.99,
    image:
      "https://shadcnblocks.com/images/block/placeholder-dark-2.svg?height=600&width=450",
    badge: "Sale",
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    category: "Accessories",
    price: 159.99,
    image:
      "https://shadcnblocks.com/images/block/placeholder-dark-2.svg?height=600&width=450",
  },
  {
    id: 5,
    name: "Pleated Midi Skirt",
    category: "Women",
    price: 99.99,
    image:
      "https://shadcnblocks.com/images/block/placeholder-dark-2.svg?height=600&width=450",
  },
  {
    id: 6,
    name: "Slim Fit Denim Jeans",
    category: "Men",
    price: 129.99,
    image:
      "https://shadcnblocks.com/images/block/placeholder-dark-2.svg?height=600&width=450",
  },
  {
    id: 7,
    name: "Silk Scarf",
    category: "Accessories",
    price: 79.99,
    image:
      "https://shadcnblocks.com/images/block/placeholder-dark-2.svg?height=600&width=450",
  },
  {
    id: 8,
    name: "Cotton Blend Dress",
    category: "Women",
    price: 139.99,
    originalPrice: 179.99,
    image:
      "https://shadcnblocks.com/images/block/placeholder-dark-2.svg?height=600&width=450",
    badge: "Sale",
  },
];

const instagramPosts = [
  {
    image:
      "https://shadcnblocks.com/images/block/placeholder-dark-2.svg?height=300&width=300",
  },
  {
    image:
      "https://shadcnblocks.com/images/block/placeholder-dark-2.svg?height=300&width=300",
  },
  {
    image:
      "https://shadcnblocks.com/images/block/placeholder-dark-2.svg?height=300&width=300",
  },
  {
    image:
      "https://shadcnblocks.com/images/block/placeholder-dark-2.svg?height=300&width=300",
  },
  {
    image:
      "https://shadcnblocks.com/images/block/placeholder-dark-2.svg?height=300&width=300",
  },
  {
    image:
      "https://shadcnblocks.com/images/block/placeholder-dark-2.svg?height=300&width=300",
  },
];
