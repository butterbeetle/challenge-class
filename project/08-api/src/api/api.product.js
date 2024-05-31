import { BASE_URL } from "./api";

export const getProduct = async (productId) => {
  const endpoint = `${BASE_URL}/products/${productId}`;
  const res = await fetch(endpoint);
  const data = await res.json();

  return data;
};

export const getProducts = async () => {
  const endpoint = `${BASE_URL}/products`;
  const res = await fetch(endpoint);
  const data = await res.json();

  return data;
};
