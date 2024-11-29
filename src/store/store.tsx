import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from '@/store/reducer/ProductsSlice'
import categoryReducer from '@/store/reducer/CategorySlice'

const rootReducer = combineReducers({
    productReducer,
    categoryReducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']