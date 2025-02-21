import Link from "next/link";
import React from "react";

export default function ConsumerNavbar() {
    return (
        <nav className="w-full">
            <ul className="container mx-auto px-4 lg:px-0">
                <li>
                    <Link href="/">Vee-d</Link>
                </li>
            </ul>
        </nav>
    );
}
