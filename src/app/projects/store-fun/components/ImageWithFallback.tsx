'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: React.CSSProperties;
  fill?: boolean;
  priority?: boolean;
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className,
  style,
  fill,
  priority,
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  const fallbackSrc = 'https://placehold.co/500x500?text=Image+Not+Found';

  return (
    <Image
      src={error ? fallbackSrc : src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      fill={fill}
      priority={priority}
      onError={() => setError(true)}
    />
  );
} 