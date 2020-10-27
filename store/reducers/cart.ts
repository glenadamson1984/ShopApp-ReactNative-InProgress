import { ADD_TO_CART, DELETE_FROM_CART } from "../actions/cart";
import { ADD_ORDER } from "../actions/orders";
import CartItem from "../../model/cartItem";

const initialState = {
    items: Object(),
    totalAmount: 0
}

export default (state = initialState, action: any) => {
    switch(action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice =  addedProduct.price;
            const prodTitle = addedProduct.title;

            if(state.items[addedProduct.id]) {
                // already have an item in the cart
                const updatedCartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice
                );

                return {
                    ...state,
                    items: { ...state.items, [addedProduct.id]: updatedCartItem},
                    totalAmount: state.totalAmount + prodPrice
                }
            } else {
                const newCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [addedProduct.id] : newCartItem
                    },
                    totalAmount: state.totalAmount + prodPrice
                }
            }
            case DELETE_FROM_CART:
                const selectedCartItem = state.items[action.pid];
                console.log(`selectedcartitem ${JSON.stringify(selectedCartItem)}`);
                const currentQty = selectedCartItem.quantity;
                let updatedCartItems;
                if (currentQty > 1) {
                  // need to reduce it, not erase it
                  const updatedCartItem = new CartItem(
                    selectedCartItem.quantity - 1,
                    selectedCartItem.price,
                    selectedCartItem.title,
                    selectedCartItem.sum - selectedCartItem.price
                  );
                  updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
                } else {
                  updatedCartItems = { ...state.items };
                  delete updatedCartItems[action.pid];
                }
                return {
                  ...state,
                  items: updatedCartItems,
                  totalAmount: state.totalAmount - selectedCartItem.price
                };
                case ADD_ORDER:
                    return initialState;
    }
    return state;
}