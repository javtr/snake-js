import {scoreAdd,scoreReset,scoreReturn} from "./utilities.js";
let score = document.querySelector('#score');
let level = document.querySelector('#level');


export function updateScore (){
    score.innerHTML = scoreReturn();
    level.innerHTML = scoreReturn();
}

