import ProductList from "@/features/products/compontents/ProductList";
import { ALL_PRODUCT } from "@/features/products/mock";
import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function ProductLayoutPage({ children }: Props) {
    const randomizedProducts = ALL_PRODUCT.sort(() => 0.5 - Math.random());
    return (
        <div className="container mx-auto lg:px-0 px-6 space-y-8">
            {children}
            <ProductList
                products={randomizedProducts}
                title="View other products"
                productCount={4}
            />
        </div>
    );
}
