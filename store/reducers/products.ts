import PRODUCTS from "../../data/dummy-data"
import Product from "../../model/product";

export interface IProductsState {
    availableProducts: Product[],
    userProducts: Product[]
}

const initialState: IProductsState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === "u1"),
}

export default (state = initialState, action: any) => {
    return state;
};