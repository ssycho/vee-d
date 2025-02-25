import Link from "next/link";
import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="container mx-auto lg:px-0 px-6 py-4 border-t border-foreground/20 text-foreground/70">
            <p>© Vee&apos;d {year}. All rights reserved.</p>
            <p>
                Handcrafted with 💖&☕ in Madagascar by{" "}
                <Link
                    href="https://github.com/ssycho"
                    target="_blank"
                    className="underline font-medium underline-offset-2 text-primary/70"
                >
                    Ssycho
                </Link>
                .
            </p>
        </footer>
    );
}

export default Footer;
