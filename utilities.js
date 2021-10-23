let score = 0;

export function scoreAdd() {
    score++;
    return score;
}

export function scoreReset() {
    score = 0;
    return score;
}

export function scoreReturn() {
    return score;
}

