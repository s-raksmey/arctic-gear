import { generateSubCategoryPageSEO } from '@/lib/seo';
import { unslugify } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

interface SubCategoryPageProps {
  params: Promise<{ category: string; subCategory: string }>;
}

export async function generateMetadata({
  params,
}: SubCategoryPageProps): Promise<Metadata> {
  const { category, subCategory } = await params;
  return generateSubCategoryPageSEO(
    unslugify(category),
    unslugify(subCategory)
  );
}

export default async function SubCategoryPage({
  params,
}: SubCategoryPageProps) {
  const { category, subCategory } = await params;
  const categoryName = unslugify(category);
  const subCategoryName = unslugify(subCategory);

  const products = [
    'arctic-expedition-jacket',
    'thermal-base-layer-set',
    'insulated-winter-boots',
    'waterproof-gloves',
    'heated-socks',
    'wind-resistant-pants',
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
          <Link
            href={`/${category}`}
            className="transition-colors hover:text-white/70"
          >
            {categoryName}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-white/70">{subCategoryName}</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-blue-400">
            {categoryName}
          </p>
          <h1 className="mb-3 text-5xl font-bold tracking-tight text-white">
            {subCategoryName}
          </h1>
          <p className="text-lg text-white/50">
            Premium {subCategoryName.toLowerCase()} from our{' '}
            {categoryName.toLowerCase()} collection. Built for extreme arctic
            conditions with cutting-edge technology.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map(product => (
            <div
              key={product}
              className="border-white/8 hover:bg-white/8 group relative overflow-hidden rounded-2xl border bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/15"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-white/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-white/20">Product Image</span>
                </div>
                <div className="bg-linear-to-r absolute inset-0 -translate-x-full from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="mb-1 font-semibold text-white">
                  {unslugify(product)}
                </h3>
                <p className="mb-4 text-xs leading-relaxed text-white/40">
                  High-quality {unslugify(product).toLowerCase()} designed for
                  extreme weather.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">$299.99</span>
                  <Link
                    href={`/${category}/${subCategory}/${product}`}
                    className="rounded-lg bg-blue-500/15 px-3 py-1.5 text-xs font-medium text-blue-400 transition-all hover:bg-blue-500/25 hover:text-blue-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
