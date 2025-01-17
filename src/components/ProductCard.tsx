import { Product } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    addItem(product, 1);
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link to={`/product/${product.id}`}>
        <CardContent className="p-0">
          <div className="aspect-square relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {product.grade && (
              <Badge className="absolute top-2 right-2 bg-accent">
                {product.grade}
              </Badge>
            )}
            {!product.inStock && (
              <Badge className="absolute top-2 left-2 bg-destructive">
                Out of Stock
              </Badge>
            )}
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg group-hover:text-accent transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {product.scale && `Scale ${product.scale} • `}{product. category}
                </p>
              </div>
              <p className="font-bold text-lg whitespace-nowrap">
                ${product.price.toFixed(2)}
              </p>
            </div>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
              {product.description}
            </p>
            <Button
              className="w-full mt-4 bg-accent hover:bg-accent/90"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}