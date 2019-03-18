<script>
    const canvas-background= 'blue';
    const canvas-border = 'blue';
    const snake-color= 'red';
    const food-color= 'yellow';
    
    
    let hungrySnake =[{x:150, y:150},{x:140, y:150},{x:130, y:150}, {x:120, y:150},{x:110, y:150}]
    
    let score=0;
    let dx=10;// horizontal velocity  y-coordinates
    let dy=0;// vertical velocity along x-coordinates
    
    // get the canvas element and return a 2d drwaing context
    var  mainCanvas=document.getElementById("mainCanvas");
    var ctx=mainCanvas.getContext("2d");
    ctx.fillStyle = canvas-background;
    ctx.strokeStyle = canvas-border;
    ctx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
    ctx.strokeRect(0, 0, mainCanvas.width, mainCanvas.height);
        
    main ();//main function call starts the game
    makeFood();// the first food location is created
    
    // when a key is pressed, the direction of the snake changes
    document.addEventListener("keydown", otherDirection);
    
    //main function called repeatedly
    function main(){
        if(gameOver())return;
    setTimeout (function onTick()){
        otherDirection = false;
        clearCanvas();
        makeFood();
        advanceSnake();
        drawSnake();
        
        main();
    },100)
    }
    
    // function to change background of color and add border
    function clearCanvas() {
        ctx.fillStyle = canvas-background;
        ctx.strokeStyle = canvas-border;
        ctx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
        ctx.strokeRect(0, 0, mainCanvas.width, mainCanvas.height);
    }
    
    function gameOver() {
        for(let i=4; i< hungrySnake.length; i++){
            const didCrash = hungrySnake[i].x == hungrySnake[0].x && hungrySnake[i].y == hungrySnake[0].y
            if (didCrash)return true
        }
        
        const leftWallHit = hungrySnake[0].x <0;
        const rightWallHit = hungrySnake[0].x > mainCanvas.width-10;
        const topWallHit = hungrySnake[0].y <0;
        const bottomWallHit = hungrySnake[0].y >mainCanvas.height-10;
        
        return leftWallHit || rightWallHit || topWallHit || bottomWallHit
    }
    
    //function to create the food
    function makeFood(){
        ctx.fillStyle= food-color;
        ctx.fillRect(foodX, foodY, 10, 10);
        ctx.strokeRect(foodX, foodY, 10, 10);
    }
    //changes xcoordinates according to horizontal velocity & ycoordinates according to vertical velocity
    function advanceSnake() {
        const head={x:hungrySnake[0].x + dx, y:hungrySnake[0].y + dy}
        hungrySnake.unshift(head);
        
        const foodEaten = hungrySnake[0].x == foodX && hungrySnake[0].y == foodY;
        if(foodEaten){
            score+=10;
        document.getElementById('score').innerHTML = score;
        
        makeFood();
    } else {
        hungrySnake.pop(); // removes last part of snake body
    }
    }
    //function to generate a random number 
    function randomNum(min, max){
        return Math.round((Math.random()*(max-min)/10) +10;
    }
    
    function makeFood(){
        foodX = randomNum(0, mainCanvas.width - 10);
        foodY = randomNum(0, mainCanvas.height - 10);
        
        hungrySnake.forEach(function isOnSnake(part)){
            if(part.x == foodX && part.y == foodY)
            makeFood();
        }
    };
    //function to draw the snake on the Canvas
    function drawSnake(){
        hungrySnake.forEach(drawSnakePart)
    }
    
    // function to draw a part of the snake on Canvas
    function drawSnakePart(snakePart) {
        ctx.fillStyle = hungrySnake-color;
        ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
        ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
    }
    // function to change the horizontal(x axis) & vertical(y-axis) direction of the snake
    function otherDirection(event){
        const LEFT_KEY = 37;
        const RIGHT_KEY = 39;
        const UP_KEY = 38;
        const DOWN_KEY = 40;
        
        const keyPressed = event.keyCode;
        
        const goUp = dy== -10;
        const goDown = dy == 10;
        const goRight = dx ==10;
        const goLeft = dx == -10;
        
        if (keyPressed == LEFT_KEY && !goRight) {
            dx=-10;
            dy=0;
        }
        if(keyPressed == UP_KEY &&  !goDown){
            dx=0;
            dy=-10;
        }
        if(keyPressed == RIGHT_KEY &&  !goDown){
            dx=10;
            dy=0;
        }
        if(keyPressed == DOWN_KEY &&  !goDown){
            dx=0;
            dy=10;
        }
        
    }
    </script>