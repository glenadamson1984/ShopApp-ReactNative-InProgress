import React from "react";
import { View, FlatList, Text, ImagePropTypes } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const ProductOverviewScreen = (props: any) => {
    const products = useSelector((state: any) => state.products.availableProducts)
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
                    onAddToCart={() => { }} />} />
    )
}

ProductOverviewScreen.navigationOptions = (navData: any) => {
    return {
        headerTitle: "All Products"
    }
}

export default ProductOverviewScreen;