import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function EnterNameB(props) {
    const [teamB , setNameB] = useState("")
    console.log(teamB)
    
    return (
        <div className="enter-name-A d-flex justify-content-center align-items-center mt-3">
        <div className="text-center label-3">
          <form className="d-flex flex-column ">
          <label>Please enter team B's name and player's number:</label>
              <label>
                  Team B:
                  <input 
                  type="text" 
                  name="teamB" 
                  maxLength="20" 
                  placeholder={localStorage.getItem('teamB')}
                  onChange={(e) => localStorage.setItem('teamB', JSON.stringify(e.target.value))} 
                />
              </label>
              <div className="d-flex">
              <div className="d-flex flex-column">
                <label>
                  Player 1:<input type="text" name="player" onChange={(e) => localStorage.setItem('player1B', JSON.stringify(e.target.value)) }/>
                </label>
                <label>
                  Player 2:<input type="text" name="player" onChange={(e) => localStorage.setItem('player2B', JSON.stringify(e.target.value)) }/>
                </label>
                <label>
                  Player 3:<input type="text" name="player" onChange={(e) => localStorage.setItem('player3B', JSON.stringify(e.target.value)) }/>
                </label>
                <label>
                  Player 4:<input type="text" name="player" onChange={(e) => localStorage.setItem('player4B', JSON.stringify(e.target.value)) }/>
                </label>
                <label>
                  Player 5:<input type="text" name="player" onChange={(e) => localStorage.setItem('player5B', JSON.stringify(e.target.value)) }/>
                </label>
                <label>
                  Player 6:<input type="text" name="player" onChange={(e) => localStorage.setItem('player6B', JSON.stringify(e.target.value)) }/>
                </label>
              </div>
              <div className="d-flex flex-column ml-3">
                <label>
                  Player 7:<input type="text" name="player" onChange={(e) => localStorage.setItem('player7B', JSON.stringify(e.target.value)) }/>
                </label>
                <label>
                  Player 8:<input type="text" name="player" onChange={(e) => localStorage.setItem('player8B', JSON.stringify(e.target.value)) }/>
                </label>
                <label>
                  Player 9:<input type="text" name="player" onChange={(e) => localStorage.setItem('player9B', JSON.stringify(e.target.value)) }/>
                </label>
                <label>
                  Player 10:<input type="text" name="player" onChange={(e) => localStorage.setItem('player10B', JSON.stringify(e.target.value)) }/>
                </label>
                <label>
                  Player 11:<input type="text" name="player" onChange={(e) => localStorage.setItem('player10B', JSON.stringify(e.target.value)) }/>
                </label>
                <label>
                  Player 12:<input type="text" name="player" onChange={(e) => localStorage.setItem('player10B', JSON.stringify(e.target.value)) }/>
                </label>
              </div>
            </div>
              <Link className='submit'  to="/scoreboard">
                <input className="w-100 mt-1 text-center " type="submit" value="Next" />
              </Link>
          </form>
        </div>
        </div>
    )
}
