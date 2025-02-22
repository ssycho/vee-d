import { ALL_PRODUCT } from "@/features/products/mock";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
    const { slug } = await params;
    const product = ALL_PRODUCT.find((p) => p.slug === slug);
    if (!product) notFound();
    const { name, imageUrl, price } = product;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
            <div className="illustrations">
                <Image
                    src={imageUrl}
                    width={500}
                    height={500}
                    alt={name}
                    className="h-8/12 w-full object-center object-cover rounded-3xl aspect-[9/16]"
                />
            </div>
            <div className="">
                <div className="space-y-4">
                    <h1 className="text-3xl font-serif font-medium tracking-tight">
                        {name}
                    </h1>
                    <Reviews />
                    <p className="text-2xl font-medium">${price.toFixed(2)}</p>
                    <div className="">
                        <Button size="lg">Add to cart</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Reviews() {
    return (
        <div className="flex items-center">
            {new Array(5).fill(0).map((_, i) => (
                <Star strokeWidth={1} size={20} key={i} />
            ))}
            <span className="ml-2 text-center p-1 border rounded-full aspect-square size-7 flex items-center justify-center">
                0
            </span>
        </div>
    );
}
