import React from 'react'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'; 
import { Badge } from 'antd';

export const Navbar = () => {
    const icono = 1

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark ml-4">
                
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <Link
                        className="navbar-brand margin-l" 
                        to="/"
                    >
                        Tienda App
                    </Link>
                    
                </div>
            </div>
            <div className="banderas">
                <button className="btn btn-white margin_right" >
                    <Badge className='color ' count={ icono } ><i className="fas fa-shopping-cart"></i></Badge>   
                </button>
            </div>
        </nav>
    )
}
