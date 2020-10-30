import React from "react";
import { Button, FlatList, Platform } from "react-native";
import ProductItem from "../../components/shop/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { HeaderButton, HeaderButtons, Item } from "react-navigation-header-buttons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import * as ProductActions from "../../store/actions/products"

const UserProductScreen = () => {
    const userProducts = useSelector((state: any) => state.products.userProducts);
    const dispatch = useDispatch();

    return (
        <FlatList data={userProducts} keyExtractor={item => item.id}
            renderItem={itemData => <ProductItem image={itemData.item.imageUrl}
                title={itemData.item.title} price={itemData.item.price}
                onSelect={() => { }}>
                <Button color={Colors.primary} title="Edit" onPress={() => {}} />
                <Button color={Colors.primary} title="Delete" onPress={() => {
                    dispatch(ProductActions.deleteProduct(itemData.item.id));
                }} />
            </ProductItem>} />
    );
}

UserProductScreen.navigationOptions = (navData: any) => {
    return {
        headerTitle: 'User Products',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    }
}

export default UserProductScreen;