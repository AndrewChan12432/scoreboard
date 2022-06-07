import React from 'react'
import { Link } from 'react-router-dom'


export default function Intro() {
    return (
        <div className="intro d-flex justify-content-center align-items-center">
            <div className="text-center p-3">
                <h1>JOSDREW's Scoreboard</h1>
                <p>Count point and time for basketball match</p>
                <Link to="/enter-name-A">
                    <h1>START</h1>
                </Link>
                <form>
                    <input type="password" id="fname" placeholder='password' ></input>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        </div>
    )
}
