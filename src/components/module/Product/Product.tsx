"use client"
import CardP, { CardDescription, CardImage, CardSelectPrice, CardTitle } from "../Card/Card"
import { useAppDispatch, useAppSelector } from "@/store/hooks/redux"
import { fetchProduct } from "@/store/reducer/actions/ActionCreators"
import { useCorrectUrlImage } from "@/hooks/hooks"
import { SidebarFilterBlock } from "@/components/layout/Sidebar/Sidebar"
import { FC, useEffect } from "react"
import { SkeletonCard } from "@/components/ui/Skeleton/Skeleton"
import axios from "axios"
import { IProduct } from "@/types/redux/IProduct.type"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { productsSlice } from "@/store/reducer/ProductsSlice"

interface PrdouctData {
    data_set: IProduct[]
    range_page: number
}

const getData = async (url: string) => {
    const response = await axios.get<PrdouctData>(url)
    return response.data
}

export const ProductComponents: FC<{ categorySlug?: string | null }> = ({ categorySlug }) => {
    const dispatch = useAppDispatch();
    const { pageNextPrev, pageIncrement, pageDecriment } = productsSlice.actions
    const { page } = useAppSelector(state => state.productReducer.pogination)


    const {data, isLoading, refetch} = useQuery({
        queryKey: ['posts', page], 
        queryFn: () => {
            const url = categorySlug 
                ? `http://127.0.0.1:8000/api/v1/product/categories/${categorySlug}/?page=${page}` 
                : `http://127.0.0.1:8000/api/v1/product/?page=${page}`;
            return getData(url);
        },
        placeholderData: keepPreviousData
    })
    
    const onPageIncrement = (pageNumber: number) => {
        dispatch(pageNextPrev(pageNumber))
    }

    useEffect(() => {
        refetch()
    }, [page])  

    return (
        <div className="flex flex-col md:flex-row">
            {/* Filters Sidebar */}
            <SidebarFilterBlock />
            {/* Products List */}
            <div className="w-full md:w-3/4 p-4">
                <div style={{ overflowX: 'hidden' }} id="list-container-shop" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {isLoading ? (
                        Array.from({ length: 15 }).map((_, index) => (
                            <SkeletonCard key={index} />
                        ))
                    ) : (
                        data?.data_set.map((product: any) => (
                            <CardP key={product.id}>
                                <CardImage
                                    src={useCorrectUrlImage(product.image)}
                                    alt="Product 3"
                                />

                                <CardTitle to={`/shop/${product.id}`} title={product.title} />
                                <CardDescription
                                    description={`${product.description}`}
                                    trim={25}
                                />

                                <CardSelectPrice
                                    price={`${product.price}`}
                                    discountedPrice={`${product.price_with_discount}`}
                                />
                            </CardP>
                        ))
                    )}
                </div>
                {/* Pagination */}
                <div className="flex justify-center mt-8">
                    <nav aria-label="Page navigation">
                        <ul className="inline-flex space-x-2">
                            {/* Implement actual pagination logic here */}

                            <li>
                                <button onClick={() => page > 1 && dispatch(pageDecriment(1))} className="w-10 h-10 flex items-center justify-center rounded-full">
                                    Prev
                                </button>
                            </li>
                            {Array.from({ length: data?.range_page || 0 }, (_, index) => (
                                 <li key={index + 1}>
                                    <button 
                                        onClick={() => onPageIncrement(index + 1)}
                                        className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full">
                                        {index + 1}
                                    </button>
                                 </li>
                            ))}
                            <li>
                                <button onClick={() => page < data!.range_page && dispatch(pageIncrement(1))} className="w-10 h-10 flex items-center justify-center rounded-full">
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}