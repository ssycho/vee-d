import { getCart } from "@/actions/cookies";
import Product from "@/features/Cart/Product";
import { ALL_PRODUCT } from "@/features/products/mock";
import React from "react";

export default async function CartPage() {
    const savedProductIds = await getCart();
    const productIds = savedProductIds.map((product) => product.id);

    const products = productIds
        .map((id) => ALL_PRODUCT.find((p) => p.id === id))
        .filter((p) => p !== undefined);

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-serif font-medium tracking-tight py-8 border-b border-foreground/15">
                Cart
            </h1>
            <ul className="space-y-4">
                {products.map((product, key) => (
                    <li key={product.id + key}>
                        <Product product={product} />
                    </li>
                ))}
                {products.length === 0 && (
                    <li className="text-center text-foreground/60 py-2">
                        No products in cart.
                    </li>
                )}
            </ul>
        </div>
    );
}
