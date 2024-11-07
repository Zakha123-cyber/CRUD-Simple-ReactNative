import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./screens/Login";
import CreateProduct from "./screens/CreateProduct";
import ListProduct from "./screens/ListProduct";
import ShowProduct from "./screens/ShowProduct";

export default function App() {
  const Stack = createNativeStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="List" component={ListProduct} />
        <Stack.Screen name="Create" component={CreateProduct} />
        <Stack.Screen name="Show" component={ShowProduct} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
