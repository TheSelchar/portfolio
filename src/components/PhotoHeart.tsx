"use client";

import Image from 'next/image';
import { useState } from 'react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  style: {
    top: string;
    left: string;
    transform: string;
  };
}

const PhotoHeart = () => {
  const [focusedId, setFocusedId] = useState<number | null>(null);

  const photos: Photo[] = [
    // Left curve of heart (top to bottom)
    { id: 1, src: "/images/IMG_1785.jpg", alt: "Photo 1", style: { top: "3%", left: "28%", transform: "rotate(30deg)" } },
    { id: 2, src: "/images/IMG_1308.jpg", alt: "Photo 2", style: { top: "4%", left: "20%", transform: "rotate(-25deg)" } },
    { id: 3, src: "/images/IMG_1289.jpg", alt: "Photo 3", style: { top: "12%", left: "12%", transform: "rotate(-28deg)" } },
    { id: 4, src: "/images/IMG_1338.jpg", alt: "Photo 4", style: { top: "25%", left: "8%", transform: "rotate(-15deg)" } },
    { id: 5, src: "/images/IMG_1230.jpg", alt: "Photo 5", style: { top: "40%", left: "8%", transform: "rotate(-25deg)" } },
    { id: 6, src: "/images/IMG_1192.jpg", alt: "Photo 6", style: { top: "50%", left: "12%", transform: "rotate(-30deg)" } },
    { id: 7, src: "/images/IMG_1180.jpg", alt: "Photo 7", style: { top: "60%", left: "20%", transform: "rotate(-35deg)" } },
    { id: 8, src: "/images/IMG_0932.jpg", alt: "Photo 8", style: { top: "70%", left: "28%", transform: "rotate(-40deg)" } },
    { id: 9, src: "/images/IMG_0967.jpg", alt: "Photo 9", style: { top: "76%", left: "35%", transform: "rotate(-50deg)" } },
    
    // Bottom to right curve (bottom to top)
    { id: 10, src: "/images/IMG_2255.jpg", alt: "Photo 10", style: { top: "82%", left: "44%", transform: "rotate(30deg)" } },
    { id: 11, src: "/images/IMG_2197.jpg", alt: "Photo 11", style: { top: "72%", left: "50%", transform: "rotate(25deg)" } },
    { id: 12, src: "/images/IMG_2016.jpg", alt: "Photo 12", style: { top: "58%", left: "55%", transform: "rotate(22deg)" } },
    { id: 13, src: "/images/IMG_1262.jpg", alt: "Photo 13", style: { top: "44%", left: "60%", transform: "rotate(22deg)" } },
    { id: 14, src: "/images/IMG_Beach.jpg", alt: "Photo 14", style: { top: "30%", left: "63%", transform: "rotate(20deg)" } },
    { id: 15, src: "/images/IMG_Cafe.jpg", alt: "Photo 15", style: { top: "15%", left: "63%", transform: "rotate(-15deg)" } },
    { id: 16, src: "/images/IMG_1502.jpg", alt: "Photo 16", style: { top: "4%", left: "58%", transform: "rotate(18deg)" } },
    { id: 17, src: "/images/IMG_2150.jpg", alt: "Photo 17", style: { top: "3%", left: "48%", transform: "rotate(0deg)" } },
    
    // Top of heart (deeper inward curve)
    { id: 18, src: "/images/IMG_2263.jpg", alt: "Photo 18", style: { top: "3%", left: "42%", transform: "rotate(-30deg)" } },
    { id: 19, src: "/images/IMG_1907.jpg", alt: "Photo 19", style: { top: "10%", left: "35%", transform: "rotate(35deg)" } },
  ]; 

  return (
    <div className="relative w-full h-[500px]">
      <div className="absolute top-1/2 left-[43%] transform -translate-x-1/2 -translate-y-1/2 text-center z-0">
        <h1 className="text-4xl font-bold text-neutral-700">My</h1>
        <h1 className="text-4xl font-bold text-neutral-700">Heart</h1>
      </div>
      {photos.map((photo) => (
        <div
          key={photo.id}
          className={`absolute transition-all duration-300 ease-in-out
            ${focusedId === photo.id ? 'z-50 scale-150' : 'z-10 hover:scale-125 hover:z-20'}
          `}
          style={{
            top: photo.style.top,
            left: photo.style.left,
            transform: photo.style.transform,
          }}
          onClick={() => setFocusedId(focusedId === photo.id ? null : photo.id)}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            width={80}
            height={80}
            className="rounded-sm shadow-lg cursor-pointer border-4 border-white"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoHeart; 