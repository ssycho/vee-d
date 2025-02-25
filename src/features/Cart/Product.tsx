"use client";

import Image from "next/image";
import React from "react";
import { Product as TProduct } from "../products/schemas/products";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/provides/cart-store-provider";
import { removeFromCart } from "@/actions/cookies";
import { toast } from "sonner";

type Props = {
    product: TProduct;
};

function Product({ product }: Props) {
    const removeFromCartStore = useCartStore((store) => store.removeProduct);

    async function removeProduct(product: TProduct) {
        removeFromCartStore(product);
        await removeFromCart(product);
        toast.info("Product removed from cart", {
            description: `${product.name} has been removed from your cart`,
            richColors: true,
        });
    }

    return (
        <div className="flex items-center justify-between py-2">
            <div className="flex items-start gap-4">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                    width={64}
                    height={64}
                />
                <div>
                    <h2 className="text-lg font-medium">{product.name}</h2>
                    <p className="text-sm text-foreground/60">
                        $
                        {product.salesPrice
                            ? product.salesPrice.toFixed(2)
                            : product.price.toFixed(2)}
                    </p>
                </div>
            </div>
            <div>
                <Button
                    variant="outline"
                    onClick={async () => {
                        await removeProduct(product);
                    }}
                >
                    Remove
                </Button>
            </div>
        </div>
    );
}

export default Product;
