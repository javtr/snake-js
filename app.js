import {scoreAdd,scoreReset,scoreReturn} from "./utilities.js";
let score = document.querySelector('#score');



export function updateScore (){
    score.innerHTML = scoreReturn();
}

