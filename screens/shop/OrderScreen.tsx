import React from "react";
import {FlatList, Platform, Text} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import {useSelector} from "react-redux";
import HeaderButton from "../../components/UI/HeaderButton";
import OrderItem from "../../components/shop/OrderItem";


const OrdersScreen = () => {
    const orders = useSelector((state: any) => state.orders.orders);
    return (
        <FlatList data={orders} keyExtractor={item => item.id} 
    renderItem={(itemData: any) => <OrderItem amount={itemData.item.totalAmount} date={itemData.item.readableDate} items={itemData.item.items} />} />
    )
}

OrdersScreen.navigationOptions = (navData: any) => {
    return {
        headerTitle: "Your Orders",
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName={'ios-list'}
              onPress={() => {
                  navData.navigation.toggleDrawer();
              }}
            />
          </HeaderButtons> 
          )
    }
};

export default OrdersScreen