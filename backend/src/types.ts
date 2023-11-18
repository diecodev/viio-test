// DB TYPES
export type Users = {
  email: string;
  password: string;
};

// EXTERNAL API CALL TYPES
export interface ExternalApiResponse {
  carts: Cart[];
  total: number;
  skip: number;
  limit: number;
}

export interface Cart {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  thumbnail: string;
}

// ENV VARS TYPES
export type EnvVariables = {
  JWT_SECRET: string;
  JWT_COOKIE: string;
  PRODUCTS_API_URL: string;
};
