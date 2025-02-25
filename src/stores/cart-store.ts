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
            set((state) => ({
                products: state.products.filter((p) => p.id !== product.id),
            })),
    }));
};
