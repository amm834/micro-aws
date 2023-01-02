import React from "react";
import ReactDOM from "react-dom";
import Product from 'products/Product';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Product/>}/>
            </Routes>
        </BrowserRouter>
    );
}
ReactDOM.render(<App/>, document.getElementById("app"));
