import React from "react";
import {View, Text, FlatList, StyleSheet, Button} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import Colors from "../../constants/Colors";
import CartItem from "../../components/shop/CartItem";
import * as cartActions from "../../store/actions/cart";
import cart from "../../store/reducers/cart";
import * as ordersActions from "../../store/actions/orders";

const CartScreen = () => {
    const cartTotalAmount = useSelector((state: any) => state.cart.totalAmount);
    console.log(`cartTotalAmount ${cartTotalAmount}`)
    const cartItems = useSelector((state: any) => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].title,
                productPrice: state.cart.items[key].price,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum
            })
        }

        return transformedCartItems.sort((a, b) => a.productId > b.productId ? 1 : -1);
        });

        console.log(JSON.stringify( cartItems));

        const dispatch = useDispatch();

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total: <Text style={styles.amount}>£{Math.round(cartTotalAmount.toFixed(2) * 100) / 100}</Text></Text>
                <Button color={Colors.accent} disabled={cartItems.length === 0} 
                    title="OrderNow" onPress={() => {
                        dispatch(ordersActions.addOrder(cartItems, cartTotalAmount))
                    }}/>
            </View>
            <FlatList data={cartItems} keyExtractor={item => item.productId} 
                renderItem={itemData =>
                    <CartItem quantity={itemData.item.quantity}
                 title={itemData.item.productTitle} amount={itemData.item.sum}
                 deletable={true}
                 onRemove={() => {
                    dispatch(cartActions.deleteFromCart(itemData.item.productId));
                 }} />} />
        </View>
    );
}

CartScreen.navigationOptions = {
    headerTitle: "Your Cart"
};

const styles = StyleSheet.create({
    screen: {
        margin: 20,
    },
    summary: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        padding: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "white",
    },
    summaryText: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
    },
    amount: {
        color: Colors.primary
    }
});

export default CartScreen;