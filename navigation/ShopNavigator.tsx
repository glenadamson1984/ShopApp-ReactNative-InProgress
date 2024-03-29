import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from 'react-native';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrderScreen';
import Colors from '../constants/Colors';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import UserProductScreen from "../screens/user/UserProductScreen";
import EditProductScreen from "../screens/user/EditProductScreen";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
      fontFamily: "open-sans-bold"
  },
  headerBackTitleStyle: {
      fontFamily: "open-sans"
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig: any) => <Ionicons name={"ios-cart"} size={23} color={drawerConfig.tintColor} />
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const OrdersNavigator = createStackNavigator({
  Orders: OrdersScreen,
}, {
  navigationOptions: {
    drawerIcon: (drawerConfig: any) => <Ionicons name={"ios-list"} size={23} color={drawerConfig.tintColor} />
  },
  defaultNavigationOptions: defaultNavOptions
});

const AdminNavigator = createStackNavigator({
  UserProducts: UserProductScreen,
  EditProduct: EditProductScreen
}, {
  navigationOptions: {
    drawerIcon: (drawerConfig: any) => <Ionicons name={"ios-create"} size={23} color={drawerConfig.tintColor} />
  },
  defaultNavigationOptions: defaultNavOptions
});

const ShopNavigator = createDrawerNavigator({
  Products: ProductsNavigator,
  Orders: OrdersNavigator,
  Admin: AdminNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.primary
  }
});

export default createAppContainer(ShopNavigator);
