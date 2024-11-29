import { MobileFilterButton, TopFilterBlock } from "@/components/module/Filter/Filter";
import { ProductComponents } from "@/components/module/Product/Product";
import { ShopApp } from "@/components/module/Shop/Shop";


export default function ShopPage() {
    return (
        <>
        <ShopApp>
            <TopFilterBlock />
            <MobileFilterButton />
            <ProductComponents/>
        </ShopApp>
        </>
    )
}