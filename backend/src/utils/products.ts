import { ExternalApiResponse, Product } from "../types";

function organizeById(list: Product[]): Product[] {
  // Create an auxiliary object to store objects by unique ID
  const objectsById: Record<number, Product> = {};

  // Iterate over the list and organize objects by ID
  list.forEach((p) => {
    const id = p.id;

    // Check if a product with the same ID already exists in the auxiliary object
    if (!objectsById[id]) {
      // If it doesn't exist, add the product to the auxiliary object
      objectsById[id] = p;
    }
  });

  // Create an array from the values of the auxiliary object
  const result = Object.values(objectsById);

  return result;
}

export function normalizeProducts(rawApiResponse: ExternalApiResponse) {
  const noFlattedProductsArr = rawApiResponse.carts.map(
    (cart) => cart.products
  );

  const flattedProducts = noFlattedProductsArr.flat();

  const productsArr = Array.from(new Set(flattedProducts));

  return { data: organizeById(productsArr) };
}
