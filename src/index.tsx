import React from "react";
import {RouterProvider} from "react-router-dom"
import * as ReactDOM from "react-dom/client";
import {Provider} from "react-redux"
import "./index.html";
import "./index.scss";
import {router} from "./App";
import store, {persistor} from "./store";
import {PersistGate} from "redux-persist/integration/react";


ReactDOM.createRoot(document.getElementById("App")).render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <RouterProvider router={router}/>
        </PersistGate>
    </Provider>
);