import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import productReducer from "./store/reducers/products"

const rootReducer = combineReducers({
  products: productReducer
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <View><Text>Home</Text></View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
