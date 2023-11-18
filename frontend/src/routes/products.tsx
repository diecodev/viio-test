import useSWR from "swr";
import { ProductsApiResponse } from "../types";
import { ProductCard } from "../components/products/card";
import { swrGetFetcher } from "../utils";

export function ProductRoute() {
  const { data } = useSWR<ProductsApiResponse>("/api/products", swrGetFetcher, {
    suspense: true,
  });

  return (
    <main>
      <div>
        <h1 className="text-center text-2xl font-bold">Products</h1>
        <p className="text-center">This are the list of products available</p>
      </div>
      <section className="mx-auto mt-8 grid max-w-screen-lg grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data!.data.map((p) => (
          <ProductCard product={p} />
        ))}
      </section>
    </main>
  );
}
