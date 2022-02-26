import React from 'react'
import { Link } from 'react-router-dom'

export default function Intro() {
    return (
        <div className="intro d-flex justify-content-center align-items-center">
            <div className="text-center p-3">
            <h1>JOSDREW's Scoreboard</h1>
            <p>Count point and time for basketball match</p>
            <h3>Select Mode:</h3>
            <Link to="enter-time">
                <div className='d-flex flex-column'>
                    <span>3 vs 3</span>
                    <span>5 vs 5</span>
                    <span>Competition</span>
                </div>
            </Link>
            </div>
        </div>
    )
}
