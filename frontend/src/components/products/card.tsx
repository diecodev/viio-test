import { Link } from "wouter";
import { Product } from "../../types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-md border p-4">
      <img
        alt={product.title + " image"}
        className="aspect-square rounded-md object-cover object-center"
        src={product.thumbnail}
        width={300}
        height={300}
      />
      <Link to={`/products`}>
        <h3
          className="mt-4 cursor-pointer truncate font-semibold hover:underline"
          title={product.title}
        >
          {product.title}
        </h3>
      </Link>
      <div className="flex items-end justify-between">
        <div className="text-sm">
          <p>Price: {product.price} USD</p>
          <p>Discount: {product.discountPercentage} %</p>
        </div>
        <button className="group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 fill-none transition-all group-hover:fill-red-400 group-hover:stroke-red-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
    </article>
  );
}
