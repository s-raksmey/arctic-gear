import { generateProductPageSEO } from '@/lib/seo';
import { unslugify } from '@/lib/utils';
import { Check, ChevronRight, Heart, ShoppingCart } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

interface ProductPageProps {
  params: Promise<{ category: string; subCategory: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { category, subCategory, slug } = await params;
  return generateProductPageSEO(
    unslugify(category),
    unslugify(subCategory),
    slug
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, subCategory, slug } = await params;
  const categoryName = unslugify(category);
  const subCategoryName = unslugify(subCategory);
  const productName = unslugify(slug);

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
      Material: 'High-tech synthetic blend',
      Insulation: 'Premium down alternative',
      Weight: '1.2 kg',
      'Temperature Rating': '-40°C to -10°C',
      Sizes: 'XS, S, M, L, XL, XXL',
      Colors: 'Arctic Blue, Glacier White, Storm Gray',
    },
    images: [
      '/product-image-1.jpg',
      '/product-image-2.jpg',
      '/product-image-3.jpg',
    ],
  };

  const savings = (product.originalPrice - product.price).toFixed(2);

  return (
    <main className="min-h-screen bg-[#0a0f1a] pb-20 pt-28">
      {/* Ambient glow */}
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
          <Link
            href={`/${category}/${subCategory}`}
            className="transition-colors hover:text-white/70"
          >
            {subCategoryName}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-white/70">{productName}</span>
        </nav>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Images */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="border-white/8 flex aspect-square items-center justify-center overflow-hidden rounded-2xl border bg-white/5 backdrop-blur-sm">
              <span className="text-white/20">Main Product Image</span>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((_, index) => (
                <div
                  key={index}
                  className="border-white/8 flex aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-xl border bg-white/5 transition-all hover:border-white/20"
                >
                  <span className="text-xs text-white/20">
                    Image {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-7">
            {/* Title */}
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-blue-400">
                {categoryName} · {subCategoryName}
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white">
                {product.name}
              </h1>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-white">
                ${product.price}
              </span>
              <span className="text-xl text-white/30 line-through">
                ${product.originalPrice}
              </span>
              <span className="rounded-lg bg-blue-500/15 px-2.5 py-1 text-sm font-medium text-blue-400">
                Save ${savings}
              </span>
            </div>

            {/* Description */}
            <p className="leading-relaxed text-white/50">
              {product.description}
            </p>

            {/* Features */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/40">
                Key Features
              </h3>
              <ul className="space-y-2.5">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-sm text-white/70"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/15">
                      <Check className="h-3 w-3 text-blue-400" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-2">
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-400 active:scale-[0.99]">
                <ShoppingCart className="h-4 w-4" />
                Add to Cart — ${product.price}
              </button>
              <button className="hover:bg-white/8 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3.5 text-sm font-semibold text-white/70 transition-all hover:text-white">
                <Heart className="h-4 w-4" />
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-20">
          <h2 className="mb-6 text-2xl font-bold text-white">Specifications</h2>
          <div className="border-white/8 rounded-2xl border bg-white/5 p-6 backdrop-blur-sm">
            <dl className="grid grid-cols-1 gap-px md:grid-cols-2">
              {Object.entries(product.specifications).map(
                ([key, value], index) => (
                  <div
                    key={key}
                    className="flex flex-col gap-1 border-b border-white/5 py-4 last:border-0 md:px-4"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-widest text-white/30">
                      {key}
                    </dt>
                    <dd className="text-sm text-white/70">{value}</dd>
                  </div>
                )
              )}
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}
