import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article'; // Only allow valid Open Graph types
}

const defaultSEO = {
  title: process.env.NEXT_PUBLIC_SITE_NAME || 'Arctic Accessoires',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Your premium arctic accessories destination',
  keywords:
    process.env.NEXT_PUBLIC_SITE_KEYWORDS ||
    'arctic accessories, winter clothing, outdoor equipment',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  image: '/og-image.jpg',
};

export function generateSEO({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
}: SEOProps = {}): Metadata {
  const seoTitle = title ? `${title} | ${defaultSEO.title}` : defaultSEO.title;
  const seoDescription = description || defaultSEO.description;
  const seoKeywords = keywords || defaultSEO.keywords;
  const seoImage = image || defaultSEO.image;
  const seoUrl = url || defaultSEO.url;
  // Only allow 'website' or 'article' for Open Graph type
  const ogType: 'website' | 'article' =
    type === 'article' ? 'article' : 'website';

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    authors: [{ name: defaultSEO.title }],
    creator: defaultSEO.title,
    publisher: defaultSEO.title,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoUrl),
    alternates: {
      canonical: seoUrl,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: seoUrl,
      siteName: defaultSEO.title,
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
      locale: 'en_US',
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
      creator: '@arcticgear',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
  };
}

export function generateCategoryPageSEO(category: string): Metadata {
  return generateSEO({
    title: `${category} - Premium Arctic Accessories`,
    description: `Discover our premium ${category.toLowerCase()} collection. High-quality arctic accessories for extreme weather conditions.`,
    keywords: `${category.toLowerCase()}, arctic accessories`,
    type: 'website',
  });
}

export function generateSubCategoryPageSEO(
  category: string,
  subCategory: string
): Metadata {
  return generateSEO({
    title: `${subCategory} ${category} - Arctic Accessories Collection`,
    description: `Shop our ${subCategory.toLowerCase()} ${category.toLowerCase()} collection. Premium quality arctic accessories designed for extreme conditions.`,
    keywords: `${subCategory.toLowerCase()}, ${category.toLowerCase()}, arctic accessories, winter clothing`,
    type: 'website',
  });
}

export function generateProductPageSEO(
  category: string,
  subCategory: string,
  slug: string
): Metadata {
  const productName = slug.replace(/-/g, ' ');
  return generateSEO({
    title: `${productName} - ${subCategory} ${category}`,
    description: `Premium ${productName.toLowerCase()} from our ${subCategory.toLowerCase()} ${category.toLowerCase()} collection. Built for extreme arctic conditions.`,
    keywords: `${productName.toLowerCase()}, ${subCategory.toLowerCase()}, ${category.toLowerCase()}, arctic gear`,
    type: 'website', // fallback to website for Open Graph
  });
}
