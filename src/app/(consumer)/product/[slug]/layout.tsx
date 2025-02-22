import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function ProductLayoutPage({ children }: Props) {
    return (
        <div className="container mx-auto lg:px-0 px-6 space-y-8">
            {children}
        </div>
    );
}
