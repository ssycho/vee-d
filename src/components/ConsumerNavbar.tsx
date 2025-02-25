import Link from "next/link";
import React from "react";
import CartNavbarButton from "./CartNavbarButton";

export default function ConsumerNavbar() {
    return (
        <nav className="w-full bg-background text-foreground sticky top-0 shadow-lg drop-shadow-xl z-40 border-b">
            <ul className="container mx-auto lg:px-0 flex px-6 py-4 items-center">
                <li>
                    <Link
                        href="/"
                        className="text-3xl font-bold tracking-tighter font-serif"
                    >
                        Vee&apos;d
                    </Link>
                </li>
                <li className="ml-auto">
                    <CartNavbarButton />
                </li>
            </ul>
        </nav>
    );
}
