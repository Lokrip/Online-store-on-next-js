import { useAttachSubComponents } from "@/hooks/hooks"
import { PropsWithChildren, FC } from "react"

export const NavbarHeader: FC<PropsWithChildren> = ({children}) => {return <>{children}</>}
export const NavbarHamburgerMenu: FC<PropsWithChildren> = ({children}) => {return <>{children}</>}
export const NavbarContent: FC<PropsWithChildren> = ({children}) => {return <>{children}</>}
export const NavbarFooter: FC<PropsWithChildren> = ({children}) => {return <>{children}</>}


export const NavbarComponents: FC<PropsWithChildren> = ({children}) => {
    return <>{children}</>
}

export const Navbar = useAttachSubComponents(
    'Navbar',
    NavbarComponents,
    {
        Header: NavbarHeader,
        HamburgerMenu: NavbarHamburgerMenu,
        Content: NavbarContent,
        Footer: NavbarFooter,
    }
)