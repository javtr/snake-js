import {scoreAdd,scoreReset,scoreReturn,getLevel} from "./utilities.js";
let score = document.querySelector('#score');
let level = document.querySelector('#level');
let lenght = document.querySelector('#lenght');


export function updateScore (snakeLenght){
    score.innerHTML = scoreReturn();
    level.innerHTML = getLevel();
    lenght.innerHTML = snakeLenght;
}

