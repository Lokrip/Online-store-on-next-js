"use client"
import { useEffect, useState } from "react"
import { Button, ButtonGroup } from "../../ui/Buttons/Button"
import { useAppDispatch } from "@/store/hooks/redux";
import { fetchProduct } from "@/store/reducer/actions/ActionCreators";


export function MobileFilterButton(){
    return (
        <div className="block md:hidden text-center mb-4">
            <Button variant="primary">
                Show Filters
            </Button>
        </div>
    )
}

export function TopFilterBlock(){
    const [onSale, setOnSale] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProduct('http://127.0.0.1:8000/api/v1/product/', onSale))
    }, [onSale, dispatch])

    const toggleSaleFilter = () => setOnSale(!onSale);

    return (
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
            <ButtonGroup>
                <Button onClick={toggleSaleFilter} variant="primary">
                    On sale
                </Button>

                <Button variant="primary">
                    Button 2
                </Button>

                <Button variant="primary">
                    Button 3
                </Button>
            </ButtonGroup>
            {/* Sort Dropdown */}
            <div className="flex mt-5 md:mt-0 space-x-4">
                <div className="relative">
                    <select className="block appearance-none w-full bg-white border hover:border-primary px-4 py-2 pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option>Sort Option 1</option>
                        <option>Sort Option 2</option>
                        <option>Sort Option 3</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center px-2">
                        <img id="arrow-down" className="h-4 w-4" src="/assets/images/filter-down-arrow.svg" alt="filter arrow" />
                        <img id="arrow-up" className="h-4 w-4 hidden" src="/assets/images/filter-up-arrow.svg" alt="filter arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}