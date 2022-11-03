const mountains=[];
function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    createCanvas(canvasWidth, canvasHeight);
    
    background('lightgreen')
    
}
function drawBee(xb, yb, size) {
    fill('orange')
    circle(xb, yb, size)
    fill('black')
    circle(xb - size / 3, yb - size / 2, size / 2)
    fill('aliceblue')

}
function drawTree(x2, y2, size) {
    fill('brown')
    rect(x2, y2, size, size * 10)

    stroke('green');
    fill('darkgreen')

    //noFill();
    let counter = 0;
    while (counter < size - size * .30) {
        circle(x2 + size / 2, y2 - size + counter * 10, counter * 10);
        counter += 1
    }

    while (counter < size * - size * .30) {
        circle(x2 + counter * 10, y2, counter * 10);
        counter += 1
    }

    //  fill('green')
    //circle(x2 + size / 2, y2 - size, size * 5)

}
    
function drawLandscapeObject2(x3, y3,) {
    
    strokeWeight(2)
    stroke('black')
    fill('grey')
    triangle(x3, y3, x3 - 25, y3 + 100, x3 + 35, y3 + 100)
    fill('white')
    triangle(x3, y3, x3 - 12, y3 + 50, x3 + 17, y3 + 50)

}

function drawCreature(centerX, centerY, color1, color2) {
    stroke('black')
    size = 100
    fill(color1);
    rect(centerX, centerY, size * .75, size * .5)
    circle(centerX - size * .025, centerY + size * .25, size * .5)
    triangle(centerX + 30, centerY + 200, centerX + 125,
        centerY - 75, centerX + 210, centerY + 200)


    circle(centerX + size * 1, centerY + size * .175, size * 1);

    fill(color2)
    circle(centerX + size * .75, centerY - size * .01, size * .15);
    circle(centerX - size * .1, centerY + size * .1, size * .075);


}
function drawTruck(x, y, size, fillColor, wheelColor = 'black') {
    strokeWeight(0);

    fill(fillColor);
    rect(x - size / 6, y - (size / 5 + size / 7), size / 2, size / 7); // top
    rect(x - size / 2, y - size / 5, size, size / 5); // bottom

    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);

    fill('red');
    rect(x - size, y - (size / 5 + size / 7), size - 75, size / 7); // top
    rect(x - size * 1.75, y - size / 5, size, size / 5); // bottom

    fill(wheelColor);
    circle(x - size * 1.5, y, size / 6);
    circle(x - size * 1.3, y, size / 6);

}

const c1 = {
    x: 100,
    y: 500,
    width: 250,
    speed: 1,
    color: 'darkblue'
    //clear()
};

function onclick(){
    drawLandscapeObject2(mouseX, mouseY,)
}
function draw() {
    clear()

    
    background('lightgreen')
    for(let i = 0; i < mountains.length; i ++){
        drawLandscapeObject2(mountains[i].x, mountains[i].y)
       
    }

    drawTree(500, 100, 25)
    drawCreature(800, 200, 'tan', 'black')
    drawBee(200, 100, 50)
    drawLandscapeObject2(225, 95)
    drawLandscapeObject2(250, 100)
    drawLandscapeObject2(200, 100)
    drawTree(100, 150,10)    
   
     c1.x += c1.speed;
    drawTruck(c1.x, c1.y, c1.width, c1.color);
}
function mouseClicked(){
   
    mountains.push({x: mouseX, y: mouseY,})

}

 


