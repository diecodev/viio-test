import useSWR from "swr";
import { Product, ProductsApiResponse } from "../types";
import { ProductCard } from "../components/products/card";
import { swrGetFetcher } from "../utils";
import debounce from "just-debounce-it";
import { ChangeEvent, useCallback, useState } from "react";

export function ProductRoute() {
  const { data } = useSWR<ProductsApiResponse>("/api/products", swrGetFetcher, {
    suspense: true,
  });

  const [products, setProducts] = useState<Product[]>(data!.data);

  const debounceQuery = useCallback(
    debounce((query: string) => {
      const newData = data!.data.filter((p) =>
        p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
      );

      setProducts(newData);
    }, 200),
    [setProducts],
  );

  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "") {
      setProducts(data!.data);
    }

    debounceQuery(e.currentTarget.value);
  };

  return (
    <main>
      <div>
        <h1 className="text-center text-2xl font-bold">Products</h1>
        <p className="text-center">This are the list of products available</p>
      </div>
      <div className="mx-auto max-w-screen-lg">
        <div className="my-6 flex items-center justify-center">
          <input
            type="text"
            placeholder="Search a custom product"
            className="w-full max-w-screen-sm rounded-full border px-4 py-1 outline-none focus-within:border-indigo-500"
            onChange={onInput}
          />
        </div>
        <section className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard product={p} key={p.id} />
          ))}
        </section>
      </div>
    </main>
  );
}
