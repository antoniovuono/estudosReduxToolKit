import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import StackRoutes from "./stack.routes";

const AppRoutes = () => {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    );
};

export default AppRoutes;
