import { useAttachSubComponents } from "@/hooks/hooks"
import { PropsWithChildren, FC } from "react"

export const ShopMainHeader: FC<PropsWithChildren> = ({children}) => {return <section id="shop">{children}</section>}
export const ShopMainFooter: FC<PropsWithChildren> = ({children}) => {return <section id="shop-category-description" className="py-8">{children}</section>}


export const ShopMainComponents: FC<PropsWithChildren> = ({children}) => {
    return <>{children}</>
}

export const ShopMain = useAttachSubComponents(
    'ShopMain',
    ShopMainComponents,
    {
        Header: ShopMainHeader,
        Footer: ShopMainFooter,
    }
)