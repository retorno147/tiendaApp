import { types } from '../types/types';

const existe = document.cookie.split(';').some(function(item) {
    return item.trim().indexOf('carrito=') == 0;
});

if (!existe){
    document.cookie = "carrito=0; max-age=3600";
}

const initialState = {
    articulos: [],
    datosArticulo: {},
    carrito: existe ? document.cookie.split('; ').find(row => row.startsWith('carrito=')).split('=')[1] : 0,
    loading: false
}


export const tiendaReducer = ( state = initialState, action) => {

    const existe2 = document.cookie.split(';').some(function(item) {
        return item.trim().indexOf('carrito=') == 0;
    })

    switch (action.type) {

        
        case types.listArticulosLoaded:

            return{
                ...state,
                articulos: [...action.payload ]
            }

        case types.datosArticulosLoaded:

            return{
                ...state,
                datosArticulo: {...action.payload }
            }
    
        
        case types.spinnerLoaded:

            return{
                ...state,
                loading: action.payload
        }

        case types.agregarCarritoLoaded:

            return{
                ...state,
                carrito: Number(state.carrito) + action.payload,
            }
        
        case types.actualizarCarritoLoaded:

            return{
                ...state,
                carrito: existe2 ? state.carrito : 0,
            }
        
        default:
            return state;
    }
}