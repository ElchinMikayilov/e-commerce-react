import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Detail from '../pages/Detail'
import Favourite from '../components/Favourite'
import Basket from '../components/Basket'
import NotFound from '../components/NotFound'
import FAQ from '../pages/Faq'

export const paths = [
    { title: 'About', path: 'about', element: < About /> },
    { title: 'Faq', path: 'faq', element: < FAQ /> },
]

const Router = ({ favourite, setFavourite, basket, setBasket }) => {
    return (
        <Routes>
            <Route path='/' element={<Home favourite={favourite} setFavourite={setFavourite} basket={basket} setBasket={setBasket} />} />
            {
                paths.map((item, index) => <Route key={index} path={item.path} element={item.element} />)
            }
            <Route path='detail/:id' element={<Detail favourite={favourite} setFavourite={setFavourite} basket={basket} setBasket={setBasket} />} />
            <Route path='favourite' element={<Favourite favourite={favourite} setFavourite={setFavourite} basket={basket} setBasket={setBasket} />} />
            <Route path='basket' element={<Basket basket={basket} setBasket={setBasket} />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Router
