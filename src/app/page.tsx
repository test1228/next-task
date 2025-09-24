import { Product } from "../types";
import ProductCard from "../components/ProductCard";

async function getProducts() {
  const varFiltersCg = "https://fakestoreapi.com/products";
  const res = await fetch(varFiltersCg);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const varOcg: Product[] = await res.json();
  return varOcg;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center">Storefront</h1>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
