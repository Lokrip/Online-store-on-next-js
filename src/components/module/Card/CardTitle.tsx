import { PropsWithChildren } from "react";

type TagH = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface Props {title: string}
interface TitleProps extends Props {headerType: TagH;}
interface DescriptionProps extends Props{
    fontSize?: number;
    fontWeight?: number;
}

export function CardHeader<
    P extends PropsWithChildren
>({children}: P) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            {children}
        </div>
    )
}

export function Title<
    P extends TitleProps
>({title, headerType}: P) {
    const Heading = headerType as keyof JSX.IntrinsicElements;
    return <Heading className="text-2xl font-bold mb-4">{title}</Heading>
}

export function Description<
    P extends DescriptionProps
>({
    title, 
    fontSize, 
    fontWeight
}: P){
    return (
        <p 
            className="mb-4"
            style={{
                fontSize: fontSize,
                fontWeight: fontWeight
            }}
        >{title}</p>
    )
}