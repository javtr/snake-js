import {updateScore} from "./app.js"
let score = 0;

export function scoreAdd(scoreAdd) {
    score = score + scoreAdd;
    updateScore();
    return score;
}

export function scoreReset() {
    score = 0;
    updateScore();
    return score;
}

export function scoreReturn() {
    return score;
}

