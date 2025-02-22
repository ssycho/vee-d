import { Product } from "./schemas/products";

export const LATEST_PRODUCTS: Product[] = [
    {
        id: "1",
        slug: "wireless-headphones",
        name: "Wireless Headphones",
        description:
            "Noise-canceling over-ear headphones with 30 hours of battery life.",
        imageUrl: "https://picsum.photos/500/500?random=1",
        category: "Electronics",
        price: 100,
    },
    {
        id: "2",
        slug: "smartwatch",
        name: "Smartwatch",
        description: "Fitness tracker with heart rate monitoring and GPS.",
        imageUrl: "https://picsum.photos/500/500?random=2",
        category: "Wearables",
        price: 100,
    },
    {
        id: "3",
        slug: "gaming-mouse",
        name: "Gaming Mouse",
        description: "Ergonomic RGB gaming mouse with adjustable DPI.",
        imageUrl: "https://picsum.photos/500/500?random=3",
        category: "Gaming",
        price: 100,
    },
    {
        id: "4",
        slug: "running-shoes",
        name: "Running Shoes",
        description:
            "Lightweight and comfortable running shoes for all terrains.",
        imageUrl: "https://picsum.photos/500/500?random=4",
        category: "Footwear",
        price: 100,
    },
];

export const WEEKLY_PRODUCTS: Product[] = [
    {
        id: "5",
        slug: "mechanical-keyboard",
        name: "Mechanical Keyboard",
        description: "Tactile mechanical keyboard with RGB backlighting.",
        imageUrl: "https://picsum.photos/500/500?random=5",
        category: "Accessories",
        price: 100,
    },
    {
        id: "6",
        slug: "backpack",
        name: "Backpack",
        description:
            "Water-resistant travel backpack with multiple compartments.",
        imageUrl: "https://picsum.photos/500/500?random=6",
        category: "Travel",
        price: 100,
    },
    {
        id: "7",
        slug: "smartphone",
        name: "Smartphone",
        description:
            "Latest smartphone with an advanced camera system and long battery life.",
        imageUrl: "https://picsum.photos/500/500?random=7",
        category: "Mobile",
        price: 100,
    },
    {
        id: "8",
        slug: "bluetooth-speaker",
        name: "Bluetooth Speaker",
        description:
            "Portable speaker with deep bass and 12-hour battery life.",
        imageUrl: "https://picsum.photos/500/500?random=8",
        category: "Audio",
        price: 100,
    },
];

export const ON_SALES_PRODUCTS: Product[] = [
    {
        id: "9",
        slug: "coffee-maker",
        name: "Coffee Maker",
        description: "Automatic drip coffee maker with a built-in grinder.",
        imageUrl: "https://picsum.photos/500/500?random=9",
        category: "Home Appliances",
        price: 100,
        salesPrice: 98.99,
    },
    {
        id: "10",
        slug: "desk-lamp",
        name: "Desk Lamp",
        description:
            "Adjustable LED desk lamp with multiple brightness settings.",
        imageUrl: "https://picsum.photos/500/500?random=10",
        category: "Home Office",
        price: 100,
        salesPrice: 98.99,
    },
    {
        id: "11",
        slug: "electric-scooter",
        name: "Electric Scooter",
        description:
            "Foldable electric scooter with 25 km range and 25 km/h max speed.",
        imageUrl: "https://picsum.photos/200/300?random=11",
        category: "Transportation",
        price: 100,
        salesPrice: 98.99,
    },
    {
        id: "12",
        slug: "action-camera",
        name: "Action Camera",
        description: "4K waterproof action camera with image stabilization.",
        imageUrl: "https://picsum.photos/200/300?random=12",
        category: "Cameras",
        price: 100,
        salesPrice: 98.99,
    },
];

export const ALL_PRODUCT = [
    ...LATEST_PRODUCTS,
    ...WEEKLY_PRODUCTS,
    ...ON_SALES_PRODUCTS,
];
