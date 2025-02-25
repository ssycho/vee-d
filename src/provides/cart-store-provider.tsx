"use client";

import { getCart } from "@/actions/cookies";
import { CartStore, createCartStore } from "@/stores/cart-store";
import { createContext, ReactNode, useContext, useEffect, useRef } from "react";
import { useStore } from "zustand";

export type CartStoreApi = ReturnType<typeof createCartStore>;

export const CartStoreContext = createContext<CartStoreApi | null>(null);

export interface CartStoreProviderProps {
    children: ReactNode;
}

export const CartStoreProvider = ({ children }: CartStoreProviderProps) => {
    const storeRef = useRef<CartStoreApi | null>(null);

    if (!storeRef.current) {
        storeRef.current = createCartStore({ products: [] });
    }

    useEffect(() => {
        const fetchCart = async () => {
            const savedCart = await getCart();
            storeRef.current?.setState({ products: savedCart });
        };

        fetchCart();
    }, []);

    return (
        <CartStoreContext.Provider value={storeRef.current}>
            {children}
        </CartStoreContext.Provider>
    );
};

export const useCartStore = <T,>(selector: (store: CartStore) => T): T => {
    const cartStoreContext = useContext(CartStoreContext);

    if (!cartStoreContext)
        throw new Error("useCartStore must be used within a CartStoreProvider");

    return useStore(cartStoreContext, selector);
};
