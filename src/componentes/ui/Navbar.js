import React from 'react'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'; 
import { Badge, Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

export const Navbar = () => {

    const { carrito } = useSelector(state => state.tiendas);

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
                <Breadcrumb className='style-bread'>
                    <Breadcrumb.Item className=' color' href="">
                        <HomeOutlined />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className='color' href="">
                        <UserOutlined /> Detalles del articulo
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            
            <div className="banderas">
                <button className="btn btn-white margin_right" >
                    <Badge className='color ' count={ carrito } ><i className="fas fa-shopping-cart"></i></Badge>   
                </button>
            </div>
        </nav>
    )
}
