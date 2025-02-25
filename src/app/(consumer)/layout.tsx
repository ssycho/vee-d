import ConsumerNavbar from "@/components/ConsumerNavbar";
import Footer from "@/components/Footer";
import { CartStoreProvider } from "@/provides/cart-store-provider";
import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default async function ConsumerLayout({ children }: Props) {
    return (
        <CartStoreProvider>
            <ConsumerNavbar />
            <main className="space-y-8">{children}</main>
            <Footer />
        </CartStoreProvider>
    );
}
