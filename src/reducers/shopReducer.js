import { types } from "../types/types";

const cookies = document.cookie.split(";").some(function (item) {
    return item.trim().indexOf("cart=") == 0;
});

if (!cookies) {
    document.cookie = "cart=0; max-age=3600";
}

const initialState = {
    products: [],
    dataProduct: {},
    cart: cookies
        ? document.cookie
            .split("; ")
            .find((row) => row.startsWith("cart="))
            .split("=")[1]
        : 0,
    loading: false,
};

export const shopReducer = (state = initialState, action) => {
    const cookies2 = document.cookie.split(";").some(function (item) {
        return item.trim().indexOf("cart=") == 0;
    });

    switch (action.type) {
        case types.listProductsLoaded:
            return {
                ...state,
                products: [...action.payload],
            };

        case types.dataProductsLoaded:
            return {
                ...state,
                dataProduct: { ...action.payload },
            };

        case types.spinnerLoaded:
            return {
                ...state,
                loading: action.payload,
            };

        case types.addCartLoaded:
            return {
                ...state,
                cart: Number(state.cart) + action.payload,
            };

        case types.updatedCartLoaded:
            return {
                ...state,
                cart: cookies2 ? state.cart : 0,
            };

        default:
            return state;
    }
};
