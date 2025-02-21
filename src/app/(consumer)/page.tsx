import Banner from "@/components/Banner";
import ProductList from "@/features/products/compontents/ProductList";
import {
    LATEST_PRODUCTS,
    WEEKLY_PRODUCTS,
    ON_SALES_PRODUCTS,
} from "@/features/products/mock";

export default function Home() {
    return (
        <>
            <Banner />
            <div className="container mx-auto lg:px-0 px-6 space-y-8">
                <ProductList title="Latest" products={LATEST_PRODUCTS} />
                <ProductList title="Weekly Picks" products={WEEKLY_PRODUCTS} />
                <ProductList title="On Sales" products={ON_SALES_PRODUCTS} />
            </div>
        </>
    );
}
