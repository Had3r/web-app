import { twMerge } from 'tailwind-merge';

import type { ImageWithGradientProps } from './ImageWithGradient.type';

export const ImageWithGradient = ({
  className,
  text,
  img,
}: ImageWithGradientProps) => (
  <div className={twMerge('relative ', className)}>
    <img src={img.src} alt={img.alt} className="max-h-64 object-cover w-full" />
    <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-75"></div>
    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
        {text}
      </h1>
    </div>
  </div>
);
