import { ProductCardSkeleton } from "./card-skeleton";

export function ProductRouteSkeleton() {
  return (
    <main>
      <div>
        <h1 className="text-center text-2xl font-bold">Products</h1>
        <p className="text-center">This are the list of products available</p>
      </div>
      <section className="mx-auto mt-8 grid max-w-screen-lg grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </section>
    </main>
  );
}
