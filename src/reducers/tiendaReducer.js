import { types } from '../types/types';

const initialState = {
    articulos: [],
    datosArticulo: {},
    loading: false
}


export const tiendaReducer = ( state = initialState, action) => {

    switch (action.type) {

        
        case types.listArticulosLoaded:

            return{
                ...state,
                articulos: [...action.payload ]
            }
        
        case types.spinnerLoaded:

            return{
                ...state,
                loading: action.payload
        }
        
        default:
            return state;
    }
}