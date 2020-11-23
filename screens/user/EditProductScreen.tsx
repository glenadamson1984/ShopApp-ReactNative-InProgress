import React, {useState, useEffect, useCallback} from "react";
import { View, ScrollView, Text, StyleSheet, TextInput, Platform, NativeSyntheticEvent, TextInputChangeEventData, Alert, Button } from "react-native";
import { HeaderButtons, HeaderButton, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import * as productActions from "../../store/actions/products";

const EditProductScreen = (props: any) => {
    const prodId = props.navigation.getParam("productId");
    const editedProduct = useSelector((state: any) => state.products.userProducts.find((prod: any) => prod.id === prodId)); 
    
    const [title, setTitle] = useState(editedProduct ? editedProduct.title : "");
    const [titleIsValid, setTitleIsValid] = useState(false);
    const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : "");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState(editedProduct ? editedProduct.description : "");
    const dispatch = useDispatch();

    const submitHandler = useCallback(() => {
        if (!titleIsValid) {
            Alert.alert("wrong input", "please check the form", [{
                text: "Ok"
            }]);
            return;
        }

        if(editedProduct) {
            dispatch(productActions.updateProduct(prodId, title, description, imageUrl));
        } else {
            dispatch(productActions.createProduct(title, description, imageUrl, +price));
        }
    }, [dispatch, title, imageUrl, description, price, editedProduct, titleIsValid]);

    useEffect(() => {
        props.navigation.setParams({submit: submitHandler});
    }, [submitHandler])

    const titleChangeHandler = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {

        const text = e.nativeEvent.text;
        // adding validation
        if(text.trim().length === 0) {
            setTitleIsValid(false);
        } else {
            setTitleIsValid(true)
        }

        setTitle(text);
    }
    
    return (
        <ScrollView>
            <View style={styles.form}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput style={styles.input} 
                        value={title} 
                        onChange={titleChangeHandler}
                        autoCapitalize="sentences"
                        autoCorrect
                        returnKeyType="next"
                    />
                    {!titleIsValid && <Text>Please enter a valid title</Text>}
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>ImageUrl</Text>
                    <TextInput style={styles.input} 
                        value={imageUrl} 
                        onChange={(text: any) => setImageUrl(text)}
                    />
                </View>
                {!editedProduct && <View style={styles.formControl}>
                    <Text style={styles.label}>Price</Text>
                    <TextInput style={styles.input}
                        value={price} 
                        onChange={(text: any) => setPrice(text)}
                        keyboardType="decimal-pad"
                        onEndEditing={() => {console.log("ended edit");}}
                        onSubmitEditing={() => {console.log("you clicked return");}}
                    />
                </View> }
                <View style={styles.formControl}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput style={styles.input}
                        value={description} 
                        onChange={(text: any) => setDescription(text)}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

EditProductScreen.navigationOptions = (navData: any) => {
    const submitFun = navData.navigation.getParam("submit");

    return {
        headerTitle: navData.navigation.getParam("productId") ? 'Edit Product' : 'Add Product',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Save"
                iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
                onPress={submitFun}
            />
        </HeaderButtons>
        )
    }
}

export default EditProductScreen;

const styles = StyleSheet.create({
    form:{
        margin: 20
    },
    formControl: {
        width: "100%"
    },
    label: {
        fontFamily: "opne-sans-bold",
        marginVertical: 8
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: "#CCC",
        borderBottomWidth: 1
    }
});