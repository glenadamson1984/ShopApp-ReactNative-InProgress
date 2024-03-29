import PRODUCTS from "../../data/dummy-data"
import Product from "../../model/product";
import { CREATE_PRODUCT, DELETE_PRODUCT, updateProduct, UPDATE_PRODUCT } from "../actions/products";

export interface IProductsState {
    availableProducts: Product[],
    userProducts: Product[]
}

const initialState: IProductsState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === "u1"),
}

export default (state = initialState, action: any) => {
    switch(action.type) {
        case DELETE_PRODUCT:
            return {
                ...state,
                userProducts: state.userProducts.filter(product => product.id !== action.pid),
                availableProducts: state.availableProducts.filter(product => product.id !== action.pid)
            }
            case CREATE_PRODUCT:
                const newProduct = new Product(new Date().toString(), "u1", 
                action.productData.title, action.productData.imageUrl, action.productData.description,
                action.productData.price);
                return {...state,
                    availableProducts: state.availableProducts.concat(newProduct),
                    userProducts: state.userProducts.concat(newProduct)
                }
            case UPDATE_PRODUCT:
                const productIndex = state.userProducts.findIndex(prod => {
                    prod.id === action.pid
                });
                const updatedProduct = new Product(action.pid, 
                    state.userProducts[productIndex].ownerId,
                    action.productData.title,
                    action.productData.imageUrl,
                    action.productData.description,
                    state.userProducts[productIndex].price);
                const updatedUserProducts = [...state.userProducts];
                updatedUserProducts[productIndex] = updatedProduct;
                const availIndex = state.availableProducts.findIndex(prod => {
                    prod.id === action.pid
                });
                const updatedAvailableProducts = [...state.availableProducts];
                updatedAvailableProducts[availIndex] = updatedProduct;
                return{
                    ...state,
                    availableProducts: updatedAvailableProducts,
                    userProducts: updatedUserProducts
                }
    }
    return state;
};