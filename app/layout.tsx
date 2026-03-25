import { Footer } from '@/components/footer'; // 👈 add this
import { Navbar } from '@/components/navbar';
import { interFont } from '@/lib/font';
import { generateSEO } from '@/lib/seo';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = generateSEO();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(interFont.variable)}>
      <body className="flex min-h-screen flex-col font-sans">
        <div className="absolute left-0 top-0 z-50 w-full">
          <Navbar />
        </div>
        <main className="w-full flex-1 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
