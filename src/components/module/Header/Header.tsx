import { HeaderContainerType } from "@/components/layout/Header/Header"
import { Container } from "@/components/tag/Container/Container"
import { PropsWithChildren } from "react"

export function HeaderMain<
P extends PropsWithChildren
>({children}: P) {
    return (
        <header className="bg-gray-dark sticky top-0 z-50" id="header">
            {children}
        </header>
    )
}

export function HeaderContainer<
P extends HeaderContainerType
>({children, className}: P) {
    return (
        <Container className={className}>
            {children}
        </Container>
    )
}