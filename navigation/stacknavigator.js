import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import Events from "../screens/events";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen name="Events" component={Events} />
        </Stack.Navigator>
    );
};

export default StackNavigator;