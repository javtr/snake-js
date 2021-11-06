import {updateScore} from "./app.js"
let score = 0;
let timeAnt;
let timeAct;

export function scoreAdd() {

    let timeDf = timeDiff(new Date());
    timeDf = 1/timeDf;

    if (timeAnt != undefined && timeAnt > 0) {
      score = parseInt(score + 10 * timeDf);
    }
    else
    {
        score = score + 10;
    }

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


export function timeDiff(timeNow) {

    timeAnt = timeAct;
    timeAct = timeNow;

    let diffTime;

    if (timeAnt != undefined) {
      diffTime = (timeAct - timeAnt)/1000;
    }

    return diffTime;
}







