import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listArticulos } from '../../actions/api';
import { useForm } from '../../hooks/useForm';
import { getArticulo } from '../../selectors/getArticulo';
import { ArticulosCard } from './ArticulosCard';

export const ArticulosList = () => {

    const { articulos } = useSelector(state => state.tiendas)
    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        buscar: ''
    });

    useEffect(() => {
        dispatch( listArticulos())
    }, [dispatch])

    const {buscar} = formValues
    const personaje = useMemo( () => getArticulo(buscar, articulos), [buscar, articulos]);

    return (
        <>
            <div className="containerInput mt-4">
                    
                    <input
                    className="form-control inputBuscar"
                    value={buscar}
                    name="buscar"
                    placeholder='Buscar'
                    onChange={handleInputChange}
                    />
        </div>

        <div className="row rows-cols-1 row-cols-md-4 g-4 animate__animated animate__fadeIn mt-5">
        { 
            personaje.length !== 0 ?
                personaje.map( articulo => (
                    <ArticulosCard 
                        key={ articulo?.id } 
                        { ...articulo }
                    />
                )) :

                articulos.map( articulo => (
                    <ArticulosCard 
                        key={ articulo?.id } 
                        { ...articulo }
                    />
                ))
        }
    </div>
        </>
    )
}
