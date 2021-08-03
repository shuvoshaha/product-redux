import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <div className="container">
                <Link to="/" className="brand_name">
                    Fakestore
                </Link>
            </div>
        </div>
    )
}

export default Header
