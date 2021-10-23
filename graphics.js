

//create the cavas and set general parameters
export function crearCanvas(
    width = 400,
    height = 400,
    border = "1px dashed black",
    backgroundcolor = "white",
) {
    let canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.border = border;
    canvas.style.backgroundcolor = backgroundcolor;
    document.body.appendChild(canvas);
    canvas.ctx = canvas.getContext("2d");
    return canvas;
}

//clear the canvas and redraw the grid
export function renderizar(canvas) {
    let ctx = canvas.ctx;

    //clear the canvas
    ctx.clearRect(0,0, canvas.width, canvas.height);

    for (let i = 0; i < 20; i++) {
        ctx.strokeStyle = "gray";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.setLineDash([1, 1]);
        ctx.moveTo(20 * i, 0);
        ctx.lineTo(20 * i, 400);
        ctx.stroke();
        ctx.strokeStyle = "gray";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.setLineDash([2, 1]);
        ctx.moveTo(0, 20 * i);
        ctx.lineTo(400, 20 * i);
        ctx.stroke();
    }
}

export class snakeBody {
    constructor() {
        this.x = 20;
        this.y = 20;
        this.vx = 20;
        this.vy = 0;
        this.dir = 0;
    }

    render(ctx) {
        ctx.fillStyle = "gray";
        ctx.fillRect(this.x, this.y, 20, 20);
    }

    mover(){
        if (this.dir === 0) {
            this.vx = -20; this.vy = 0;
        }
        else if (this.dir === 1) {
            this.vx = 0; this.vy = -20;
        }
        else if (this.dir === 2) {
            this.vx = 20; this.vy = 0;
        }
        else if (this.dir === 3) {
            this.vx = 0; this.vy = 20;
        };

        this.x += this.vx;
        this.y += this.vy;
                
    }
}


export class snakeFood {
    constructor(){
        this.x = Math.floor(Math.random()*20)*20;
        this.y = Math.floor(Math.random()*20)*20;
    }

    render(ctx)
    {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, 20, 20);
    }

    relocate(){
        this.x = Math.floor(Math.random()*20)*20;
        this.y = Math.floor(Math.random()*20)*20;
    }
}
