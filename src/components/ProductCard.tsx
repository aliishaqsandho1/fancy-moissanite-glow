
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="product-card gold-border group">
      <div className="product-image-container">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-medium truncate">{product.title}</h3>
        <div className="flex items-center gap-2">
          {product.colorVariations.slice(0, 3).map((color) => (
            <div
              key={color.name}
              className="w-4 h-4 rounded-full border border-border"
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
        <div className="flex items-center justify-between">
          <p className="font-semibold text-primary">${product.price.toLocaleString()}</p>
          {product.featured && (
            <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
              Featured
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
