import {ADD_ORDER} from "../actions/orders";
import Order from "../../model/order"

export interface IOrderState {
    orders: Order[],
}

const initialState: IOrderState = {
    // @ts-ignore
    orders: []
};

export default (state = initialState, action: any) => {

    switch (action.type) {
        case ADD_ORDER:
            const newOrder = new Order(new Date().toString(), action.orderData.items, action.orderData.amount, new Date());
            
            return {
                ...state,
                orders: newOrder ? state.orders.concat(newOrder) : state.orders
            }
    }

    return state;
}