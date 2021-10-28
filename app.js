import {scoreAdd,scoreReset,scoreReturn} from "./utilities.js";
let score = document.querySelector('#score');
let level = document.querySelector('#level');
let lenght = document.querySelector('#lenght');


export function updateScore (snakeLenght){
    score.innerHTML = scoreReturn();
    level.innerHTML = scoreReturn();
    lenght.innerHTML = snakeLenght;
}

