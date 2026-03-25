import { generateCategoryPageSEO } from '@/lib/seo';
import { unslugify } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  return generateCategoryPageSEO(unslugify(category));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryName = unslugify(category);

  const subCategories = [
    'winter-jackets',
    'thermal-underwear',
    'snow-boots',
    'gloves-mittens',
    'winter-accessories',
  ];

  return (
    <main className="min-h-screen bg-[#0a0f1a] pb-20 pt-28">
      {/* Ambient background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="bg-cyan-500/8 absolute right-1/4 top-1/2 h-80 w-80 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-sm text-white/40">
          <Link href="/" className="transition-colors hover:text-white/70">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-white/70">{categoryName}</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-3 text-5xl font-bold tracking-tight text-white">
            {categoryName}
          </h1>
          <p className="text-lg text-white/50">
            Discover our premium {categoryName.toLowerCase()} collection
            designed for extreme arctic conditions.
          </p>
        </div>

        {/* Subcategory Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {subCategories.map(subCategory => (
            <Link
              key={subCategory}
              href={`/${category}/${subCategory}`}
              className="border-white/8 hover:bg-white/8 group relative overflow-hidden rounded-2xl border bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/15"
            >
              {/* Image placeholder */}
              <div className="relative h-52 overflow-hidden bg-white/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-white/20">
                    Image placeholder
                  </span>
                </div>
                {/* Shimmer on hover */}
                <div className="bg-linear-to-r absolute inset-0 -translate-x-full from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {unslugify(subCategory)}
                </h3>
                <p className="mb-5 text-sm text-white/40">
                  Premium {unslugify(subCategory).toLowerCase()} for arctic
                  conditions.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 transition-colors group-hover:text-blue-300">
                  View Collection
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
