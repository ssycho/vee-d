import React from "react";
import { Product as TProduct } from "../schemas/products";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

function Product({
    slug,
    name,
    description,
    imageUrl,
    category,
    price,
    salesPrice,
}: TProduct) {
    return (
        <Link href={`/product/${slug}`}>
            <Card className="rounded-sm">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <p>{name}</p>
                        <Badge variant="outline">{category}</Badge>
                    </CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 overflow-hidden">
                    <Image
                        src={imageUrl}
                        width={500}
                        height={500}
                        alt={name}
                        className="h-80 w-full object-bottom object-cover hover:scale-105 duration-100 ease-out"
                    />
                </CardContent>
                <CardFooter className="flex items-center justify-end gap-4">
                    {!!salesPrice ? (
                        <>
                            <p className="text-xs line-through">
                                ${price.toFixed(2)}
                            </p>
                            <Badge variant="default">
                                ${salesPrice.toFixed(2)}
                            </Badge>
                        </>
                    ) : (
                        <Badge variant="default">${price.toFixed(2)}</Badge>
                    )}
                </CardFooter>
            </Card>
        </Link>
    );
}

export default Product;
