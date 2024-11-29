import { FC, PropsWithChildren } from "react";
import { useAttachSubComponents } from "@/hooks/hooks";

export const MainHeader: FC<PropsWithChildren> = ({children, ...props}) => {
    return <div className="main-header" {...props}>{children}</div>
}

export const MainNavbar: FC<PropsWithChildren> = ({children, ...props}) => {
    return <div className="main-navbar" {...props}>{children}</div>
}

export const MainContent: FC<PropsWithChildren> = ({children, ...props}) => {
    return <div className="main-content" {...props}>{children}</div>
}

export const MainFooter: FC<PropsWithChildren> = ({children, ...props}) => {
    return <div className="main-footer" {...props}>{children}</div>
}


export const MainComponents: FC<PropsWithChildren> = ({children, ...props}) => {
    return (
        <div className="root-content" {...props}>
            {children}
        </div>
    )
}

export const Main = useAttachSubComponents(
    'Main',
    MainComponents,
    {
        Header: MainHeader,
        Navbar: MainNavbar,
        Content: MainContent,
        Footer: MainFooter,
    }
)