"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { Product } from "../schemas/products";
import { toast } from "sonner";
import { useCartStore } from "@/provides/cart-store-provider";
import { ShoppingCart } from "lucide-react";
import { saveToCart } from "@/actions/cookies";

type Props = {
    product: Product;
};

export default function AddToCart({ product }: Props) {
    const addProduct = useCartStore((store) => store.addProduct);

    return (
        <Button
            size="lg"
            onClick={async () => {
                addProduct(product);
                await saveToCart(product);
                toast.success("Product added to cart", {
                    description: `${product.name} has been added to your cart`,
                    icon: <ShoppingCart size={16} />,
                    richColors: true,
                });
            }}
        >
            Add to cart
        </Button>
    );
}
