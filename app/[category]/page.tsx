import { Metadata } from 'next';
import { generateCategoryPageSEO } from '@/lib/seo';
import { unslugify } from '@/lib/utils';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryName = unslugify(category);
  return generateCategoryPageSEO(categoryName);
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryName = unslugify(category);

  // Mock subcategories - replace with your actual data fetching logic
  const subCategories = [
    'winter-jackets',
    'thermal-underwear',
    'snow-boots',
    'gloves-mittens',
    'winter-accessories',
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {categoryName}
        </h1>
        <p className="text-lg text-gray-600">
          Discover our premium {categoryName.toLowerCase()} collection designed for extreme arctic conditions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subCategories.map((subCategory) => (
          <div
            key={subCategory}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Image placeholder</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {unslugify(subCategory)}
              </h3>
              <p className="text-gray-600 mb-4">
                Premium {unslugify(subCategory).toLowerCase()} for arctic conditions.
              </p>
              <a
                href={`/${category}/${subCategory}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                View Collection
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
