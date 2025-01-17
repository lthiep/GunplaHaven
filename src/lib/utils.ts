import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Product } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Shared product transformation utilities
export function transformProduct(productData: any): Product {
  return {
    id: productData.id,
    name: productData.name,
    grade: extractGrade(productData.name),
    scale: extractScale(productData.name),
    price: productData.price,
    image: productData.image_url,
    category: productData.category,
    description: productData.description,
    inStock: productData.stock_quantity > 0
  };
}

export function extractGrade(name: string) {
  const gradeMatch = name.match(/\((HG|RG|MG|PG)\)/);
  return gradeMatch ? gradeMatch[1] as Product['grade'] : undefined;
}

export function extractScale(name: string) {
  const scaleMatch = name.match(/1\/\d+/);
  return scaleMatch ? scaleMatch[0] : undefined;
}