'use client';

import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import { Button } from '@/components/ui/button';

const slides = [
  {
    title: 'Premium Arctic Gear',
    description: 'Stay warm, dry, and protected in the harshest environments.',
    image: '/images/hero-1.png',
  },
  {
    title: 'Built for Extreme Cold',
    description: 'Engineered clothing tested in real arctic expeditions.',
    image: '/images/hero-2.png',
  },
  {
    title: 'Adventure Ready Equipment',
    description: 'Gear up with professional-grade survival equipment.',
    image: '/images/hero-3.png',
  },
];

export function HeroCarousel() {
  // Lazily create autoplay plugin
  const autoplay = React.useMemo(
    () =>
      Autoplay({
        delay: 4000, // slides every 4 seconds
        stopOnInteraction: false, // never stop on click
        stopOnMouseEnter: false, // never stop on hover
      }),
    []
  );

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Carousel opts={{ loop: true }} plugins={[autoplay]} className="h-full">
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-screen">
              <div className="relative h-full w-full">
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="relative z-10 flex h-full items-center">
                  <div className="container mx-auto px-6">
                    <div className="max-w-2xl text-white">
                      <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                        {slide.title}
                      </h1>
                      <p className="mb-8 text-lg text-gray-200 md:text-xl">
                        {slide.description}
                      </p>

                      <div className="flex flex-col gap-4 sm:flex-row">
                        <Button
                          size="lg"
                          className="bg-white text-black hover:bg-gray-200"
                        >
                          Shop Now
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="bg-white text-black hover:bg-gray-200"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom gradient */}
                <div className="bg-linear-to-t absolute bottom-0 h-32 w-full from-black/70 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
