/* eslint-disable no-undef */
import { shopReducer } from "../../reducers/shopReducer";
import { types } from "../../types/types";

describe("Pruebas en tiendaReducer", () => {
  test("debe de realizar el listado", () => {
    const initState = {};

    const action = {
      type: types.listProductsLoaded,
      payload: [
        {
          id: "8hKbH2UHPM_944nRHYN1n",
          brand: "Nokia",
          model: "3310",
          price: 320,
          imgUrl:
            "https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg",
        },
        {
          id: "cGjFJlmqNPIwU59AOcY8H",
          brand: "Iphone",
          model: "3210",
          price: 220,
          imgUrl:
            "https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg",
        },
      ],
    };

    const state = shopReducer(initState, action);

    expect(state).toEqual({
      products: [
        {
          id: "8hKbH2UHPM_944nRHYN1n",
          brand: "Nokia",
          model: "3310",
          price: 320,
          imgUrl:
            "https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg",
        },
        {
          id: "cGjFJlmqNPIwU59AOcY8H",
          brand: "Iphone",
          model: "3210",
          price: 220,
          imgUrl:
            "https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg",
        },
      ],
    });
  });

  test("debe visualizar los detalles", () => {
    const initState = {};

    const action = {
      type: types.dataProductsLoaded,
      payload: {
        id: "8hKbH2UHPM_944nRHYN1n",
        brand: "Acer",
        model: "Liquid Z6",
        price: "120",
        imgUrl:
          "https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg",
        networkTechnology: "GSM / HSPA / LTE",
        networkSpeed: "HSPA  LTE",
        gprs: "Yes",
        edge: "Yes",
        announced: "2016  August",
        status: "Available. Released 2016  December",
        dimentions: "-",
        weight: "",
      },
    };

    const state = shopReducer(initState, action);

    expect(state).toEqual({
      dataProduct: {
        id: "8hKbH2UHPM_944nRHYN1n",
        brand: "Acer",
        model: "Liquid Z6",
        price: "120",
        imgUrl:
          "https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg",
        networkTechnology: "GSM / HSPA / LTE",
        networkSpeed: "HSPA  LTE",
        gprs: "Yes",
        edge: "Yes",
        announced: "2016  August",
        status: "Available. Released 2016  December",
        dimentions: "-",
        weight: "",
      },
    });
  });
});
