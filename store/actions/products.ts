import { DELETE_FROM_CART } from "./cart";

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_PRODUCT = "DELETE_PRODUCT";

export const deleteProduct = (productId: any) => {
    return { type: DELETE_PRODUCT, pid: productId}
}

export const createProduct = (title: any, description: any, imageUrl: any, price: any) => {
    return { type: CREATE_PRODUCT, 
        productData: {
            title, description, imageUrl, price
        }}
}

export const updateProduct = (id: any, title: any, description: any, imageUrl: any) => {
    return { type: UPDATE_PRODUCT,
        pid: id,  
        productData: {
            title, description, imageUrl
        }}
}