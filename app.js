'use strict';

let q1 = prompt("Is it night now?");
let q2 = prompt("IS the moon full?");
let q3 = prompt("DO you like full moons?");

let tempArr = [q1, q2, q3];

quesChecker();

printArr(tempArr);

function quesChecker() {

    for (let index = 0; index < tempArr.length; index++) {
        if (tempArr[index] === null || tempArr[index].trim() === "") {
            tempArr[index] = "Invalid";
        }
    }
}

function printArr(tempArr) {
    for (let index = 0; index < tempArr.length; index++) {
        console.log(tempArr[index]);
    }
}
