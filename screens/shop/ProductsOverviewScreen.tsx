import React from "react";
import { View, FlatList, Text, ImagePropTypes, Platform, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";

const ProductOverviewScreen = (props: any) => {
    const products = useSelector((state: any) => state.products.availableProducts)
    const dispatch = useDispatch();

    return (
        <FlatList data={products} keyExtractor={item => item.id}
            renderItem={(itemData: any) =>
                <ProductItem image={itemData.item.imageUrl} title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetail={() => {
                        props.navigation.navigate("ProductDetail", {
                            productId: itemData.item.id,
                            productTitle: itemData.item.title
                        })
                    }
                    }
                    onAddToCart={() => {
                        dispatch(cartActions.addToCart(itemData.item));
                     }} />} />
    )
}

ProductOverviewScreen.navigationOptions = (navData: any) => {
    return {
      headerTitle: 'All Products',
      headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
            onPress={() => {
                navData.navigation.navigate('Cart')
            }}
          />
        </HeaderButtons>
      )
    };
  };

export default ProductOverviewScreen;