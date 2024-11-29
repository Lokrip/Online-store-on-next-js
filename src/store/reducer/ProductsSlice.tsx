import { IProduct } from "@/types/redux/IProduct.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationType {page: number}

interface CreateFieldsType {
    title: string;
    description: string;
    price: number;
}

interface ProductsState {
    products: IProduct[];
    isLoading: boolean;
    error: string;
    createFields: CreateFieldsType;
    pogination: PaginationType;
}


const initialState: ProductsState = {
    products: [],
    isLoading: true,
    error: '',
    createFields: {
        title: '',
        description: '',
        price: 99,
    },

    pogination: {
        page: 1,
    }
}

export const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        productsFetching(state) {
            state.isLoading = true
            state.products = []
        },

        productsFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
            state.isLoading = false;
            state.products = action.payload;
        },
        
        productsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },

        productsCreate(state, action: PayloadAction<CreateFieldsType>) {
            state.createFields.title = action.payload.title
            state.createFields.price = action.payload.price
            state.createFields.description = action.payload.description
        },

        pageNextPrev(state, action: PayloadAction<number>) {state.pogination.page = action.payload;},
        pageIncrement(state,  action: PayloadAction<number>) {state.pogination.page += action.payload},
        pageDecriment(state,  action: PayloadAction<number>) {state.pogination.page -= action.payload}
    }
})


export default productsSlice.reducer;