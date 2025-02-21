import ConsumerNavbar from "@/components/ConsumerNavbar";
import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function ConsumerLayout({ children }: Props) {
    return (
        <>
            <ConsumerNavbar />
            <main className="container mx-auto">{children}</main>
        </>
    );
}
