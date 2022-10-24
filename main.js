img = ""

function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(650, 430);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 650, 430)
    fill('#FF0000');
    text("dog", 45, 75);
    noFill();
    stroke('#FF0000');
    rect(30, 60, 480, 350);
}