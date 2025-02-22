import ConsumerNavbar from "@/components/ConsumerNavbar";
import Footer from "@/components/Footer";
import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function ConsumerLayout({ children }: Props) {
    return (
        <>
            <ConsumerNavbar />
            <main className="space-y-8">{children}</main>
            <Footer />
        </>
    );
}
