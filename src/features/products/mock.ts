import { Product } from "./schemas/products";

export const LATEST_PRODUCTS: Product[] = [
    {
        id: "1",
        name: "Wireless Headphones",
        description:
            "Noise-canceling over-ear headphones with 30 hours of battery life.",
        imageUrl: "https://picsum.photos/500/500?random=1",
        category: "Electronics",
        price: 100,
    },
    {
        id: "2",
        name: "Smartwatch",
        description: "Fitness tracker with heart rate monitoring and GPS.",
        imageUrl: "https://picsum.photos/500/500?random=2",
        category: "Wearables",
        price: 100,
    },
    {
        id: "3",
        name: "Gaming Mouse",
        description: "Ergonomic RGB gaming mouse with adjustable DPI.",
        imageUrl: "https://picsum.photos/500/500?random=3",
        category: "Gaming",
        price: 100,
    },
    {
        id: "4",
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
        name: "Mechanical Keyboard",
        description: "Tactile mechanical keyboard with RGB backlighting.",
        imageUrl: "https://picsum.photos/500/500?random=5",
        category: "Accessories",
        price: 100,
    },
    {
        id: "6",
        name: "Backpack",
        description:
            "Water-resistant travel backpack with multiple compartments.",
        imageUrl: "https://picsum.photos/500/500?random=6",
        category: "Travel",
        price: 100,
    },
    {
        id: "7",
        name: "Smartphone",
        description:
            "Latest smartphone with an advanced camera system and long battery life.",
        imageUrl: "https://picsum.photos/500/500?random=7",
        category: "Mobile",
        price: 100,
    },
    {
        id: "8",
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
        name: "Coffee Maker",
        description: "Automatic drip coffee maker with a built-in grinder.",
        imageUrl: "https://picsum.photos/500/500?random=9",
        category: "Home Appliances",
        price: 100,
        salesPrice: 98.99,
    },
    {
        id: "10",
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
        name: "Action Camera",
        description: "4K waterproof action camera with image stabilization.",
        imageUrl: "https://picsum.photos/200/300?random=12",
        category: "Cameras",
        price: 100,
        salesPrice: 98.99,
    },
];
