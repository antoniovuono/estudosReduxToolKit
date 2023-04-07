import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Counter from "../screens/Counter";

const { Navigator, Screen } = createStackNavigator();

const StackRoutes: React.FC = () => {
    return (
        <Navigator
            initialRouteName="Counter"
            screenOptions={{ headerShown: false }}
        >
            <Screen name="counter" component={Counter} />
        </Navigator>
    );
};

export default StackRoutes;
