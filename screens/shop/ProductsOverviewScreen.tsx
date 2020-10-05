import React from "react";
import { View, FlatList, Text, ImagePropTypes } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart"

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
        headerTitle: "All Products"
    }
}

export default ProductOverviewScreen;