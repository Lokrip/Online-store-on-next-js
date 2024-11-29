import ImageR, {ImageProps} from "@/components/ui/Image/Image";
import { CLName } from "@/types/react/type.type";
import { truncateDescription } from "@/utils/utils.react";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

interface CardSizeProps extends PropsWithChildren, CLName {
    height?: number | string;
    width?: number | string;
}

interface CardPrciesProps {
    price: string,
    discountedPrice: string
}

const CardPrice: FC<
PropsWithChildren
> = ({children}) => <span className="text-lg font-bold text-primary">${children}</span>


const CardDiscountedPrice: FC<
PropsWithChildren
> = ({children}) => <span className="text-sm line-through ml-2">${children}</span>
    


const CardPricesContainer: FC<CardPrciesProps> = ({price, discountedPrice}) => {
    return (
        <div className="flex items-center mb-4">
            <CardPrice>
                {price}
            </CardPrice>

            <CardDiscountedPrice>
                {discountedPrice}
            </CardDiscountedPrice>
        </div>
    )
}

export const CardSelectPrice: FC<CardPrciesProps> = ({price, discountedPrice}) => (
    <CardPricesContainer 
        price={price}
        discountedPrice={discountedPrice}
    />
)

const CardSize: FC<CardSizeProps> = ({
    children, 
    className,
    height = 'auto',
    width = 'auto'
}) => {
    return (
        <div style={{
            width: width,
            height: height
        }} className={className}>
            {children}
        </div>
    )
}

export const CardImage: FC<ImageProps> = ({src, alt}) => (
    <ImageR src={src} alt={alt} className="w-full object-cover mb-4 rounded-lg" />
)

export const CardTitle: FC<{title: string; to: string}> = ({title, to}) => (
    <Link href={to} className="text-lg font-semibold mb-2">{title}</Link>
)


export const CardDescription: FC<{description: string, trim: number}> = ({description, trim}) => (
    <p className="my-2">{truncateDescription(description, trim)}</p>
)


export default function CardP<
    P extends CardSizeProps
>({children, width='auto', height='auto'}: P){
    return (
        <CardSize 
            width={width} 
            height={height} 
            className='bg-white p-4 rounded-lg shadow'
        >
            {children}
        </CardSize>
    )
}


