import React from 'react'
import Buzzer from '../buzzerSound.mpeg'

export default function Timer() {
   const timeOut =()=> {
    document.getElementById("ads").style.display = "flex" 
   }

    return (
        <div className="scoreboard d-flex justify-content-center">
        <div id="2_page" className="position_all">
       <div className="position_quater">
           <div id="quater_change" className="quater_change_style">FIRST</div>
           <div className="quater_stlye">QUARTER</div>
       </div>
       <div className="position_timer">
           <div id="clock_1" className="light light_clock">
               <div className="display_1 d-flex">
                   <div id="myReset">
                       <div id="plusMin" className="changtime">+</div>
                       <div id="minusMin" className="changtime">-</div>
                   </div>
                   <div className="digits_1"></div>
                   <div id="myConfirm"></div>
               </div>
               <div id="faul" className="timer_but1">Start</div>
           </div>
           <div id="clock" className="light d-flex">
               <div className="display">
                   <div className="digits"></div>
               </div>
               <div className='change_24'>
                   <div className='d-flex justify-content-around'>
                        <div id="24s" className="timer_but">24</div>
                        <div id="14s" className="timer_but">14</div>
                        <div id="00s" className="timer_but">00</div>
                   </div>
                   <div id="timeout" className="timeoutstyle" onClick={timeOut}>Timeout</div>
               </div>
           </div>
       </div>
       {/* <div id="clock_2" className="light">
           <div className="display_2">
               <div id="timeout" className="timeoutstyle">Timeout
               </div>
               <div className="half_white">
               <div className="digits_2"></div>
               <div className="ml-1">s</div>
               </div>
           </div>
       </div> */}
       <audio id="myAudio">
       <source src={Buzzer} type="audio/mpeg" />
      </audio>
   </div>
   </div>
    )
}
