import React, { useEffect } from 'react'
import $ from 'jquery';
import Timer from './Timer';
import CountPoints from './CountPoints'

const Sroceboard = () =>{
  useEffect(() => {
    let clock = $('#clock');
    let myClock = $('#clock_1');
    let myTimeout = $('#clock_2');
    let myQuater = $('#quater_change');
    let vid = document.getElementById("myAudio"); 
    let myButton = myClock.find('#faul');
    let myTimeButton = myTimeout.find('#timeout');

    // Map digits to their names (this will be an array)
    let digit_to_name = 'nine eight seven six five four three two one zero'.split(' ');
    let digit_to_quater = 'FIRST SECOND THIRD FOURT OT'.split(' ');

    // This object will hold the digit elements
    let digits = {};

    // Positions for the hours, minutes, and seconds
    let positions = ['s1', 's2'];
    let position_1 = ['m1', 's3', ':', 's4', 's5']
    let position_2 = ['s6', 's7']
    //Variables of number fo timer
    // let varTimeOutS6 = 4;// Timeout
    // let varTimeOutS7 = 1;
    let varQuater = 0; // Quater
    let var24_1 = 7; // 24s, 14s
    let var24_2 = 6; 
    let varMinS4 = 4; // Minit's 60s
    let varMinS5 = 0; 
    let varMinS3_10 = 0;
    let varMinM1 = 9; //Minit's M1 ([M1]0:00), only change between 1 and 0;
    let myInterval = -1;
    let myTimeterval = -1;
    let silentSet = false;
    // Generate the digits with the needed markup,
    // and add them to the clock

    let digit_holder = clock.find('.digits');
    let digitholder = myClock.find('.digits_1');
    let digitHolder = myTimeout.find('.digits_2');
    $.each(positions, function () {
        if (this === 's1') {
            var pos = $('<div class="' + digit_to_name[var24_1] + '">');

            for (let i = 1; i < 8; i++) {
                pos.append('<span class="d' + i + '">');
            }

            digits[this] = pos;

            digit_holder.append(pos);
        }
        if (this === 's2') {
             pos = $('<div class="' + digit_to_name[5] + '">');
            for (let i = 1; i < 8; i++) {
                pos.append('<span class="d' + i + '">');
            }

            digits[this] = pos;

            digit_holder.append(pos);
        }

    });

    $.each(position_1, function () {
        if (this === ':') {
            digitholder.append('<div class="dots">');
        } else if (this === 'm1') {
            var pos = $('<div class="' + digit_to_name[8] + '">');

            for (let i = 1; i < 8; i++) {
                pos.append('<span class="d' + i + '">');
            }

            digits[this] = pos;

            digitholder.append(pos);
        } else {
             pos = $('<div class="' + digit_to_name[9] + '">');

            for (let i = 1; i < 8; i++) {
                pos.append('<span class="d' + i + '">');
            }

            digits[this] = pos;

            digitholder.append(pos);

        }
    });
    $.each(position_2, function () {
        if (this === 's6') {
            var pos = $('<div class="' + digit_to_name[3] + '">');

            for (let i = 1; i < 8; i++) {
                pos.append('<span class="d' + i + '">');
            }

            digits[this] = pos;

            digitHolder.append(pos);
        } else {
             pos = $('<div class="' + digit_to_name[9] + '">');
            for (let i = 1; i < 8; i++) {
                pos.append('<span class="d' + i + '">');
            }

            digits[this] = pos;

            digitHolder.append(pos);
        }

    });
    function playVid() { 
       vid.play();
    }
    function silent() {
        silentSet = true;
        var24_1 = 9;
        var24_2 = 9;
        digits.s1.attr('class', digit_to_name[9]);
        digits.s2.attr('class', digit_to_name[9]);
    }
    //i = five[4] , k = two[7]
    // function update_timeout() {
    //     digits.s6.attr('class', digit_to_name[varTimeOutS6]);
    //     digits.s7.attr('class', digit_to_name[varTimeOutS7]);
    //     varTimeOutS7++;
    //     if (varTimeOutS7 === 10) {
    //         varTimeOutS7 = 0;
    //         varTimeOutS6++;
    //     }
    //     if (varTimeOutS6 >= 10) {
    //         clearInterval(myTimeterval);
    //         digits.s6.attr('class', digit_to_name[9]);
    //         digits.s7.attr('class', digit_to_name[9]);
    //         varTimeOutS6 = 4;
    //         playVid();
    //     }

    // };

    function quater_change(x, y) {
        if (varQuater >= 5) {
            varQuater = 0;
        } else {
            playVid();
            let r = alert("ARE YOU SURE");
            if (r !== "true") {
            var24_1 = 7; // 24s, 14s
            var24_2 = 5; 
            varMinS4 = 3; // Minit's 60s
            varMinS5 = 9; 
            varMinS3_10 = 0;
            varMinM1 = 9; //Minit's M1 ([M1]0:00), only change between 1 and 0;
            varQuater++;
            }
            myQuater.html(digit_to_quater[varQuater]);
            digits.s1.attr('class', digit_to_name[var24_1]);
            digits.s2.attr('class', digit_to_name[var24_2]);
            digits.m1.attr('class', digit_to_name[x]);
            digits.s3.attr('class', digit_to_name[y]);
            digits.s4.attr('class', digit_to_name[9]);
            digits.s5.attr('class', digit_to_name[9]);
            myButton.html("Resume");
            clearInterval(myInterval);
            myInterval = -1;
        }
    }
    $('#24s').click(function () {
        var24_1 = 7;
        var24_2 = 5;
        digits.s1.attr('class', digit_to_name[7]);
        digits.s2.attr('class', digit_to_name[5]);
        silentSet = false;
    });
    $('#14s').click(function () {
        var24_1 = 8;
        var24_2 = 5;
        digits.s1.attr('class', digit_to_name[8]);
        digits.s2.attr('class', digit_to_name[5]);
        silentSet = false;
    });
    $('#plusMin').click(() => {
        varMinS3_10--;
        digits.m1.attr('class', digit_to_name[varMinM1]);
        digits.s3.attr('class', digit_to_name[varMinS3_10]);
        if(varMinS3_10 <= -1) {
            varMinM1--;
            varMinS3_10 = 9;
        }
        if (varMinS3_10 === 9) {
        digits.m1.attr('class', digit_to_name[8]);
        digits.s3.attr('class', digit_to_name[9]);
        }
        console.log(varMinS3_10)
    });
    $('#minusMin').click(() => {
        if(varMinS3_10 === 9 && varMinM1 === 9) {
            console.log("cant change")
        }else {
            varMinS3_10++
        }
        if(varMinS3_10 >= 10) {
            varMinM1++
            varMinS3_10 = 0;
        }
        digits.m1.attr('class', digit_to_name[varMinM1]);
        digits.s3.attr('class', digit_to_name[varMinS3_10]);
        console.log(varMinS3_10)
    })
    function update_time() {
        digits.s1.attr('class', digit_to_name[var24_1]);
        digits.s2.attr('class', digit_to_name[var24_2]);
        digits.m1.attr('class', digit_to_name[varMinM1]);
        digits.s3.attr('class', digit_to_name[varMinS3_10]);
        digits.s4.attr('class', digit_to_name[varMinS4]);
        digits.s5.attr('class', digit_to_name[varMinS5]);
        var24_2++;
        if (var24_2 === 10) {
            var24_2 = 0;
            var24_1++;
        }
        if(var24_1 >= 10 && silentSet === true) {
            digits.s2.attr('class', digit_to_name[9]);
        }else if (var24_1 >= 10 ){
            playVid();
            digits.s2.attr('class', digit_to_name[9]);
            silentSet = true;
        }
        varMinS5++;
        if (varMinS5 >= 10) {
            varMinS5 = 0;
            varMinS4++;
        }
        if (varMinS4 >= 10) {
            varMinS4 = 4;
            varMinS3_10++;
        }
        if(varMinM1 >= 10) {
                quater_change(8, 9)
        }
        if (varMinS3_10 <= -1) {
               varMinM1--; 
               varMinS3_10 = 9;
        }
        if(varMinS3_10 >= 10) {
            varMinM1++;
            varMinS3_10 = 0
        }

        console.log(varMinM1, varMinS3_10)
    }
    $('#00s').click(silent);
    // $('#timeout').click(function () {
    //     if (myTimeterval === -1) {
    //         myTimeterval = setInterval(update_timeout, 1000);
    //         myButton.html("Resume");
    //         clearInterval(myInterval);
    //         myInterval = -1;
    //         myTimeButton.html('Cancel');
    //         digits.s6.attr('class', digit_to_name[4]);
    //         digits.s7.attr('class', digit_to_name[0]);
    //     } else {
    //         myTimeButton.html("Timeout");
    //         clearInterval(myTimeterval);
    //         myTimeterval = -1;
    //         varTimeOutS7 = 1;
    //         varTimeOutS6 = 4;
    //         digits.s6.attr('class', digit_to_name[3]);
    //         digits.s7.attr('class', digit_to_name[9]);
    //     }

    // });
    $('#quater_change').click(function () {
        varQuater++
        myQuater.html(digit_to_quater[varQuater]);
        if (varQuater >= 5) {
        myQuater.html(digit_to_quater[0]);
            varQuater = 0;
        }
        
    })
    myButton.click(function () {

        if (myInterval === -1) {
            myButton.html("Pause");
            myInterval = setInterval(update_time, 1000);
        }else {
            myButton.html("Resume");
            clearInterval(myInterval);
            myInterval = -1;
        }
       if (myTimeterval !== -1) {
            myTimeButton.html("Timeout");
            clearInterval(myTimeterval);
            myTimeterval = -1;
            // varTimeOutS7 = 1;
            // varTimeOutS6 = 4;
            digits.s6.attr('class', digit_to_name[3]);
            digits.s7.attr('class', digit_to_name[9]);
        }
    });
    });
    
    return(
        <div className="score">
            <Timer />
            <CountPoints />
        </div>
    )
}

export default Sroceboard;