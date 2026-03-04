import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  const categories = [
    {
      title: 'Winter Clothing',
      description: 'Premium winter clothing for extreme conditions',
      href: '/winter-clothing',
      image: '/category-winter-clothing.jpg',
    },
    {
      title: 'Footwear',
      description: 'Arctic-ready boots and footwear',
      href: '/footwear',
      image: '/category-footwear.jpg',
    },
    {
      title: 'Equipment',
      description: 'Essential arctic survival equipment',
      href: '/equipment',
      image: '/category-equipment.jpg',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Premium Arctic Gear for Extreme Conditions
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover our comprehensive collection of high-quality arctic gear designed to keep you warm, dry, and safe in the harshest environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated categories of arctic gear, each designed for specific needs and conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Category Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <span className="text-blue-600 font-medium group-hover:underline">
                    Explore Collection →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Arctic Gear?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">❄️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Extreme Weather Tested
              </h3>
              <p className="text-gray-600">
                All our products are rigorously tested in real arctic conditions to ensure maximum performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Lifetime Warranty
              </h3>
              <p className="text-gray-600">
                We stand behind our products with comprehensive lifetime warranties on all premium items.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fast Shipping
              </h3>
              <p className="text-gray-600">
                Free expedited shipping on all orders over $200. Get your gear when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
