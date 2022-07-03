import React from 'react'
import Buzzer from '../buzzerSound.mpeg'

export default function Timer() {
   const timeOut =()=> {
    let sec = 60;
    let interval;
    document.getElementById("ads").style.display = "flex";
    function updateSec() {
        sec--
        document.getElementById("timer").innerHTML = sec;
        if(sec === 0) {
            document.getElementById("timer").innerHTML = 60;
            document.getElementById("ads").style.display = "none";
            clearInterval(interval);
        }
        if(document.getElementById("ads").style.display !== "flex") {
            document.getElementById("timer").innerHTML = 60;
            clearInterval(interval)
        }
    }
    interval = setInterval(updateSec, 900);
   }
    return (
        <div className="scoreboard d-flex justify-content-center">
            <div id="2_page" className="position_all">
                <div className="position_quater">
                    <div id="quater_change" className="quater_change_style">1</div>
                    <div className="quater_stlye">PERIOD</div>
                </div>
            <div className="position_timer">
                <div id="clock_1" className="light light_clock">
                    <div className="display_1 d-flex">
                        <div id="myReset">
                            <div id="plusMin" className="changtime">+</div>
                            <div id="minusMin" className="changtime">-</div>
                        </div>
                        <div className="digits_1"></div>
                        <div id="myReset">
                            <div id="plusSec" className="changtime">+</div>
                            <div id="minusSec" className="changtime">-</div>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div id="faul" className="timer_but1">Start</div>
                        <div id="hon"></div>
                    </div>
                </div>
                <div id="clock" className="light d-flex">
                    <div className="display" id="minus_24">
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
                <audio id="myAudio">
                    <source src={Buzzer} type="audio/mpeg" />
                </audio>
            </div>
        </div>
    )
}
