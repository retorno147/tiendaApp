import React from "react";
import { Link, useLocation } from "react-router-dom";
import "antd/dist/antd.css";
import { Badge, Breadcrumb } from "antd";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { cart, dataProduct } = useSelector((state) => state.shops);

  const { brand, model } = dataProduct;
  const location = useLocation();

  const breadcrumbNameMap = {
    "/products": brand + " " + model,
  };

  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>{breadcrumbNameMap[url]}</Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark ml-4">
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <Link className="navbar-brand margin-l" to="/">
            Tienda App
          </Link>
        </div>
        <Breadcrumb>{breadcrumbItems}</Breadcrumb>
      </div>

      <div>
        <button className="btn btn-white margin_right">
          <Badge className="color" count={cart}>
            <i className="fas fa-shopping-cart"></i>
          </Badge>
        </button>
      </div>
    </nav>
  );
};
