import axios from "axios";
import Swal from "sweetalert2";
import { types } from "../types/types";



let api = axios.create({
    baseURL: 'https://front-test-api.herokuapp.com/api'
});

export const listArticulos = () => {

    return async( dispatch ) => {
    
        await api.get('/product')
            .then((response) => {
            const body = response.data
            dispatch( listArticulosLoaded( body) )
        }).catch((error) => {
            if (error?.response?.status === 401 ){
            Swal.fire('Error', 'No se ha podido conectar con la BBDD, pongase en contacto con el Administrador.', 'error')
            } else {
            dispatch(error.response)
            }
        })
    }
}

const listArticulosLoaded = ( articulos ) => ({
    type: types.listArticulosLoaded,
    payload: articulos
})

export const datosArticulosApi = (id) => {

return async( dispatch ) => {
    dispatch( spinnerLoaded( true) )
    await api.get(`/product/${id}`)
        .then((response) => {
        const body = response.data
        dispatch( datosArticulosLoaded( body) )
        dispatch( spinnerLoaded( false ) )
    }).catch((error) => {
        if (error?.response?.status === 401 ){
        Swal.fire('Error', 'No se ha podido conectar con la BBDD, pongase en contacto con el Administrador.', 'error')
        } else {
        dispatch(error.response)
        }
    })
}
}

const datosArticulosLoaded = ( articulo ) => ({
type: types.datosArticulosLoaded,
payload: articulo
})

const spinnerLoaded = ( loading ) => ({
type: types.spinnerLoaded,
payload: loading
})

