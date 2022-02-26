import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function EnterTime(props) {
  const [time, setTime] = useState("")

  return (
    <div className="enter-time d-flex justify-content-center align-items-center">
      <div className="text-center p-3">
        <form className="text-center d-flex flex-column">
          <label>Please select minutes per quater:</label>
          <input type="number" required min="5" max="10" onChange={(e) => {
            setTime(e.target.value)
            console.log(time)}
            } />
          <Link className='submit' to="/enter-name-A">
            <input className="mt-1 text-center" type="submit" value="Next" />
          </Link>         
        </form>

      </div>
    </div>
  )
}

