import { BreadcrumbsProduct, ProductInfo } from "@/components/module/Product/Detail/SingleProduct"
import ShopSingle from "@/components/module/Shop/Detail/ShopSingle"
import { ShopSingleMain } from "@/components/module/Shop/Detail/ShopSingleMain"
import { FC } from "react"

interface ProductPropsParams {
    id: string
}

interface ProductParams {
    params: ProductPropsParams
}

export default function ProductPage({params}: ProductParams){
    return (
        <ShopSingleMain>
            <ShopSingleMain.Breadcrumbs>
                <BreadcrumbsProduct/>
            </ShopSingleMain.Breadcrumbs>

            <ShopSingleMain.ProductInfo>
                <ProductInfo id={params.id} />
            </ShopSingleMain.ProductInfo>

            <ShopSingleMain.ProductChar>
                
            </ShopSingleMain.ProductChar>

            <ShopSingleMain.LatestProducts>
                
            </ShopSingleMain.LatestProducts>
        </ShopSingleMain>
    )
}