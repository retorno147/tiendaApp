import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts, updatedCartLoaded } from "../../actions/api";
import { useForm } from "../../hooks/useForm";
import { getProduct } from "../../selectors/getProduct";
import { ProductsCard } from "./ProductsCard";

export const ProductsList = () => {
  const { products } = useSelector((state) => state.shops);
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    find: "",
  });

  useEffect(() => {
    dispatch(listProducts());
    dispatch(updatedCartLoaded());
  }, [dispatch]);

  const { find } = formValues;
  const listProduct = useMemo(
    () => getProduct(find, products),
    [find, products]
  );

  return (
    <>
      <div className="containerInput mt-4">
        <input
          className="form-control inputBuscar"
          value={find}
          name="find"
          placeholder="Buscar"
          onChange={handleInputChange}
        />
      </div>

      <div className="row rows-cols-1 row-cols-md-4 g-4 animate__animated animate__fadeIn mt-5">
        {listProduct.length !== 0
          ? listProduct.map((product) => (
            <ProductsCard key={product?.id} {...product} />
          ))
          : products.map((product) => (
            <ProductsCard key={product?.id} {...product} />
          ))}
      </div>
    </>
  );
};
