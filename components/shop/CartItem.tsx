import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Platform, ImagePropTypes } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from "@expo/vector-icons";

const CartItem = (props: any) => {

    console.log(JSON.stringify(props));

    return (
        <View style={styles.cartItem}>
            <View style={styles.itemData}>
                <Text style={styles.quantity}>{props.quantity} </Text>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.itemData}>
                <Text style={styles.amount}>£{props.amount.toFixed(2)}</Text>
                { props.deletable &&
                <TouchableOpacity style={styles.deleteButton} onPress={props.onRemove}>
                    <Ionicons name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
                        size={23} color="red" />
                </TouchableOpacity>
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    cartItem:{
        padding:10,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20
    },
    itemData:{
        flexDirection: "row",
        alignItems: "center"
    },
    quantity:{
        fontFamily: "open-sans",
        color: "#888",
        fontSize: 16
    },
    title:{
        fontFamily: "open-sans-bold",
        fontSize: 16
    },
    amount: {
        fontFamily: "open-sans-bold",
        fontSize: 16
    },
    deleteButton: {
        marginLeft: 20
    }
});

export default CartItem;