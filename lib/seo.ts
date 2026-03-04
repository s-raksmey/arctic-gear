import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
}

const defaultSEO = {
  title: process.env.NEXT_PUBLIC_SITE_NAME || 'Arctic Gear',
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Your premium arctic gear destination',
  keywords: process.env.NEXT_PUBLIC_SITE_KEYWORDS || 'arctic gear, winter clothing, outdoor equipment',
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
      type: type,
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
    title: `${category} - Premium Arctic Gear`,
    description: `Discover our premium ${category.toLowerCase()} collection. High-quality arctic gear for extreme weather conditions.`,
    keywords: `${category.toLowerCase()}, arctic gear, winter equipment, outdoor gear`,
    type: 'website',
  });
}

export function generateSubCategoryPageSEO(category: string, subCategory: string): Metadata {
  return generateSEO({
    title: `${subCategory} ${category} - Arctic Gear Collection`,
    description: `Shop our ${subCategory.toLowerCase()} ${category.toLowerCase()} collection. Premium quality arctic gear designed for extreme conditions.`,
    keywords: `${subCategory.toLowerCase()}, ${category.toLowerCase()}, arctic gear, winter equipment`,
    type: 'website',
  });
}

export function generateProductPageSEO(category: string, subCategory: string, slug: string): Metadata {
  const productName = slug.replace(/-/g, ' ');
  return generateSEO({
    title: `${productName} - ${subCategory} ${category}`,
    description: `Premium ${productName.toLowerCase()} from our ${subCategory.toLowerCase()} ${category.toLowerCase()} collection. Built for extreme arctic conditions.`,
    keywords: `${productName.toLowerCase()}, ${subCategory.toLowerCase()}, ${category.toLowerCase()}, arctic gear`,
    type: 'product',
  });
}
