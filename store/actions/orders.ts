import cart from "../reducers/cart";

export const ADD_ORDER = "ADD_ORDER";

export const addOrder = (cartItems: any, totalAmount: any) => {
    return {
        type: ADD_ORDER,
        orderData: {
            items: cartItems,
            amount: totalAmount
        }
    }
}