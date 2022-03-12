import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { ArticulosCard } from '../componentes/Articulos/ArticulosCard'
import { ArticulosList } from '../componentes/Articulos/ArticulosList'
import { Navbar } from '../componentes/ui/Navbar'

export const AppRouter = () => {
    return (
        <HashRouter>
            <Navbar/>
            <div className='container-fluid pd-3'>
                <Routes>
                    <Route exact path="/articulos" element={<ArticulosCard/>}/>
                    <Route exact path='/*' element={<ArticulosList/>}/>
                </Routes>
            </div>
        </HashRouter>
    )
}
