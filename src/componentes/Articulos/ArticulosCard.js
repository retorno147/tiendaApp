import React from 'react'
import { Link } from 'react-router-dom'

export const ArticulosCard = (articulos) => {

    const {id, brand, model, price, imgUrl} = articulos

    return (
        <div className="col animate__animated animate__fadeIn ml-5">
            <div className="card">
                
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ imgUrl } className="card-img" alt={brand} />
                    </div>
                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{brand} {model}</h5>

                            <p className="card-text">
                                <small className="text-muted">Precio: { price } €</small>
                            </p>

                            
                            <Link to={`/protagonista/${id}`}>
                                Más información
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
