import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/products/HomeScreen';
import { ProductsScreen } from '../screens/products/Productsscreen';
import { CheckoutScreen } from '../screens/carts/CheckoutScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator 
        //initialRouteName='ProductsScreen'
    >
        <Stack.Screen name="HomeScreen" options={{title: 'Inicio'}} component={HomeScreen}/>
        <Stack.Screen name="ProductsScreen" component={ProductsScreen}/>
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen}/>
    </Stack.Navigator>
  )
}
