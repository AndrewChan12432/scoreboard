import React, { useState } from "react";

export default function EnterNameA(props) {
  const [nameA , setNameA] = useState([
    {}
  ])
  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push('/enter-name-B')
  }
  const setName = (e) => {
    setNameA(e.target.value);
    console.log(nameA)
  }
  return (
    <div className="enter-name-A d-flex justify-content-center align-items-center mt-3">
      <div className="text-center label-3">
        <form onSubmit={handleSubmit} className="d-flex flex-column ">
        <label>Please enter team A's name and player's number:</label>
            <label>
                Team A:<input type="text" name="teamA" onChange={setName} />
            </label>
            <div className="d-flex">
              <div className="d-flex flex-column">
                <label>
                  Player 1:<input type="text" name="player" onChange={setName} />
                </label>
                <label>
                  Player 2:<input type="text" name="player" onChange={(e) => setNameA(e.target.value)} />
                </label>
                <label>
                  Player 3:<input type="text" name="player" onChange={(e) => setNameA(e.target.value)} />
                </label>
                <label>
                  Player 4:<input type="text" name="player" onChange={(e) => setNameA(e.target.value)} />
                </label>
                <label>
                  Player 5:<input type="text" name="player" onChange={(e) => setNameA(e.target.value)} />
                </label>
              </div>
              <div className="d-flex flex-column ml-3">
                <label>
                  Player 6:<input type="text" name="player" onChange={(e) => setNameA(e.target.value)} />
                </label>
                <label>
                  Player 7:<input type="text" name="player" onChange={(e) => setNameA(e.target.value)} />
                </label>
                <label>
                  Player 8:<input type="text" name="player" onChange={(e) => setNameA(e.target.value)} />
                </label>
                <label>
                  Player 9:<input type="text" name="player" onChange={(e) => setNameA(e.target.value)} />
                </label>
                <label>
                  Player 10:<input type="text" name="player" onChange={(e) => setNameA(e.target.value)} />
                </label>
              </div>
            </div>
              <input type="submit" value="Next" />
        </form>
      </div>
      </div>
  )
}
