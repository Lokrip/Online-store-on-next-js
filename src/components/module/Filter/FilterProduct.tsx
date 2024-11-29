"use client"
import { Button } from "@/components/ui/Buttons/Button";
import Checkbox from "@/components/ui/CheckBox/CheckBox";
import { useAppDispatch, useAppSelector } from "@/store/hooks/redux";
import { CategorySlice } from "@/store/reducer/CategorySlice";
import Link from "next/link";
import { FC, PropsWithChildren, ReactNode, useEffect, useRef, useState } from "react";

interface FilterSectionListType {
    data: any[];
    mapFilter: (item: any) => ReactNode;
}


export const FilterSectionList: FC<FilterSectionListType> = ({data, mapFilter}) => {
    return (
        <div className="space-y-2">
            {data.map(item => (
                <div key={item.id}>
                    {mapFilter(item)}
                </div>
            ))}
        </div>
    )
}

export const FilterSectionItems: FC<{name: string; slug: string}> = ({name, slug}) => {
    const dispatch = useAppDispatch();
    const {setCategorySlug} = CategorySlice.actions
    const {categorySlug} = useAppSelector(state => state.categoryReducer)

    const handleCheckboxChange = () => {
        dispatch(setCategorySlug(slug))
    }

    return (
        <Link href={`/categories/${slug}/`} className="flex items-center" >
            <Checkbox 
                type="checkbox" 
                className="form-checkbox custom-checkbox"
                checked={categorySlug === slug}
                onChange={handleCheckboxChange}
            />
            <span className="ml-2">{name}</span>
        </Link>
    )
}

export const FilterSectionTitle: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="text-lg font-semibold mb-6">
            {children}
        </div>
    )
}

export const FilterSection: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="filter-section">
            {children}
        </div>
    )
}