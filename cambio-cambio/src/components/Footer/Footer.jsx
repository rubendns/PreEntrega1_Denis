import React from 'react'
import './Footer.css'

const Footer = (props) => {
    return (
        <footer className="fixed-bottom">
            <div className="container-fluid text-center w-100">
                <h5 className="fw-light text-black m-0">- Diseño para CoderHouse® -{props.copy}—</h5>
            </div>
        </footer >
    )
}

export default Footer