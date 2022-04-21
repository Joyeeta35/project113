function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);
        rect(35, 50, 30, 400);
        
        rect(50, 15, 500, 30);

        rect(50, 435, 500, 30);
    
        circle(50, 30, 50);
    
        circle(50, 450, 50);

                rect(535, 50, 30, 400);
    
                circle(550, 30, 50);
            
                circle(550, 450, 50);
    


}

function take_snapshot(){
    save('student_name.png')
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}