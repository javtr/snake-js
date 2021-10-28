import {crearCanvas, renderizar, snakeBody, snakeFood} from "./graphics.js";
import {scoreAdd,scoreReset,scoreReturn} from "./utilities.js";
import {updateScore} from "./app.js"

//create canvas and context
let canvas = crearCanvas();
let ctx = canvas.ctx; 


//set the fps
let fps = 10;
let start = 0;
let frameDuration = 1000 / fps;

//create the snake
let snake = [];
snake[0] = new snakeBody();

//initial direction of sneak
snake[0].dir = 2;

//create the food
let comida = new snakeFood();
ctx.fillStyle = "red"; 
ctx.fillRect(40,40,20,20)

//start the score
scoreReset();
updateScore(snake.length);


//update the screen
    loop();
    function loop(timestamp) {
        requestAnimationFrame(loop);
        if (timestamp >= start) {
            actualizar();
            renderizar(canvas);
            comida.render(canvas.ctx);

            snake.forEach(elemento => {
                elemento.render(canvas.ctx);
            }
            )

            start = timestamp + frameDuration;
        }
    }

//detect the interaction of snake with the 
//borders, food and same
function  actualizar () {

    snakeUbicacion();

    snake[0].mover();
    if (snake[0].x >= canvas.width) {
        snake[0].x = 0;
    }
    else if (snake[0].x < 0) {
        snake[0].x = canvas.width-20;
    }
    else if (snake[0].y >= canvas.width) {
        snake[0].y = 0;
    }
    else if (snake[0].y < 0) {
        snake[0].y = canvas.width-20;
    }

    if (colision()) {
        snake=[];
        snake[0] = new snakeBody();

        scoreReset()
        updateScore(snake.length);

    }

    if (snake[0].x == comida.x && snake[0].y == comida.y) {
        comida.relocate();
        snake[snake.length] = new snakeBody();
        snakeUbicacion();

        scoreAdd(10);
        updateScore(snake.length);

    }
}

//body and head behavior
function snakeUbicacion(){
    if (snake.length > 1) {
        for (let i = 0; i < snake.length-1; i++) {
            snake[snake.length-i-1].x = snake[snake.length-i-2].x
            snake[snake.length-i-1].y = snake[snake.length-i-2].y
        }
    }
};

//collision
function colision() {
    let hit = false;
    if (snake.length > 1) {
        for (let i = 0; i < snake.length - 1; i++) {
            if (snake[0].x == snake[i + 1].x && snake[0].y == snake[i + 1].y)
                hit = true;
        }
    }
    return hit;
}

//detect keyboard events
window.addEventListener("keydown", KeyHandler, false);

function KeyHandler(event) {
    if (event.keyCode === 37) {
        snake[0].dir = 0
    }
    else if (event.keyCode === 38) {
        snake[0].dir = 1
    }
    else if (event.keyCode === 39) {
    snake[0].dir = 2
    }
    else if (event.keyCode === 40) {
    snake[0].dir = 3
    };
}


//print
function plog(text){
    
    console.log(`
    ${text}
    snake lenght: ${snake.length}
    snake direction: ${snake[0].dir}
    `);
    
    


}