import React from "react";
import { View, StyleSheet, Image, Text, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from "react-native"
import Colors from "../../constants/Colors";

const ProductItem = (props: any) => {
    let TouchableComp: any = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableComp = TouchableNativeFeedback;
    }

    return (

        <View style={styles.product}>
            <View style={styles.touchable}>
                <TouchableComp onPress={props.onSelect} useForeground>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: props.image }} />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.price}>£{props.price.toFixed(2)}</Text>
                    </View>
                    <View style={styles.actions}>
                    {props.children}
                    </View>
                </TouchableComp>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    product: {
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "white",
        height: 300,
        margin: 20,
        
    },
    touchable: {
        overflow: "hidden",
        shadowRadius: 8,
    },
    imageContainer: {
        width: "100%",
        height: "60%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden"
    },
    details: {
        alignItems: "center",
        height: "17%",
        padding: 10,
    },
    image: {
        width: "100%",
        height: "60%"
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
        marginVertical: 2,
    },
    price: {
        fontFamily: "open-sans",
        fontSize: 14,
        color: "#888"
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "23%",
        paddingHorizontal: 20,
    }
});

export default ProductItem;