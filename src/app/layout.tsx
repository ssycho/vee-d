import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "Vee'd",
    description: "[Vidy] is an E-commerce app, where you doing your shoping, silly.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`antialiased`}
            >
                {children}
                <Toaster />
            </body>
        </html>
    );
}
