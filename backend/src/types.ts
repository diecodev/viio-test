// DB TYPES
export type Users = {
  email: string;
  password: string;
};

export type Products = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  thumbnail: string;
};
// END DB TYPES

// ENV VARS TYPES
export type EnvVariables = {
  JWT_SECRET: string;
  JWT_COOKIE: string;
  PRODUCTS_API_URL: string
};
