import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

export default function EnterNameA(props) {
  // const [nameA , setNameA] = useState([]);
  // const [teamA , setTeamA] = useState([]);
  // const [player1A , setPlayer1A] = useState([]);
  // const [player2A  , setPlayer2A] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem('name', JSON.stringify(teamA));
  // }, [teamA]);

  return (
    <div className="enter-name-A d-flex justify-content-center align-items-center mt-3">
      <div className="text-center label-3">
        <form className="d-flex flex-column ">
        <label>Please enter team A's name and player's number:</label>
            <label>
                Team A:
                <input 
                  type="text" 
                  name="teamA" 
                  maxLength="20" 
                  placeholder={localStorage.getItem('teamA')}
                  onChange={(e) => localStorage.setItem('teamA', JSON.stringify(e.target.value))} 
                />
            </label>
            <div className="d-flex">
              <div className="d-flex flex-column">
                <label>
                  Player 1:<input type="text" name="player" onChange={(e) => localStorage.setItem('player1A', JSON.stringify(e.target.value)) }/>
                </label>
                <label>
                  Player 2:<input type="text" name="player" onChange={(e) => localStorage.setItem('player2A', JSON.stringify(e.target.value)) }/>
                </label>
                <label>
                  Player 3:<input type="text" name="player" onChange={(e) => localStorage.setItem('player3A', JSON.stringify(e.target.value)) }/>
                </label>
                <label>
                  Player 4:<input type="text" name="player" onChange={(e) => localStorage.setItem('player4A', JSON.stringify(e.target.value)) }/>
                </label>
                <label>
                  Player 5:<input type="text" name="player" onChange={(e) => localStorage.setItem('player5A', JSON.stringify(e.target.value)) }/>
                </label>
                <label>
                  Player 6:<input type="text" name="player" onChange={(e) => localStorage.setItem('player6A', JSON.stringify(e.target.value)) }/>
                </label>
              </div>
              <div className="d-flex flex-column ml-3">
                <label>
                  Player 7:<input type="text" name="player" onChange={(e) => localStorage.setItem('player7A', JSON.stringify(e.target.value)) }/>
                </label>
                <label>
                  Player 8:<input type="text" name="player" onChange={(e) => localStorage.setItem('player8A', JSON.stringify(e.target.value)) }/>
                </label>
                <label>
                  Player 9:<input type="text" name="player" onChange={(e) => localStorage.setItem('player9A', JSON.stringify(e.target.value)) }/>
                </label>
                <label>
                  Player 10:<input type="text" name="player" onChange={(e) => localStorage.setItem('player10A', JSON.stringify(e.target.value)) }/>
                </label>
                <label>
                  Player 11:<input type="text" name="player" onChange={(e) => localStorage.setItem('player10A', JSON.stringify(e.target.value)) }/>
                </label>
                <label>
                  Player 12:<input type="text" name="player" onChange={(e) => localStorage.setItem('player10A', JSON.stringify(e.target.value)) }/>
                </label>
              </div>
            </div>
            <Link className='submit' to="/enter-name-B">
            <input className="w-100 mt-1 text-center " type="submit" value="Next" />
            </Link>
        </form>
      </div>
      </div>
  )
}
