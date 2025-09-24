import { ImageResponse } from "next/server";
import { notFound } from "next/navigation";
import { Product } from "../../../types";

export const runtime = "edge";

export const alt = "Storefront";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export default async function Image({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={product.image} alt={product.title} width="256" height="256" />
        <p style={{ marginTop: "20px", textAlign: "center" }}>
          {product.title}
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
