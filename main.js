import {crearCanvas, renderizar, snakeBody, snakeFood} from "./graphics.js";
let canvas = crearCanvas();
let ctx = canvas.ctx; 
let fps = 20;
let start = 0;
let frameDuration = 1000 / fps;

let snake = [];
snake[0] = new snakeBody();
let comida = new snakeFood();

snake[0].dir = 2;


//objetos snake y comida

ctx.fillStyle = "red"; 
ctx.fillRect(40,40,20,20)


//refrescar la pantalla
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

            // snake.render(canvas.ctx);
            start = timestamp + frameDuration;
        }
    }

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
        // console.log(colision);
        // console.log("colision");
        // console.log(snake.length);
        
        snake=[];
        snake[0] = new snakeBody();
    }



    if (snake[0].x == comida.x && snake[0].y == comida.y) {
        comida.relocate();
        snake[snake.length] = new snakeBody();
        snakeUbicacion();

    }
}


function snakeUbicacion(){
    if (snake.length > 1) {
        for (let i = 0; i < snake.length-1; i++) {
            snake[snake.length-i-1].x = snake[snake.length-i-2].x
            snake[snake.length-i-1].y = snake[snake.length-i-2].y
        }
    }
};


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




//listener teclado
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