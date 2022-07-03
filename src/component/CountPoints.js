import React from 'react';
import Timer from './Timer';
import Hone from '../buzzerSound.mpeg'
import ads from '../Ads-image.jpg'

export default function CountPoints() {
    const nameA = JSON.parse(localStorage.getItem('teamA'))
    const nameB = JSON.parse(localStorage.getItem('teamB'))
    const colorA = JSON.parse(localStorage.getItem('color-teamA'))
    const colorB = JSON.parse(localStorage.getItem('color-teamB'))
    let playersA = [];
    let playersB = [];
    let scoreA = 0;
    let scoreB = 0;
    for(let i = 1; i < 13; i++){
        playersA.push(JSON.parse(localStorage.getItem(`player${i}A`)))
        playersB.push(JSON.parse(localStorage.getItem(`player${i}B`)))
    }
    // playersA.sort(function(a, b) {
    //     return a - b;
    // });
    // playersB.sort(function(a, b) {
    //     return a - b;
    // });
    const cancelAds =()=> {
        document.getElementById("ads").style.display = "none" 
    }
    const changeColorLeft = () => {
        if(document.getElementsByClassName("arrow-left")[0].style.color === "whitesmoke"){
            document.getElementsByClassName("arrow-left")[0].style.color = "rgba(0,0,0,.6)";
        }else{
            document.getElementsByClassName("arrow-left")[0].style.color = "whitesmoke";
            document.getElementsByClassName("arrow-right")[0].style.color = "rgba(0,0,0,.6)";
        }
    }
    const changeColorRight = () =>{
        if(document.getElementsByClassName("arrow-right")[0].style.color === "whitesmoke"){
            document.getElementsByClassName("arrow-right")[0].style.color = "rgba(0,0,0,.6)";
        }else{
            document.getElementsByClassName("arrow-right")[0].style.color = "whitesmoke";
            document.getElementsByClassName("arrow-left")[0].style.color = "rgba(0,0,0,.6)";
        }
    }
    const resetFouls = (e) =>{
        let getNumber = e.target.innerHTML;
        getNumber++
        e.target.innerHTML = getNumber;
        console.log(e.target.innerHTML, getNumber)
        if(e.target.innerHTML === "5") {
            e.target.classList.add("glow-red")
        }
        if(e.target.innerHTML > 5){
            e.target.classList.remove("glow-red", "glow-blue", "preglow-red", "preglow-blue")
            e.target.innerHTML = 0;
        }
    } 
    function checkFoul(e){
    e.target.classList.add("foulColor");
    let getElement = e.target.innerHTML;
    let toNumber = parseInt(getElement);
    if(toNumber < 5) {
        toNumber++
        e.target.innerHTML = toNumber;
        console.log(toNumber)
        }else if(e.target.innerHTML === ""){
        toNumber = 1
        e.target.innerHTML = toNumber;
        }else{
        toNumber = 0
        e.target.innerHTML = "";
        e.target.classList.remove("foulColor");
        e.target.classList.remove("glow-red");
        e.target.classList.remove("foul-out");
        }
        if(toNumber === 4){
            e.target.classList.add("glow-red")
        }
        if(toNumber === 5){
            e.target.classList.add("foul-out")
        }
    }
    window.onbeforeunload = function () {
        return 'Are you sure? Your work will be lost. ';
    }; 
    window.addEventListener('keydown', e => {
        if(e.key === " ") {
            document.getElementById("faul").click();
        }
        if(e.key === "h" || e.key === "H"){
            document.getElementById("myHone").play();
        }
        if(e.key === "1") {
            document.getElementById("24s").click();
        }
        if(e.key === "2") {
            document.getElementById("14s").click();
        }
        if(e.key === "3") {
            document.getElementById("00s").click();
        }
        if(e.key === "[") {
            document.querySelector(".arrow-left").click();
        }
        if(e.key === "]") {
            document.querySelector(".arrow-right").click();
        }
        if(e.key === "o" || e.key === "O") {
            lightAlarm1()
        }
        if(e.key === "p" || e.key === "P") {
            lightAlarm2()
        }
        if(e.key === "ArrowUp") {
            document.querySelector("#plusSec").click();
        }
        if(e.key === "ArrowDown" || e.key === "-") {
            document.querySelector("#minusSec").click();
        }
        if(e.key === ";") { //teamA add score
            scoreA++;
            document.querySelector(".pointA").innerHTML = scoreA;
        }
        if(e.key === ".") { //teamA minus score
            if(scoreA > 0){
                scoreA--;
                document.querySelector(".pointA").innerHTML = scoreA;
            }
        }
        if(e.key === "'") { //teamB add score
            scoreB++;
            document.querySelector(".pointB").innerHTML = scoreB;
        }
        if(e.key === "/") { //teamB minus score
            if(scoreB > 0){
                scoreB--;
                document.querySelector(".pointB").innerHTML = scoreB;
            }
        }  
    })
    const lightAlarm1 = () =>{
        let flagAlarm1 = document.getElementById("flag-alarm1")
        let bgPivot1 = document.getElementById("bg-pivot1")
        if(bgPivot1.classList.contains("bg-circle")){
            flagAlarm1.classList.remove("turn-red");
            bgPivot1.classList.remove("bg-circle")
        }else{
            flagAlarm1.classList.add("turn-red");
            bgPivot1.classList.add("bg-circle")
        }
    }
    const lightAlarm2 = () =>{
        let flagAlarm2 = document.getElementById("flag-alarm2")
        let bgPivot2 = document.getElementById("bg-pivot2")
        if(bgPivot2.classList.contains("bg-circle")){
            flagAlarm2.classList.remove("turn-red");
            bgPivot2.classList.remove("bg-circle")
        }else{
            flagAlarm2.classList.add("turn-red");
            bgPivot2.classList.add("bg-circle")
        }
    }
    
    return (
            <div className="count-points">
                <div className="black">
                        <div className="team-fouls d-flex">
                            <div className='count_score d-flex'>
                                <div className="teamA">
                                    <h5>{nameA}</h5>
                                    <div className="pointA" style={{backgroundColor: colorA}}>0</div>
                                </div>
                            </div>
                            <Timer />
                            <div className='count_score d-flex'>
                                    <div className="teamB">
                                    <h5>{nameB}</h5>
                                    <div className="pointB" style={{backgroundColor: colorB}}>0</div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="foul-counts d-flex align-items-center">
                    <div className='contain-flag' onClick={lightAlarm1}>
                        <div className='pole'></div>
                        <div id="flag-alarm1"className='flag-2'></div>
                        <div id="bg-pivot1" className=''></div>
                    </div>
                    <div className='d-flex team-foul'>
                        <div className="teamA-fouls" style={{backgroundColor: colorA}} onClick={resetFouls}>0</div>
                        <p>Team Foul</p>
                        <div className="teamB-fouls" style={{backgroundColor: colorB}} onClick={resetFouls}>0</div>
                    </div>
                    <div className='contain-flag' onClick={lightAlarm2}>
                        <div className='pole'></div>
                        <div id="flag-alarm2"className='flag-2'></div>
                        <div id="bg-pivot2" className=''></div>
                    </div>
                </div>
                <div className='timeout-table'>
                    <div className='d-flex flex-column'>
                        <div>Timeout</div>
                        <div className='team-timeout'>
                            <div className='d-flex timeout-col'>
                                <div className='d-flex flex-column'>
                                    <p>1st</p>
                                    <p>Half</p>
                                </div>
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                            </div>
                            <div className='d-flex timeout-col'>
                                <div className='d-flex flex-column'>
                                    <p>2st</p>
                                    <p>Half</p>
                                </div>
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                            </div>
                            <div className='d-flex timeout-col'>
                                <div className='d-flex flex-column'>
                                    <p>Extra</p>
                                </div>
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                            </div>
                        </div>
                    </div>
                    <div className='possesion-arrow'>
                        <div className="arrow-left" onClick={changeColorLeft}></div>
                        <div>Possesion Arrow</div>
                        <div className="arrow-right" onClick={changeColorRight}></div>
                    </div>
                    <div className='d-flex flex-column'>
                        <div>Timeout</div>
                        <div className='team-timeout'>
                            <div className='d-flex timeout-col'>
                                <div className='d-flex flex-column'>
                                    <p>1st</p>
                                    <p>Half</p>
                                </div>
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                            </div>
                            <div className='d-flex timeout-col'>
                                <div className='d-flex flex-column'>
                                    <p>2st</p>
                                    <p>Half</p>
                                </div>
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                            </div>
                            <div className='d-flex timeout-col'>
                                <div className='d-flex flex-column'>
                                    <p>Extra</p>
                                </div>
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                                <input type="checkbox"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="player-score d-flex justify-content-center">
                    <div className="players-score-A d-flex">
                        {playersA.map((playersA, index) => {
                            return(
                                <div className="player-div" key={index}>
                                    <p>{playersA}</p>
                                    {/* <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                                    <div className="no-display">
                                        <div className="button-add">
                                        <button onClick={addScore}>+3</button>
                                        <button onClick={addScore}>+2</button>
                                        <button onClick={addScore}>+1</button>
                                        <button onClick={addScore}>-1</button>
                                        </div>
                                        <div className="bground" onClick={closeBg}></div>
                                    </div> */}
                                    <div className="foulBox" id="foulP1" onClick={checkFoul}>0</div>
                                </div>
                            )                       
                        })}
                    </div>
                    <div className="players-score">
                        <p>Players</p>
                        <p>Fouls</p>
                    </div>
                    <div className="players-score-B d-flex">
                        {playersB.map((playersB, index) => {
                            if(playersB === 10 ||playersB === 11 ||playersB === 12){
                            return(
                                <div className="player-div" key={index}>
                                    <p>{playersB}</p>
                                    {/* <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                                    <div className="no-display">
                                        <div className="button-add-special">
                                        <button onClick={addScore}>+3</button>
                                        <button onClick={addScore}>+2</button>
                                        <button onClick={addScore}>+1</button>
                                        <button onClick={addScore}>-1</button>
                                        </div>
                                        <div className="bground" onClick={closeBg}></div>
                                    </div> */}
                                    <div className="foulBox" id="foulP2" onClick={checkFoul}>0</div>
                                </div>
                            )}else{
                            return(
                                <div className="player-div" key={index}>
                                    <p>{playersB}</p>
                                    {/* <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                                    <div className="no-display">
                                        <div className="button-add">
                                        <button onClick={addScore}>+3</button>
                                        <button onClick={addScore}>+2</button>
                                        <button onClick={addScore}>+1</button>
                                        <button onClick={addScore}>-1</button>
                                        </div>
                                        <div className="bground" onClick={closeBg}></div>
                                    </div> */}
                                    <div className="foulBox" id="foulP2" onClick={checkFoul}>0</div>
                                </div>
                            )}                      
                            })}
                    </div>
                </div>
                <div className='ads-copyright'>
                    <p>This app is developed by Josdrew Studio</p>
                </div>
                <audio id="myHone">
                    <source src={Hone} type="audio/mpeg" />
                </audio>
                <div className='ads_settings no-display' id="ads">
                    <div className='bg_opacity' onClick={cancelAds}></div>
                    <p>This app is developed by Josdrew Studio</p>
                    <div className='d-flex flex-column' onClick={cancelAds} >
                        <div className='black-background'></div>
                        <div id="timer" className='timer-settings'>60</div>
                        <img src={ads} alt="ads"></img>
                    </div>
                </div>
            </div>
    )
}
