import { createSlice } from "@reduxjs/toolkit";

interface CategoryState {
    categoryData: any;
    isLoading: boolean;
    error: string;
    categorySlug: string | null
}

const initialState: CategoryState = {
    categoryData: [],
    isLoading: true,
    error: '',
    categorySlug: null
}

export const CategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        categoryFetching(state){
            state.isLoading = true;
        },

        categoryFetchingSuccess(state, action){
            state.isLoading = false;
            state.categoryData = action.payload;
            state.error = '';
        },

        categoryFetchingError(state, action){
            state.isLoading = false;
            state.error = action.payload;
        },

        setCategorySlug(state, action){
            state.categorySlug = action.payload
        }
    }
})


export default CategorySlice.reducer;