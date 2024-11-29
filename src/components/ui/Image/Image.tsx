import { CLName } from "@/types/react/type.type";

export interface ImageProps extends CLName {
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
}

const ImageR: React.FC<ImageProps> = ({ src, alt, className, width, height }) => {
    return (
        <img 
            src={src} 
            alt={alt} 
            className={className} 
            width={width} 
            height={height}
        />
    );
}

export default ImageR