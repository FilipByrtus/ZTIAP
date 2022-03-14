const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = 400;
canvas.width = 400;
var cellSize = 50;
const grid = [];

class cell{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
    }
}

const rectangle = {
    width: 20,
    height: 20,
}

function drawSquare(){
    ctx.fillStyle = "green";
    ctx.fillRect(100,100,rectangle.width,rectangle.height);

}
function drawCircle(){
    ctx.beginPath();
    ctx.arc(140,140, 20, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
}
function createGrid(){
    for(let i = 0; i < canvas.width; i += cellSize){
        for (let j = 0; j < canvas.height; j += cellSize){
            grid.push(new cell(i,j));
        }
    }
}
function drawGrid(){
    for(let i = 0; i < grid.length; i++){
        console.log(grid[i].x, grid[i].y,grid[i].width,grid[i].height);
        ctx.beginPath();
        ctx.rect(grid[i].x, grid[i].y,grid[i].width,grid[i].height);
        ctx.stroke();
    }
}

ctx.clearRect(0,0,canvas.width,canvas.height);
drawSquare();
drawCircle();
createGrid();
drawGrid();