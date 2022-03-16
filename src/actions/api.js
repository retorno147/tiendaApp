import axios from "axios";
import Swal from "sweetalert2";
import { types } from "../types/types";

let api = axios.create({
  baseURL: "https://front-test-api.herokuapp.com/api",
});

export const listProducts = () => {
  return async (dispatch) => {
    await api
      .get("/product")
      .then((response) => {
        const body = response.data;
        dispatch(listProductsLoaded(body));
      })
      .catch((error) => {
        if (error?.response?.status === 401) {
          Swal.fire(
            "Error",
            "No se ha podido conectar con la BBDD, pongase en contacto con el Administrador.",
            "error"
          );
        } else {
          dispatch(error.response.data.message);
        }
      });
  };
};

const listProductsLoaded = (products) => ({
  type: types.listProductsLoaded,
  payload: products,
});

export const dataProductsApi = (id) => {
  return async (dispatch) => {
    dispatch(spinnerLoaded(true));
    await api
      .get(`/product/${id}`)
      .then((response) => {
        const body = response.data;
        dispatch(dataProductsLoaded(body));
        dispatch(spinnerLoaded(false));
      })
      .catch((error) => {
        if (error?.response?.status === 401) {
          Swal.fire(
            "Error",
            "No se ha podido conectar con la BBDD, pongase en contacto con el Administrador.",
            "error"
          );
        } else {
          dispatch(error.response.data.message);
        }
      });
  };
};

const dataProductsLoaded = (product) => ({
  type: types.dataProductsLoaded,
  payload: product,
});

const spinnerLoaded = (loading) => ({
  type: types.spinnerLoaded,
  payload: loading,
});

export const addCartNew = (product, cart) => {
  return async (dispatch) => {
    await api
      .post(`/cart`, product)
      .then((response) => {
        const body = response.data.count;
        document.cookie = "cart=" + (cart + body) + "; max-age=3600;";
        dispatch(addCartLoaded(body));
      })
      .catch((error) => {
        if (error?.response?.status === 401) {
          Swal.fire(
            "Error",
            "No se ha podido conectar con la BBDD, pongase en contacto con el Administrador.",
            "error"
          );
        } else {
          dispatch(error.response.data.message);
        }
      });
  };
};

const addCartLoaded = (cart) => ({
  type: types.addCartLoaded,
  payload: cart,
});

export const updatedCartLoaded = () => ({
  type: types.updatedCartLoaded,
});
