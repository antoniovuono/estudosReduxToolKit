import React from "react";
import { Provider } from "react-redux";

import AppRoutes from "./src/routes";
import { store } from "./src/counterStore/store";

export default function App() {
    return (
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    );
}
