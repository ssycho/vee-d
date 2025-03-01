import { Product } from "@/features/products/schemas/products";
import { createStore } from "zustand/vanilla";

export type CookieProduct = Pick<Product, "id">;

export type CartState = {
    products: Pick<Product, "id">[];
};

export type CartActions = {
    addProduct: (product: Product) => void;
    removeProduct: (product: Product) => void;
};

export type CartStore = CartState & CartActions;

export const defaultInitState: CartState = {
    products: [],
};

export const createCartStore = (initState: CartState = defaultInitState) => {
    return createStore<CartStore>((set) => ({
        ...initState,
        addProduct: (product) =>
            set((state) => ({ products: [...state.products, product] })),
        removeProduct: (product) =>
            set((state) => {
                const productIndex = state.products.findIndex(
                    (p) => p.id === product.id
                );
                const copy = [...state.products];
                copy.splice(productIndex, 1);
                return {
                    products: copy,
                };
            }),
    }));
};
