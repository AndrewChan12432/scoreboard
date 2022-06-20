import React from "react";
import { Link } from 'react-router-dom'

export default function EnterNameA(props) {
  const playerRight = ["1","2","3","4","5","6"];
  const playerLeft = ["7","8","9","10","11","12"];
  for(let i = 1; i < 13; i++){
    localStorage.setItem(`player${i}A`, JSON.stringify(i));
  }
    localStorage.setItem('teamA', JSON.stringify("Team A"));
  return (
    <div className="centerise">
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
                  {playerRight.map((players, index) => {
                    return(
                      <label key={index}>
                        Player {players}:
                        <input type="text"
                              pattern="\d*" 
                              name="player"
                              maxLength="2"
                              placeholder={localStorage.getItem(`player${players}A`)}
                              onChange={(e) => localStorage.setItem(`player${players}A`, JSON.stringify(e.target.value)) }
                        />
                      </label>
                    )                       
                  })}
                </div>
                <div className="d-flex flex-column ml-3">
                  {playerLeft.map((players, index) => {
                    return(
                      <label key={index}>
                        Player {players}:
                        <input type="text"
                              pattern="\d*" 
                              name="player"
                              maxLength="2"
                              placeholder={localStorage.getItem(`player${players}A`)}
                              onChange={(e) => localStorage.setItem(`player${players}A`, JSON.stringify(e.target.value)) }
                        />
                      </label>
                    )                      
                  })}
                </div>
              </div>
              <Link className='submit' to="/enter-name-B">
              <input className="w-100 mt-1 text-center " type="submit" value="Next" />
              </Link>
          </form>
         </div>
        </div>
    </div>
  )
}
