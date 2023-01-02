import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./index.css";
import Product from "./Product";
import Pricing from "./Pricing";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Product/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
        </Routes>
    </BrowserRouter>
);
ReactDOM.render(<App/>, document.getElementById("app"));
