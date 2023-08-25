import React from 'react'
import CartWidget from './CartWidget/CartWidget'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
                <nav class="navbar col">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Noticias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                    <CartWidget cartIcon="bi bi-cart" />
                </nav >
            </div>
        </>
    )
}

export default Navbar