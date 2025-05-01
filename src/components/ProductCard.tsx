import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Eye, ArrowDownUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(product.colorVariations[0]?.name || '');
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.title} (${selectedColor}) added to your cart`,
    });
  };

  const handleCompare = () => {
    toast({
      title: "Added to compare",
      description: `${product.title} added to comparison list`,
    });
  };

  return (
    <div className="product-card gold-border group relative flex flex-col">
      <div className="absolute top-2 right-2 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="secondary" className="bg-white/80 backdrop-blur-sm" onClick={handleCompare}>
                <ArrowDownUp size={16} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Compare</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="secondary" className="bg-white/80 backdrop-blur-sm" asChild>
                <Link to={`/product/${product.id}`} aria-label="Quick view">
                  <Eye size={16} />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Quick View</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <Link to={`/product/${product.id}`} className="block">
        <div className="product-image-container">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="p-4 space-y-2 flex-grow">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-medium truncate">{product.title}</h3>
        </Link>

        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="flex items-center gap-2 cursor-pointer">
              {product.colorVariations.slice(0, 3).map((color) => (
                <div
                  key={color.name}
                  className={`w-4 h-4 rounded-full border ${
                    selectedColor === color.name ? 'ring-2 ring-primary ring-offset-1' : 'border-border'
                  }`}
                  style={{ backgroundColor: color.color }}
                  title={color.name}
                />
              ))}
              {product.colorVariations.length > 3 && (
                <span className="text-xs text-muted-foreground">
                  +{product.colorVariations.length - 3}
                </span>
              )}
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-fit p-3">
            <div className="flex flex-wrap gap-2 max-w-[200px]">
              {product.colorVariations.map((color) => (
                <div 
                  key={color.name} 
                  className={`w-6 h-6 rounded-full cursor-pointer border transition-all ${
                    selectedColor === color.name ? 'ring-2 ring-primary ring-offset-2' : 'border-border hover:scale-110'
                  }`}
                  style={{ backgroundColor: color.color }}
                  onClick={() => setSelectedColor(color.name)}
                  title={color.name}
                />
              ))}
            </div>
          </HoverCardContent>
        </HoverCard>

        <div className="flex items-center justify-between pt-2">
          <p className="font-semibold text-primary">${product.price.toLocaleString()}</p>
          {product.featured && (
            <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
              Featured
            </span>
          )}
        </div>
      </div>

      <Button 
        onClick={handleAddToCart}
        className="mt-auto w-full rounded-t-none flex items-center justify-center gap-2 bg-primary hover:bg-primary/90"
      >
        <ShoppingCart size={16} /> Add to Cart
      </Button>
    </div>
  );
}
