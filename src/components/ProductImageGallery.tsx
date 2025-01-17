import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product, ProductImage } from '@/types';

interface ProductImageGalleryProps {
  product: Product;
  images: ProductImage[];
}

export function ProductImageGallery({ product, images }: ProductImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100">
        <img
          src={images[currentIndex].url}
          alt={`${product.name} - Image ${currentIndex + 1}`}
          className="object-cover w-full h-full"
        />
        {product.grade && (
          <Badge className="absolute top-4 right-4 bg-accent">
            {product.grade}
          </Badge>
        )}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
              onClick={previousImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 ${
                currentIndex === index ? 'ring-2 ring-accent' : ''
              }`}
            >
              <img
                src={image.url}
                alt={`${product.name} thumbnail ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}