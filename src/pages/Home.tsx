import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { Product } from '@/types';
import { transformProduct } from '@/lib/utils';

export function Home() {
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchNewArrivals() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(4); 

        if (error) throw error;

        if (data) {
          const transformedProducts = data.map(transformProduct);
          setNewArrivals(transformedProducts);
        }
      } catch (error) {
        console.error('Error fetching new arrivals:', error);
      }
    }

    fetchNewArrivals();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section with that sweet parallax effect */}
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images8.alphacoders.com/130/1301637.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Build Your Perfect
            <br />
            <span className="text-accent">Gunpla</span> Collection
          </h1>
          <p className="text-lg md:text-xl text-center mb-8 max-w-2xl">
            Dive into the world of Gunpla! Discover an extensive selection of model kits, tools, and
            accessories for builders of all skill levels
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
            <Link to="/catalog">Start Building</Link>
          </Button>

          <div className="absolute bottom-8 animate-bounce">
            <ArrowDown className="h-6 w-6" />
          </div>
        </div>
      </section>

      {/* Show off the new stuff */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <Button variant="outline" className="hidden sm:inline-flex" asChild>
              <Link to="/catalog">View All Products</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" asChild>
              <Link to="/catalog">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}