import { Metadata } from 'next';
import Link from 'next/link';
import { generateSubCategoryPageSEO } from '@/lib/seo';
import { unslugify } from '@/lib/utils';

interface SubCategoryPageProps {
  params: Promise<{
    category: string;
    subCategory: string;
  }>;
}

export async function generateMetadata({ params }: SubCategoryPageProps): Promise<Metadata> {
  const { category, subCategory } = await params;
  const categoryName = unslugify(category);
  const subCategoryName = unslugify(subCategory);
  return generateSubCategoryPageSEO(categoryName, subCategoryName);
}

export default async function SubCategoryPage({ params }: SubCategoryPageProps) {
  const { category, subCategory } = await params;
  const categoryName = unslugify(category);
  const subCategoryName = unslugify(subCategory);

  // Mock products - replace with your actual data fetching logic
  const products = [
    'arctic-expedition-jacket',
    'thermal-base-layer-set',
    'insulated-winter-boots',
    'waterproof-gloves',
    'heated-socks',
    'wind-resistant-pants',
  ];

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
          <li className="text-gray-900">{subCategoryName}</li>
        </ol>
      </nav>

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {subCategoryName} - {categoryName}
        </h1>
        <p className="text-lg text-gray-600">
          Premium {subCategoryName.toLowerCase()} from our {categoryName.toLowerCase()} collection. 
          Built for extreme arctic conditions with cutting-edge technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {unslugify(product)}
              </h3>
              <p className="text-gray-600 mb-3 text-sm">
                High-quality {unslugify(product).toLowerCase()} designed for extreme weather.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">$299.99</span>
                <Link
                  href={`/${category}/${subCategory}/${product}`}
                  className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
