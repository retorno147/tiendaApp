import { useEffect, React, useState } from 'react';
//import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { actualizarCarritoLoaded, agregarCarritoNew, datosArticulosApi} from '../../actions/api';
import { Spinner } from '../ui/Spinner';


export const ArticuloScreen = () => {

    const { articuloId } = useParams();
    const navigate = useNavigate();
    const { datosArticulo, loading, carrito } = useSelector(state => state.tiendas);
    const dispatch = useDispatch();
    const { brand, model, price, imgUrl, cpu, ram, os, battery, primaryCamera, secondaryCmera, dimentions, displayResolution, weight, options } = datosArticulo;
    let listaPrimaryCamera = []
    let listaSecondaryCmera = []
    const [formValues, setFormValues] = useState({
        color: options?.colors[0]?.code,
        storage: options?.storages[0]?.code,
    })

    useEffect(() => {
        dispatch( datosArticulosApi(articuloId))
        dispatch( actualizarCarritoLoaded())
        setFormValues( formValues )
    }, [dispatch, articuloId])
    

    const handleReturn = () => {
        navigate( -1 )
    }

    if (!datosArticulo) {
        return <Navigate to='/' />
    }

    if ( Array.isArray(primaryCamera) ) {
        listaPrimaryCamera = primaryCamera.map((pd) =>
            pd = pd + ' / '
        )
    }

    if ( Array.isArray(secondaryCmera) ) {
        listaSecondaryCmera = secondaryCmera.map((pd) =>
            pd = pd + ' / '
        )
    }

    let { color, storage} = formValues;

    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const handleAnadirCarrito = async(e) => {

        const articulo = {
            id: articuloId,
            colorCode: color !== undefined ? color :  options?.colors[0]?.code,
            storageCode: storage !== undefined ? storage : options?.storages[0]?.code
        }

        e.preventDefault();
        await dispatch( agregarCarritoNew(articulo, carrito) )
        
        
    }
    

    return loading ? (
        <Spinner />
        ) : (
        <div className="row mt-5">
            <div className="col-2">
                <img 
                    src={ imgUrl } 
                    alt={ model }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Marca: </b> { brand } </li>
                    <li className="list-group-item"> <b>Modelo: </b> { model } </li>
                    <li className="list-group-item"> <b>Precio: </b> { price } </li>
                    <li className="list-group-item"> <b>Cpu: </b> { cpu } </li>
                    <li className="list-group-item"> <b>Ram: </b> { ram } </li>
                    <li className="list-group-item"> <b>Sistema Operativo: </b> { os } </li>
                    <li className="list-group-item"> <b>Resolución de Pantalla: </b> { displayResolution } </li>
                    <li className="list-group-item"> <b>Batería: </b> { battery } </li>
                    <li className="list-group-item"> <b>Primera Cámara: </b> { Array.isArray(primaryCamera) ?  listaPrimaryCamera : primaryCamera} </li>
                    <li className="list-group-item"> <b>Segunda Cámara: </b> { Array.isArray(secondaryCmera)  ?  listaSecondaryCmera : secondaryCmera} </li>
                    <li className="list-group-item"> <b>Dimensiones: </b> { dimentions } </li>
                    <li className="list-group-item"> <b>Peso: </b> { weight } </li>
                </ul>
                <form className='style-form containerSelect' onSubmit={ handleAnadirCarrito }>
                    <div className="form-group">
                        <select
                            className="form-control mg"
                            placeholder="Color"
                            name="color"
                            defaultValue={options?.colors[0].code}
                            value= { color }
                            onChange= { handleInputChange }
                        >
                            {options?.colors.map((pd, id) =>
                                <option key={id} value={pd.code} >{pd.name}</option>
                            )}
                            
                        </select>
                    </div>

                    <div className="form-group">
                        <select
                            className="form-control mg"
                            placeholder="Almacenamiento"
                            name="storage"
                            value= { storage }
                            defaultValue={options?.storages[0].code}
                            onChange= { handleInputChange }
                        >
                            {options?.storages.map((pd, id) =>
                                <option key={id} value={pd.code} >{pd.name}</option>
                            )}
                            
                        </select>
                    </div>

                        <div className="form-group mg">
                            <input 
                                type="submit" 
                                className="btn-carrito SubmitTienda" 
                                value="Añadir al Carrito" />
                        </div>
                    </form>
                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Regresar
                </button>
            </div>
        </div>
    )
}