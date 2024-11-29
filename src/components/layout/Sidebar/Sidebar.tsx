"use client"
import { 
    FilterSection, 
    FilterSectionItems, 
    FilterSectionList, 
    FilterSectionTitle 
} from "@/components/module/Filter/FilterProduct"
import { SkeletonCardCategory } from "@/components/ui/Skeleton/Skeleton"
import { useAppDispatch, useAppSelector } from "@/store/hooks/redux"
import { fetchCategory } from "@/store/reducer/actions/ActionCreators"
import { CategorySlice } from "@/store/reducer/CategorySlice"
import { useEffect } from "react"
import ContentLoader from "react-content-loader"


export function SidebarFilterBlock(){
    const dispatch = useAppDispatch()
    const {categoryData, isLoading} = useAppSelector(state  => state.categoryReducer)

    useEffect(() => {
        dispatch(fetchCategory('http://127.0.0.1:8000/api/v1/list/categories/'))
    }, [dispatch])

    return (
        <div className="w-full md:w-1/4 p-4 hidden md:block">
            {isLoading ? (
                <SkeletonCardCategory/>
            ) : (
                <FilterSection>
                    <FilterSectionTitle>
                        Category
                    </FilterSectionTitle>
                    <FilterSectionList 
                        data={categoryData}
                        mapFilter={(item) => (
                            <FilterSectionItems 
                                key={item.id}
                                name={item.name}
                                slug={item.slug}
                            />
                        )}
                    />
                </FilterSection>
            )}
        </div>
    )
}