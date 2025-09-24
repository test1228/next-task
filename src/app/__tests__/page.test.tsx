import { render, screen } from "@testing-library/react";
import Home from "../page";
import { Product } from "../../types";

jest.mock("../../components/ProductCard", () => {
  return function DummyProductCard({ product }: { product: Product }) {
    return <div data-testid="product-card">{product.title}</div>;
  };
});

describe("Home page", () => {
  it("should render the products", async () => {
    const mockProducts: Product[] = [
      {
        id: 1,
        title: "Product 1",
        price: 100,
        description: "Description 1",
        category: "Category 1",
        image: "Image 1",
        rating: { rate: 4, count: 10 },
      },
      {
        id: 2,
        title: "Product 2",
        price: 200,
        description: "Description 2",
        category: "Category 2",
        image: "Image 2",
        rating: { rate: 5, count: 20 },
      },
    ];

    // @ts-ignore
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProducts),
        ok: true,
      })
    );

    const Page = await Home();
    render(Page);

    const productCards = await screen.findAllByTestId("product-card");
    expect(productCards).toHaveLength(2);
  });
});
