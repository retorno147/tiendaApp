import { useEffect, React } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { datosArticulosApi} from '../../actions/api';
import { Spinner } from '../ui/Spinner';


export const ArticuloScreen = () => {

    const { articuloId } = useParams();
    const navigate = useNavigate();
    const { datosArticulo, loading } = useSelector(state => state.tiendas);
    const dispatch = useDispatch();
    const { brand, model, price, imgUrl, cpu, ram, os, battery, primaryCamera, secondaryCmera, dimentions, displayResolution, weight, options } = datosArticulo;
    const { colors, storages} = options
    let listaPrimaryCamera = []
    let listaSecondaryCmera = []

    useEffect(() => {
        dispatch( datosArticulosApi(articuloId))
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
                <form >
                    <div className="form-group">
                        <select
                            className="form-control"
                            placeholder="Color"
                            name="color"
                            value= { colors }
                            //onChange= { handleRegisterInputChange }
                        >
                            {colors.map((pd) =>
                                <option key={pd} value={pd.code} selected={colors.length === 1}>{pd.name}</option>
                            )}
                            
                        </select>
                    </div>

                    <div className="form-group">
                        <select
                            className="form-control"
                            placeholder="Almacenamiento"
                            name="almacenamiento"
                            value= { storages }
                            //onChange= { handleRegisterInputChange }
                        >
                            {storages.map((pd) =>
                                <option key={pd} value={pd.code} selected={storages.length === 1}>{pd.name}</option>
                            )}
                            
                        </select>
                    </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmitTienda" 
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