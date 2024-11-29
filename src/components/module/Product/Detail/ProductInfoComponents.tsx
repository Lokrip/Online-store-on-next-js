"use client"
import { Container } from "@/components/tag/Container/Container";
import { AmazonLoader } from "@/components/ui/Skeleton/Skeleton";
import { useCorrectUrlImage } from "@/hooks/hooks";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";

import ContentLoader from 'react-content-loader'



const getData = async (id: string) => {
    const response = await axios.get(`http://127.0.0.1:8000/api/v1/product/${id}/`)
    return response;
}

const ProductDataComponenst: FC<{data: any}> = ({data}) => {

    const [image, setImage] = useState(useCorrectUrlImage(data.image))

    const onClickToImagesList = (e: React.MouseEvent<HTMLImageElement>) => {
        const action = e.target as HTMLImageElement
        setImage(action.src)
    }

    return (
        <div className="py-6">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                    <div className="grid gap-4">
                        {/* Big Image */}
                        <div id="main-image-container">
                            <Image 
                                id="main-image"
                                className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                                src={image}
                                alt="Main Product Image"
                                width={500}
                                height={500}
                            />
                        </div>
                        {/* Small Images */}
                        <div className="grid grid-cols-5 gap-4">
                            <div key={data.image.id}>
                                <Image
                                    onClick={onClickToImagesList}
                                    src={useCorrectUrlImage(data.image)}
                                    className="object-cover object-center max-h-30 max-w-full rounded-lg cursor-pointer"
                                    alt={`Gallery Image ${data.image.id}`}
                                    width={500}
                                    height={500}
                                />
                            </div>
                            {data.product_images.map((img: any) => (
                                <div key={img.id}>
                                    <Image
                                        onClick={onClickToImagesList}
                                        src={useCorrectUrlImage(img.image)}
                                        className="object-cover object-center max-h-30 max-w-full rounded-lg cursor-pointer"
                                        alt={`Gallery Image ${img.id}`}
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Product Details Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                    <div className="pb-8 border-b border-gray-line">
                        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
                        <div className="flex items-center mb-8">
                            <span>★★★★★</span>
                            <span className="ml-2">(0 Reviews)</span>
                            <a href="#" className="ml-4 text-primary font-semibold">Write a review</a>
                        </div>
                        <div className="mb-4 pb-4 border-b border-gray-line">
                            <p className="mb-2">
                                Brand:<strong><a href="#" className="hover:text-primary"> {data.brand}</a></strong>
                            </p>
                            <p className="mb-2">Product code:<strong> 00123</strong></p>
                            <p className="mb-2">Availability:<strong> In Stock</strong></p>
                        </div>
                        <div className="text-2xl font-semibold mb-8">$40.00</div>
                        <div className="flex items-center mb-8">
                            <button
                                id="decrease"
                                className="bg-primary hover:bg-transparent border border-transparent hover:border-primary text-white hover:text-primary font-semibold w-10 h-10 rounded-full flex items-center justify-center focus:outline-none"
                                disabled
                            >
                                -
                            </button>
                            <input
                                id="quantity"
                                type="number"
                                value="1"
                                className="w-16 py-2 text-center focus:outline-none"
                                readOnly
                            />
                            <button
                                id="increase"
                                className="bg-primary hover:bg-transparent border border-transparent hover:border-primary text-white hover:text-primary font-semibold w-10 h-10 rounded-full focus:outline-none"
                            >
                                +
                            </button>
                        </div>
                        <button
                            className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full"
                        >
                            Add to Cart
                        </button>
                    </div>
                    {/* Social sharing */}
                    <div className="flex space-x-4 my-6">
                        {['facebook', 'instagram', 'pinterest', 'twitter', 'viber'].map((icon) => (
                            <a key={icon} href="#" className="w-4 h-4 flex items-center justify-center">
                                <img
                                    src={`assets/images/social_icons/${icon}.svg`}
                                    alt={icon.charAt(0).toUpperCase() + icon.slice(1)}
                                    className="w-4 h-4 transition-transform transform hover:scale-110"
                                />
                            </a>
                        ))}
                    </div>
                    {/* Additional Information */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Product Description</h3>
                        <p>This is a premium quality t-shirt perfect for casual wear. Made with high-quality fabric to ensure comfort and durability.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProductInfoComponents: FC<{id: string}> = ({id}) => {
    const {data, isLoading, isSuccess, isError, error} = useQuery({
        queryKey: ['product', id],
        queryFn: () => getData(id),
        select: response => response.data
    });

    useEffect(() => {
        if(isError) {
            console.log(error)
        }
    }, [isError])

    useEffect(() => {
        console.log(data)
    }, [isSuccess])

    if (isLoading) {
        return (
            <Container className="mx-auto">
                <AmazonLoader />
            </Container>
        )
    } else {
        return (
            <Container className="mx-auto">
                {data ? (
                    <ProductDataComponenst data={data} />
                ) : (
                    <h1>Продукт не найден</h1>
                )}

            </Container>
        )
    }


}

export default ProductInfoComponents;