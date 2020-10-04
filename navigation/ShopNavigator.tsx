import { createStackNavigator } from '@react-navigation/stack';
import ProductOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';
import {Platform } from "react-native";

const ProductsNavigator = createStackNavigator();

const ShopNavigator = () => {
    return (
        <ProductsNavigator.Navigator screenOption={{
            headerStyle: {
                backgroundColor: Platform.OS === "android" ? Colors.primary : ""
            },
            headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
        }}>
          <ProductsNavigator.Screen name="ProductOverview" component={ProductOverviewScreen} options={{
          title: 'All Products',
        }}/>
        </ProductsNavigator.Navigator>
    );
}

export default ShopNavigator;