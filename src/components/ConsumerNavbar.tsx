import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function ConsumerNavbar() {
    return (
        <nav className="w-full bg-background sticky top-0 shadow-lg drop-shadow-xl z-40 border-b">
            <ul className="container mx-auto lg:px-0 flex px-6 py-4 items-center">
                <li>
                    <Link
                        href="/"
                        className="text-3xl font-bold tracking-widest font-serif"
                    >
                        Vee-d
                    </Link>
                </li>
                <li className="ml-auto">
                    <Button variant="outline" size="icon">
                        <ShoppingCart />
                    </Button>
                </li>
            </ul>
        </nav>
    );
}
