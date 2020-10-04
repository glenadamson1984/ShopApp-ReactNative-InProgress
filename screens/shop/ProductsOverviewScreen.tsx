import React from "react";
import { View, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import { IProduct } from "../../model/product";

const ProductOverviewScreen = () => {
    const products = useSelector((state: any)  => state.products.availableProducts)
    return (
        <FlatList data={products} keyExtractor={item => item.id} renderItem={(itemData: any) => <Text>{itemData.title}</Text>} />
    )
}

export default ProductOverviewScreen;