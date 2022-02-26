import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <div className="page-not-found d-flex justify-content-center align-items-center">
            <div className="text-center p-3">
                <h1>404 Error</h1>
                <Link to="/">
                <span>Home</span>
                </Link>
            </div>
        </div>
    )
}
