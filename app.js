'use strict';

let q1 = prompt("Is it night now?", "Yes/No?");
let q2 = prompt("IS the moon full?");
let q3 = prompt("DO you like full moons?");

quesChecker();

let tempArr = [];
tempArr.push(q1);
tempArr.push(q2);
tempArr.push(q3);

printArr(tempArr);

function quesChecker() {
    if (q1 === null || q1.trim() === "") {
        q1 = "Invalid";
    }
    if (q2 === null || q2.trim() === "") {
        q2 = "Invalid";
    }
    if (q3 === null || q3.trim() === "") {
        q3 = "Invalid";
    }
}

function printArr(tempArr)
{
    for (let index = 0; index < tempArr.length; index++) {   
        console.log(tempArr[index]); 
    }
}
