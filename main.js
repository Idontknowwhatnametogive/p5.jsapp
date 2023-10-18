function setup(){
    canvas = createCanvas(640,480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();


}

function draw(){
    image(video, 230, 150, 220, 200);
    fill(19,201,254);
    stroke("green");
    circle(100, 120, 80);
    circle(550, 120, 80);
    circle(550, 400, 80);
    circle(100, 400, 80);
    fill("yellow");
    stroke( 254,10, 150);
    rect(150, 100, 350, 20);
    rect(150, 390, 350, 20);
    rect(90, 160, 20, 200);
    rect(540, 160, 20, 200);




}

function take_snapshot(){
save("frame.png");

}