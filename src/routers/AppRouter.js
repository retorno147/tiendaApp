import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ProductsCard } from "../components/Products/ProductsCard";
import { ProductScreen } from "../components/Products/ProductScreen";
import { ProductsList } from "../components/Products/ProductsList";
import { Navbar } from "../components/ui/Navbar";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Navbar />
      <div className="container-fluid pd-3">
        <Routes>
          <Route
            exact
            path="/products/:productId"
            element={<ProductScreen />}
          />
          <Route exact path="/products" element={<ProductsCard />} />
          <Route exact path="/*" element={<ProductsList />} />
        </Routes>
      </div>
    </HashRouter>
  );
};
