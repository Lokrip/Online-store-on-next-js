import { IProduct } from "@/types/redux/IProduct.type";

interface ProductState {
    product: IProduct;
    isProductLoading: boolean;
    error: string;
}

