import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

function CartPageLayout({ children }: Props) {
    return (
        <div className="container mx-auto lg:px-0 px-6 space-y-8 min-h-screen">
            {children}
        </div>
    );
}

export default CartPageLayout;
