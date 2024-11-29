import axios from "axios";
import { AppDispatch } from "../../store";
import { productsSlice } from "../ProductsSlice";
import { MethodsRequest } from "@/types/axios/type.data";
import { IProduct } from "@/types/redux/IProduct.type";
import { CategorySlice } from "../CategorySlice";

export const fetchProduct = (url: string, onSale?: boolean) => async (
    dispatch: AppDispatch
) => {
    try {
        const fetchUrl = onSale ? `${url}?onSale=true` : url
        dispatch(productsSlice.actions.productsFetching())
        const response = await axios.get<IProduct[]>(fetchUrl);
        dispatch(productsSlice.actions.productsFetchingSuccess(response.data))
    } catch(error: any) {
        dispatch(productsSlice.actions.productsFetchingError(error.message))
    }
}


export const fetchCategory = (url: string, method?: MethodsRequest,) => async (dispatch: AppDispatch) => {
    try {
        dispatch(CategorySlice.actions.categoryFetching())
        const response = await axios.get(url)
        dispatch(CategorySlice.actions.categoryFetchingSuccess(response.data))
    } catch (error) {
        dispatch(CategorySlice.actions.categoryFetchingError(error))
    }
}