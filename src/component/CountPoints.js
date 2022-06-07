import React from 'react'

export default function CountPoints() {
    // const players = ["1", "2", "3","4" ,"5" ,"6" ,"7" ,"8" ,"9" ,"10" ,"11" ,"12"];
    const nameA = JSON.parse(localStorage.getItem('teamA'))
    const nameB = JSON.parse(localStorage.getItem('teamB'))
    let playersA = [];
    let playersB = [];
    for(let i = 1; i < 13; i++){
        playersA.push(JSON.parse(localStorage.getItem(`player${i}A`)))
        playersB.push(JSON.parse(localStorage.getItem(`player${i}B`)))
    }
    const cancelAds =()=> {
        document.getElementById("ads").style.display = "none" 
        }
    const changeColorLeft = () =>{
        document.getElementsByClassName("arrow-left")[0].style.color = "whitesmoke";
        document.getElementsByClassName("arrow-right")[0].style.color = "rgba(0,0,0,.6)";
    }
    const changeColorRight = () =>{
        document.getElementsByClassName("arrow-right")[0].style.color = "whitesmoke";
        document.getElementsByClassName("arrow-left")[0].style.color = "rgba(0,0,0,.6)";
    }
    const resetFouls = (e) =>{
        e.target.innerHTML = 0;
        e.target.classList.remove("glow-red", "glow-blue", "preglow-red", "preglow-blue")
    }
    
    function checkFoul(e){
    e.target.classList.add("foulColor");
    let getElement = e.target.innerHTML;
    let toNumber = parseInt(getElement);
    if(e.target.id === "foulP1"){
       let getId = document.querySelector(".teamA-fouls");
       let getHtml = getId.innerHTML
       let getNum = parseInt(getHtml);
       if(getNum < 5){
       getNum++;
       getId.innerHTML = getNum;
       }
       if(getNum === 4){
          getId.classList.add("preglow-red")
       }
       if(getNum === 5){
          getId.classList.add("glow-red")
       }
    }else{
       let getId = document.querySelector(".teamB-fouls");
       let getHtml = getId.innerHTML
       let getNum = parseInt(getHtml);
       if(getNum < 5){
           getNum++;
           getId.innerHTML = getNum;
       }
       if(getNum === 4) {
        getId.classList.add("preglow-blue")
       }
       if(getNum === 5) {
        getId.classList.add("glow-blue")
       }
    }
    if(toNumber < 5) {
        toNumber++
        e.target.innerHTML = toNumber;
        }else if(e.target.innerHTML === ""){
        toNumber = 1
        e.target.innerHTML = toNumber;
        }else{
        toNumber = 0
        e.target.innerHTML = "";
        e.target.classList.remove("foulColor");
        }
    }
    function showBtn(e){
        e.target.nextSibling.classList.add("transform");
        // document.getElementById("parent").classList.add("fixed") 
        // e.target.nextSibling.children[1].classList.add("display-it")
    }
    function addScore(e) {
        e.target.parentElement.parentElement.classList.remove("transform");
        document.getElementById("parent").classList.remove("fixed");
        // get point A as a number
        let countPointA = document.querySelector(".pointA");
        let pointAHtml = countPointA.innerHTML;
        let pointANum = parseInt(pointAHtml)
        // get point B as a number
        let countPointB = document.querySelector(".pointB");
        let pointBHtml = countPointB.innerHTML;
        let pointBNum = parseInt(pointBHtml)
        // get the parents element
        let findParent = e.target.parentElement.parentElement.parentElement.parentElement
        let buttonChange = e.target.parentElement.parentElement.parentNode.firstChild.nextSibling
        let buttonHtml = buttonChange.innerHTML
        let changeNum = parseInt(buttonHtml)
            if(e.target.innerHTML === "+3"){
                changeNum += 3;
                buttonChange.innerHTML = changeNum
                if(findParent.classList[0] === "players-score-A"){
                 pointANum += 3;
                 countPointA.innerHTML = pointANum 
                }else{
                 pointBNum += 3;
                 countPointB.innerHTML = pointBNum
                }
            }else if(e.target.innerHTML === "+2"){
                changeNum += 2;
                buttonChange.innerHTML = changeNum
                if(findParent.classList[0] === "players-score-A"){
                pointANum += 2;
                countPointA.innerHTML = pointANum 
                }else{
                pointBNum += 2;
                countPointB.innerHTML = pointBNum
                }
            }else if(e.target.innerHTML === "+1"){
                changeNum += 1;
                buttonChange.innerHTML = changeNum
                if(findParent.classList[0] === "players-score-A"){
                pointANum += 1;
                countPointA.innerHTML = pointANum 
                }else{
                pointBNum += 1;
                countPointB.innerHTML = pointBNum
                }
            }else{
                if( changeNum > 0){
                changeNum -= 1;
                buttonChange.innerHTML = changeNum
                if(findParent.classList[0] === "players-score-A"){
                pointANum -= 1;
                countPointA.innerHTML = pointANum 
                }else{
                pointBNum -= 1  ;
                countPointB.innerHTML = pointBNum
                }
                }
            }
    }
    const closeBg = (e) => {
        e.target.parentElement.classList.remove("transform");
        document.getElementById("parent").classList.remove("fixed");
    }
    window.onbeforeunload = function () {
        return 'Are you sure? Your work will be lost. ';
    };
    
    return (
        <div className="count-points">
            <div className="black">
                    <div className="team-fouls d-flex justify-content-around">
                        <div className='count_score d-flex flex-column align-items-center'>
                            <div className="teamA">
                                <h5>{nameA}</h5>
                                <div className="pointA">0</div>
                            </div>
                        </div>
                        <div className="foul-counts d-flex align-items-center">
                            <div className="teamA-fouls" onClick={resetFouls}>0</div>
                            <p>Team Foul</p>
                            <div className="teamB-fouls" onClick={resetFouls}>0</div>
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                                <div className="teamB">
                                <h5>{nameB}</h5>
                                <div className="pointB">0</div>
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
                                <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                                <div className="no-display">
                                    <div className="button-add">
                                    <button onClick={addScore}>+3</button>
                                    <button onClick={addScore}>+2</button>
                                    <button onClick={addScore}>+1</button>
                                    <button onClick={addScore}>-1</button>
                                    </div>
                                    <div className="bground" onClick={closeBg}></div>
                                </div>
                                <button className="foulBox" id="foulP1" onClick={checkFoul}>0</button>
                            </div>
                        )                       
                    })}
                </div>
                <div className="arrow-left" onClick={changeColorLeft}></div>
                <div className="arrow-right" onClick={changeColorRight}></div>
                <div className="players-score">
                    <p>players</p>
                    <p>scores</p>
                    <p>fouls</p>
                </div>
                <div className="players-score-B d-flex">
                    {playersB.map((playersB, index) => {
                        if(playersB === "10" ||playersB === "11" ||playersB === "12"){
                        return(
                            <div className="player-div" key={index}>
                                <p>{playersB}</p>
                                <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                                <div className="no-display">
                                    <div className="button-add-special">
                                    <button onClick={addScore}>+3</button>
                                    <button onClick={addScore}>+2</button>
                                    <button onClick={addScore}>+1</button>
                                    <button onClick={addScore}>-1</button>
                                    </div>
                                    <div className="bground" onClick={closeBg}></div>
                                </div>
                                <button className="foulBox" id="foulP2" onClick={checkFoul}>0</button>
                            </div>
                        )}else{
                        return(
                            <div className="player-div" key={index}>
                                <p>{playersB}</p>
                                <button className="team1Score" id="player1Score" onClick={showBtn}>0</button>
                                <div className="no-display">
                                    <div className="button-add">
                                    <button onClick={addScore}>+3</button>
                                    <button onClick={addScore}>+2</button>
                                    <button onClick={addScore}>+1</button>
                                    <button onClick={addScore}>-1</button>
                                    </div>
                                    <div className="bground" onClick={closeBg}></div>
                                </div>
                                <button className="foulBox" id="foulP2" onClick={checkFoul}>0</button>
                            </div>
                        )}                      
                        })}
                </div>
            </div>
            <div className='ads_settings no-display' id="ads">
                <div className='bg_opacity' onClick={cancelAds}></div>
                <div className='iframe_settins'>
                    <p>Timeout</p>   
                </div>
            </div>
        </div>
    )
}
