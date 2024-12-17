"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface Photo {
  id: number;
  src: string;
  alt: string;
  style?: {
    top: string;
    left: string;
    transform: string;
  };
}

const PhotoHeart = () => {
  const [mounted, setMounted] = useState(false);
  const [focusedId, setFocusedId] = useState<number | null>(null);
  const isMobile = useMediaQuery('(max-width: 1024px)');

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a placeholder during server-side rendering
  if (!mounted) {
    return (
      <div className="relative w-full h-[400px] md:h-[600px] bg-base-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </div>
    );
  }

  // Mobile grid layout photos
  const mobilePhotos: Photo[] = [
    { id: 1, src: "/images/IMG_1785.jpg", alt: "Photo 1" },
    { id: 2, src: "/images/IMG_1308.jpg", alt: "Photo 2" },
    { id: 3, src: "/images/IMG_1289.jpg", alt: "Photo 3" },
    { id: 4, src: "/images/IMG_1338.jpg", alt: "Photo 4" },
    { id: 5, src: "/images/IMG_1230.jpg", alt: "Photo 5" },
    { id: 7, src: "/images/IMG_1180.jpg", alt: "Photo 7" },
    { id: 8, src: "/images/IMG_0932.jpg", alt: "Photo 8" },
    { id: 9, src: "/images/IMG_0967.jpg", alt: "Photo 9" },
    { id: 18, src: "/images/IMG_2263.jpg", alt: "Photo 18" },
    { id: 17, src: "/images/IMG_2197.jpg", alt: "Photo 17" },
    { id: 16, src: "/images/IMG_2016.jpg", alt: "Photo 16" },
    { id: 14, src: "/images/IMG_Beach.jpg", alt: "Photo 14" },
    { id: 13, src: "/images/IMG_Cafe.jpg", alt: "Photo 13" },
    { id: 12, src: "/images/IMG_1262.jpg", alt: "Photo 12" },
    { id: 11, src: "/images/IMG_2255.jpg", alt: "Photo 11" },
    { id: 10, src: "/images/IMG_2255.jpg", alt: "Photo 10" },
    { id: 19, src: "/images/IMG_1907.jpg", alt: "Photo 19" },
  ];

  // Desktop heart layout photos
  const desktopPhotos: Photo[] = [
    // Left curve of heart (top to bottom)
    { id: 1, src: "/images/IMG_1785.jpg", alt: "Photo 1", style: { top: "10%", left: "25%", transform: "rotate(0deg)" } },
    { id: 2, src: "/images/IMG_1308.jpg", alt: "Photo 2", style: { top: "20%", left: "25%", transform: "rotate(0deg)" } },
    { id: 3, src: "/images/IMG_1289.jpg", alt: "Photo 3", style: { top: "30%", left: "25%", transform: "rotate(0deg)" } },
    { id: 4, src: "/images/IMG_1338.jpg", alt: "Photo 4", style: { top: "40%", left: "25%", transform: "rotate(0deg)" } },
    { id: 5, src: "/images/IMG_1230.jpg", alt: "Photo 5", style: { top: "50%", left: "25%", transform: "rotate(0deg)" } },
    { id: 7, src: "/images/IMG_1180.jpg", alt: "Photo 7", style: { top: "20%", left: "15%", transform: "rotate(0deg)" } },
    { id: 8, src: "/images/IMG_0932.jpg", alt: "Photo 8", style: { top: "30%", left: "15%", transform: "rotate(0deg)" } },
    { id: 9, src: "/images/IMG_0967.jpg", alt: "Photo 9", style: { top: "30%", left: "35%", transform: "rotate(0deg)" } },
    
    // Bottom to right curve (bottom to top)
    { id: 18, src: "/images/IMG_2263.jpg", alt: "Photo 18", style: { top: "48%", left: "35%", transform: "rotate(0deg)" } },
    { id: 17, src: "/images/IMG_2197.jpg", alt: "Photo 17", style: { top: "30%", left: "55%", transform: "rotate(0deg)" } },
    { id: 16, src: "/images/IMG_2016.jpg", alt: "Photo 16", style: { top: "20%", left: "55%", transform: "rotate(0deg)" } },
    { id: 14, src: "/images/IMG_Beach.jpg", alt: "Photo 14", style: { top: "50%", left: "45%", transform: "rotate(0deg)" } },
    { id: 13, src: "/images/IMG_Cafe.jpg", alt: "Photo 13", style: { top: "40%", left: "45%", transform: "rotate(0deg)" } },
    { id: 12, src: "/images/IMG_1262.jpg", alt: "Photo 12", style: { top: "30%", left: "45%", transform: "rotate(0deg)" } },
    { id: 11, src: "/images/IMG_2255.jpg", alt: "Photo 11", style: { top: "20%", left: "45%", transform: "rotate(0deg)" } },
    { id: 10, src: "/images/IMG_2255.jpg", alt: "Photo 10", style: { top: "10%", left: "45%", transform: "rotate(0deg)" } },
    
    // Top of heart (deeper inward curve)
    { id: 19, src: "/images/IMG_1907.jpg", alt: "Photo 19", style: { top: "20%", left: "35%", transform: "rotate(0deg)" } },
  ];

  if (isMobile) {
    return (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-1 p-2">
          {mobilePhotos.map((photo) => (
            <div
              key={photo.id}
              className="aspect-square relative"
              onClick={() => setFocusedId(focusedId === photo.id ? null : photo.id)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={`object-cover rounded-sm shadow-lg cursor-pointer border-2 border-white transition-transform duration-300
                  ${focusedId === photo.id ? 'scale-150 z-50' : 'hover:scale-110 z-10'}
                `}
                sizes="(max-width: 768px) 33vw, 80px"
                priority
              />
            </div>
          ))}
        </div>
        <div className="bottom-20 left-0 right-0 mx-auto px-4 mb-5 max-w-[100%] text-center font-dancing-script text-2xl">
          In the warmth of family, love is always welcome, hearts are always open, and spirits are always light.
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-1 p-2">
        {desktopPhotos.map((photo) => (
          <div
            key={photo.id}
            className="absolute ml-10"
            style={photo.style}
            onClick={() => setFocusedId(focusedId === photo.id ? null : photo.id)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={80}
              height={80}
              className={`rounded-sm shadow-lg cursor-pointer border-4 border-white object-cover transition-transform duration-300
                ${focusedId === photo.id ? 'scale-150 z-50' : 'hover:scale-125 z-10'}
              `}
              priority
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-20 left-0 right-0 mx-auto px-4 max-w-[80%] text-center font-dancing-script text-2xl">
         In the warmth of family, love is always welcome, hearts are always open, and spirits are always light.
      </div>
    </div>
  );
};

export default PhotoHeart; 