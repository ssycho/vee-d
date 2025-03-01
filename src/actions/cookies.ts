"use server";

import { CookieProduct } from "@/stores/cart-store";
import { cookies } from "next/headers";

export async function saveToCart(product: CookieProduct) {
    const cookieStore = await cookies();

    const saved = cookieStore.get("cart");

    const cart = saved ? JSON.parse(saved.value) : [];

    cookieStore.set({
        name: "cart",
        value: JSON.stringify([...cart, { id: product.id }]),
        httpOnly: true,
        secure: true,
    });
}

export async function getCart(): Promise<CookieProduct[]> {
    const cookieStore = await cookies();

    const saved = cookieStore.get("cart");

    return saved ? JSON.parse(saved.value) : [];
}

export async function removeFromCart(product: CookieProduct) {
    const cookieStore = await cookies();

    const saved = cookieStore.get("cart");

    const cart: CookieProduct[] = saved ? JSON.parse(saved.value) : [];

    const productIndex = cart.findIndex((p) => p.id === product.id);
    const copy = [...cart];
    copy.splice(productIndex, 1);

    cookieStore.set({
        name: "cart",
        value: JSON.stringify(copy),
        httpOnly: true,
        secure: true,
    });
}
