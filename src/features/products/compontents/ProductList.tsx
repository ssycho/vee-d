import React from "react";
import type { Product as TProduct } from "../schemas/products";
import Product from "./Product";

type Props = {
    title: string;
    products: TProduct[];
    productCount?: number;
};

function ProductList({ title, products, productCount }: Props) {
    return (
        <div className="space-y-8 mb-20">
            <h4 className="text-3xl">{title}</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                {products.slice(0, productCount || 4).map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
