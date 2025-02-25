"use client";
import React from "react";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/provides/cart-store-provider";
import { CookieProduct } from "@/stores/cart-store";
import Link from "next/link";

export default function CartNavbarButton() {
    const products = useCartStore((state) => state.products);

    return (
        <Button variant="outline" size="icon" className="relative" asChild>
            <Link href="/cart">
                <ShoppingCart />
                <CountBadge products={products} />
            </Link>
        </Button>
    );
}

function CountBadge({ products }: { products: CookieProduct[] }) {
    return products.length > 0 ? (
        <span className="absolute -top-1 -right-1 bg-primary text-background text-xs font-bold rounded-full px-1">
            {products.length}
        </span>
    ) : null;
}
