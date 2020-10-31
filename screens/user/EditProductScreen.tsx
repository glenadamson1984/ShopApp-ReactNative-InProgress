import React, {useState, useEffect, useCallback} from "react";
import { View, ScrollView, Text, StyleSheet, TextInput, Platform } from "react-native";
import { HeaderButtons, HeaderButton, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

const EditProductScreen = (props: any) => {
    const prodId = props.navigation.getParam("productId");
    const editedProduct = useSelector((state: any) => state.products.userProducts.find((prod: any) => prod.id === prodId)); 
    
    const [title, setTitle] = useState(editedProduct ? editedProduct.title : "");
    const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : "");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState(editedProduct ? editedProduct.description : "");

    const submitHandler = useCallback(() => {
        console.log("submitting");
    }, []);

    useEffect(() => {
        props.navigation.setParams({submit: submitHandler});
    }, [submitHandler])
    
    return (
        <ScrollView>
            <View style={styles.form}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput style={styles.input} 
                        value={title} 
                        onChange={(text: any) => setTitle(text)}
                    />
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