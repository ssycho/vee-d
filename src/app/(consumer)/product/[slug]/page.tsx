import { ALL_PRODUCT } from "@/features/products/mock";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
    const { slug } = await params;
    const product = ALL_PRODUCT.find((p) => p.slug === slug);
    if (!product) notFound();
    const { name, imageUrl, price, salesPrice, description } = product;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
            <div className="illustrations">
                <Image
                    src={imageUrl}
                    width={500}
                    height={500}
                    alt={name}
                    className="h-[40vh] lg:h-[70vh] w-full object-center object-cover rounded-3xl aspect-square lg:aspect-[9/16]"
                />
            </div>
            <div className="">
                <div className="space-y-8">
                    <h1 className="text-3xl font-serif font-medium tracking-tight">
                        {name}
                    </h1>
                    <article className="prose py-10 my-6 border-y border-foreground/15">
                        <p>{description}</p>
                    </article>
                    <div className="prices text-3xl font-medium flex gap-4 items-center">
                        {salesPrice && <p>${salesPrice}</p>}
                        <p
                            className={
                                !!salesPrice
                                    ? "text-xl font-normal line-through decoration-2 decoration-foreground/80 text-foreground/80"
                                    : ""
                            }
                        >
                            ${price.toFixed(2)}
                        </p>
                    </div>
                    <div className="">
                        <Button size="lg">Add to cart</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
