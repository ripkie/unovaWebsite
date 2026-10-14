"use client";

import { useState } from "react";

import { products } from "@/lib/data/products";
export function useProductsState() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + products.length) % products.length);
  const next = () => setCurrent((c) => (c + 1) % products.length);
  const product = products[current];
  return { current, setCurrent, prev, next, product };
}
export type ProductsSectionProps = ReturnType<typeof useProductsState>;
