/* eslint-disable no-undef */
import { tiendaReducer } from '../../reducers/tiendaReducer';
import { types } from '../../types/types';


describe('Pruebas en tiendaReducer', () => {
    
    test('debe de realizar el listado', () => {

        const initState = {};

        const action = {
            type: types.listArticulosLoaded,
            payload: 
                [
                    {
                        id: '8hKbH2UHPM_944nRHYN1n', 
                        brand: 'Nokia', 
                        model: '3310', 
                        price: 320, 
                        imgUrl: 'https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg'
                    },
                    {
                        id: 'cGjFJlmqNPIwU59AOcY8H', 
                        brand: 'Iphone', 
                        model: '3210', 
                        price: 220, 
                        imgUrl: 'https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg'
                    }
                ]
            
        };

        const state = tiendaReducer( initState, action );

        expect( state ).toEqual({
            articulos:
        
                [
                    {
                        id: '8hKbH2UHPM_944nRHYN1n', 
                        brand: 'Nokia', 
                        model: '3310', 
                        price: 320, 
                        imgUrl: 'https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg'
                    },
                    {
                        id: 'cGjFJlmqNPIwU59AOcY8H', 
                        brand: 'Iphone', 
                        model: '3210', 
                        price: 220, 
                        imgUrl: 'https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg'
                    }
                ]
            }
        )

        
    })

    test('debe visualizar los detalles', () => {

        const initState = {};

        const action = {
            type: types.datosArticulosLoaded,
            payload: 
            {
                id: "8hKbH2UHPM_944nRHYN1n",
                brand: "Acer",
                model: "Liquid Z6",
                price: "120",
                imgUrl: "https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg",
                networkTechnology: "GSM / HSPA / LTE",
                networkSpeed: "HSPA  LTE",
                gprs: "Yes",
                edge: "Yes",
                announced: "2016  August",
                status: "Available. Released 2016  December",
                dimentions: "-",
                weight: "",
                
            }
            
        };

        const state = tiendaReducer( initState, action );

        expect( state ).toEqual({
            datosArticulo:
        
                {
                    id: "8hKbH2UHPM_944nRHYN1n",
                    brand: "Acer",
                    model: "Liquid Z6",
                    price: "120",
                    imgUrl: "https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg",
                    networkTechnology: "GSM / HSPA / LTE",
                    networkSpeed: "HSPA  LTE",
                    gprs: "Yes",
                    edge: "Yes",
                    announced: "2016  August",
                    status: "Available. Released 2016  December",
                    dimentions: "-",
                    weight: "",
                    
                }
            }
        )

        
    })
})