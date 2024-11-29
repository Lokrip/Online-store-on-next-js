import { useAttachSubComponents } from "@/hooks/hooks"
import { PropsWithChildren, FC } from "react"

export const ShopSingleMainBreadcrumbs: FC<PropsWithChildren> = ({children}) => {return <section id="breadcrumbs" className="pt-6 bg-gray-50">{children}</section>}
export const ShopSingleMainProductInfo: FC<PropsWithChildren> = ({children}) => {return <section id="product-info">{children}</section>}
export const ShopSingleMainProductChar: FC<PropsWithChildren> = ({children}) => {return <section>{children}</section>}
export const ShopSingleMainLatestProducts: FC<PropsWithChildren> = ({children}) => {return <section id="latest-products" className="py-10">{children}</section>}


export const ShopSingleMainComponents: FC<PropsWithChildren> = ({children}) => {
    return <>{children}</>
}

export const ShopSingleMain = useAttachSubComponents(
    'ShopSingleMain',
    ShopSingleMainComponents,
    {
        Breadcrumbs: ShopSingleMainBreadcrumbs,
        ProductInfo: ShopSingleMainProductInfo,
        ProductChar: ShopSingleMainProductChar,
        LatestProducts: ShopSingleMainLatestProducts
    }
)