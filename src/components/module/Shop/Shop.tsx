import { Container } from "@/components/tag/Container/Container"
import { CardHeader, Description, Title } from "../Card/CardTitle"
import { FC, PropsWithChildren } from "react"


export const ShopApp: FC<PropsWithChildren> = ({children}) => (
    <Container className="mx-auto">
        {children}
    </Container>
)

export const ShopCategoryDescriptionApp: FC<PropsWithChildren> = () => (
    <Container className="container">
        <CardHeader>
            <Title title="Category Title" headerType="h2"/>
            <Description title="This is the category description. Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
        </CardHeader>
    </Container>
)