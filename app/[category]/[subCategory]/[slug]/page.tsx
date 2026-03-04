import { Metadata } from 'next';
import Link from 'next/link';
import { generateProductPageSEO } from '@/lib/seo';
import { unslugify } from '@/lib/utils';

interface ProductPageProps {
  params: Promise<{
    category: string;
    subCategory: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { category, subCategory, slug } = await params;
  const categoryName = unslugify(category);
  const subCategoryName = unslugify(subCategory);
  return generateProductPageSEO(categoryName, subCategoryName, slug);
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, subCategory, slug } = await params;
  const categoryName = unslugify(category);
  const subCategoryName = unslugify(subCategory);
  const productName = unslugify(slug);

  // Mock product data - replace with your actual data fetching logic
  const product = {
    name: productName,
    price: 299.99,
    originalPrice: 399.99,
    description: `Premium ${productName.toLowerCase()} designed for extreme arctic conditions. Features advanced insulation technology and weather-resistant materials.`,
    features: [
      'Waterproof and windproof construction',
      'Advanced thermal insulation',
      'Breathable fabric technology',
      'Reinforced stress points',
      'Adjustable fit system',
      'Lifetime warranty',
    ],
    specifications: {
      'Material': 'High-tech synthetic blend',
      'Insulation': 'Premium down alternative',
      'Weight': '1.2 kg',
      'Temperature Rating': '-40°C to -10°C',
      'Sizes': 'XS, S, M, L, XL, XXL',
      'Colors': 'Arctic Blue, Glacier White, Storm Gray',
    },
    images: [
      '/product-image-1.jpg',
      '/product-image-2.jpg',
      '/product-image-3.jpg',
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-gray-700">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href={`/${category}`} className="hover:text-gray-700">{categoryName}</Link>
          </li>
          <li>/</li>
          <li>
            <Link href={`/${category}/${subCategory}`} className="hover:text-gray-700">{subCategoryName}</Link>
          </li>
          <li>/</li>
          <li className="text-gray-900">{productName}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Main Product Image</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((_, index) => (
              <div key={index} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-xs">Image {index + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            <p className="text-sm text-gray-500">
              {categoryName} → {subCategoryName}
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xl text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-md text-sm font-medium">
              Save ${(product.originalPrice! - product.price).toFixed(2)}
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Add to Cart Button */}
          <div className="space-y-4">
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Add to Cart - ${product.price}
            </button>
            <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="border-b border-gray-200 pb-2">
                <dt className="font-semibold text-gray-900">{key}</dt>
                <dd className="text-gray-600">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
