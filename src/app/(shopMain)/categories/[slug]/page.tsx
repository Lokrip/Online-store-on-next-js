import { MobileFilterButton, TopFilterBlock } from "@/components/module/Filter/Filter"
import { ProductComponents } from "@/components/module/Product/Product"
import { ShopApp } from "@/components/module/Shop/Shop"
import type { Metadata } from "next"

interface ParamsType {
    params: {slug: string}
}

export const metadata: Metadata = {
    title: 'categories',
}

export default function CategoriesPage({params}: ParamsType) {

    return (
        <>
        <ShopApp>
            <TopFilterBlock />
            <MobileFilterButton />
            <ProductComponents categorySlug={params.slug}/>
        </ShopApp>
        </>
    )
}