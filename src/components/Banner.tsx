"use client";
import { useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

// mock
const BANNER_ITEMS = [
    { imageUrl: "https://picsum.photos/1920/1080?random=1" },
    { imageUrl: "https://picsum.photos/1920/1080?random=2" },
    { imageUrl: "https://picsum.photos/1920/1080?random=3" },
    { imageUrl: "https://picsum.photos/1920/1080?random=4" },
    { imageUrl: "https://picsum.photos/1920/1080?random=5" },
    { imageUrl: "https://picsum.photos/1920/1080?random=6" },
];

function Banner() {
    const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

    return (
        <div className="">
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                opts={{
                    loop: true,
                    align: "center",
                }}
            >
                <CarouselContent className="">
                    {BANNER_ITEMS.map((item, index) => (
                        <Item key={index} imageUrl={item.imageUrl}/>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious /> */}
                {/* <CarouselNext /> */}
            </Carousel>
        </div>
    );
}

export default Banner;

function Item({imageUrl}:{imageUrl:string}){
    return (<CarouselItem >
        <Card className="border-none rounded-none shadow-none">
            <CardContent className="flex w-full h-[60vh] aspect-video items-center justify-center px-0">
                <Image
                    src={imageUrl}
                    width={2000}
                    height={2000}
                    alt="product or ads"
                    className="object-cover w-full h-full"
                />
            </CardContent>
        </Card>
    </CarouselItem>)
}